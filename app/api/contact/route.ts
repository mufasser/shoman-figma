import { MutationSubmitContactForm } from "@/app/graphql/MutationSubmitContactForm";

export const dynamic = "force-dynamic";

type ContactPayload = {
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  services?: string[];
  stage?: string;
  message?: string;
};

type GraphQLFieldError = {
  field?: string | null;
  message?: string | null;
};

type SubmitContactFormResponse = {
  status?: string | null;
  message?: string | null;
  errors?: GraphQLFieldError[] | null;
};

type GraphQLResponse = {
  data?: {
    submitContactForm?: SubmitContactFormResponse | null;
  };
  errors?: { message?: string }[];
};

type ContactFormVariables = {
  formId: string;
  clientMutationId: string;
  fullname: string;
  companyName: string;
  companyEmail: string;
  phoneNumber: string;
  servicesInterestedIn: string;
  businessStage: string;
  tellUsWhatYouNeed: string;
};

function normalizeGraphQLEndpoint(value: string) {
  if (!value) return "";

  try {
    const url = new URL(value);
    if (url.protocol === "http:" && !["localhost", "127.0.0.1"].includes(url.hostname)) {
      url.protocol = "https:";
    }
    if (url.pathname === "/graphql") {
      url.pathname = "/graphql/";
    }
    return url.toString();
  } catch {
    return value;
  }
}

const endpoint = normalizeGraphQLEndpoint(
  process.env.WORDPRESS_GRAPHQL_ENDPOINT ||
  process.env.WP_GRAPHQL_ENDPOINT ||
  process.env.GRAPHQL_ENDPOINT ||
  "",
);

const contactFormId =
  process.env.WORDPRESS_CONTACT_FORM_ID ||
  process.env.CONTACT_FORM_7_ID ||
  process.env.CONTACT_FORM_ID ||
  "";

const wordpressUsername =
  process.env.WORDPRESS_APPLICATION_USERNAME ||
  process.env.WORDPRESS_USERNAME ||
  process.env.WORDPRESS_USER ||
  "";

const wordpressApplicationPassword = process.env.WORDPRESS_APPLICATION_PASSWORD || "";

const fieldLabels: Record<string, string> = {
  fullname: "Fullname",
  "company-name": "Company Name",
  "company-email": "Company Email",
  "phone-number": "Phone Number",
  "services-interested-in": "Services interested in",
  "business-stage": "Business Stage",
  "tell-us-what-you-need": "Tell Us What You Need",
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function makeClientMutationId() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }

  return `contact-${Date.now()}`;
}

function makeAuthHeader() {
  if (wordpressUsername && wordpressApplicationPassword) {
    return `Basic ${Buffer.from(`${wordpressUsername}:${wordpressApplicationPassword}`).toString("base64")}`;
  }

  if (process.env.WORDPRESS_GRAPHQL_TOKEN) {
    return `Bearer ${process.env.WORDPRESS_GRAPHQL_TOKEN}`;
  }

  return "";
}

function getConfigErrors() {
  const errors: string[] = [];

  if (!endpoint) errors.push("WORDPRESS_GRAPHQL_ENDPOINT");
  if (!contactFormId) errors.push("WORDPRESS_CONTACT_FORM_ID");
  if (!process.env.WORDPRESS_GRAPHQL_TOKEN) {
    if (!wordpressUsername) errors.push("WORDPRESS_APPLICATION_USERNAME");
    if (!wordpressApplicationPassword) errors.push("WORDPRESS_APPLICATION_PASSWORD");
  }

  return errors;
}

function getSubmissionSucceeded(result?: SubmitContactFormResponse | null) {
  const status = text(result?.status).toLowerCase();
  const fieldErrors = result?.errors?.filter((error) => text(error?.message)) || [];

  if (fieldErrors.length > 0) return false;
  if (!status) return true;

  return ["mail_sent", "sent", "success", "submitted"].some((successStatus) => status.includes(successStatus));
}

function getFieldErrorMessage(errors?: GraphQLFieldError[] | null) {
  const messages =
    errors
      ?.map((error) => {
        const message = text(error?.message);
        const field = text(error?.field);
        const label = fieldLabels[field] || field;

        if (!message) return "";
        return label ? `${label}: ${message}` : message;
      })
      .filter(Boolean) || [];

  return messages.join(" ");
}

function getRestEndpoint() {
  const graphQLEndpoint = new URL(endpoint);
  return `${graphQLEndpoint.origin}/wp-json/contact-form-7/v1/contact-forms`;
}

function getRestFieldLabel(field: string) {
  return fieldLabels[field] || field;
}

function makeHeaders(includeAuth: boolean) {
  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
  });
  const authHeader = makeAuthHeader();

  if (includeAuth && authHeader) {
    headers.set("Authorization", authHeader);
  }

  return headers;
}

async function submitContactMutation(variables: ContactFormVariables) {
  async function send(includeAuth: boolean) {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: makeHeaders(includeAuth),
      body: JSON.stringify({
        query: String(MutationSubmitContactForm || ""),
        variables,
      }),
      cache: "no-store",
    });

    const graphQLPayload = (await response.json()) as GraphQLResponse;
    const graphQLErrors = graphQLPayload.errors?.map((error) => text(error.message)).filter(Boolean) || [];

    return { response, graphQLPayload, graphQLErrors };
  }

  const authenticatedResult = await send(true);
  const queryWasDropped = authenticatedResult.graphQLErrors.some((message) =>
    message.toLowerCase().includes("must include at least one"),
  );

  if (queryWasDropped && makeAuthHeader()) {
    return send(false);
  }

  return authenticatedResult;
}

type ContactForm7RestForm = {
  id?: number | string;
  title?: string;
  slug?: string;
};

function getRestAuthHeaders() {
  const headers = new Headers({ Accept: "application/json" });
  const authHeader = makeAuthHeader();

  if (authHeader) {
    headers.set("Authorization", authHeader);
  }

  return headers;
}

async function getContactForm7Forms() {
  const response = await fetch(getRestEndpoint(), {
    headers: getRestAuthHeaders(),
    cache: "no-store",
  });

  const payload = await response.json().catch(() => null);

  if (!response.ok || !Array.isArray(payload)) {
    return [];
  }

  return payload as ContactForm7RestForm[];
}

async function resolveContactForm7Id() {
  if (/^\d+$/.test(contactFormId)) {
    return contactFormId;
  }

  const forms = await getContactForm7Forms();
  const configuredValue = contactFormId.toLowerCase();
  const matchingForm = forms.find((form) => {
    const id = text(String(form.id || "")).toLowerCase();
    const title = text(form.title).toLowerCase();
    const slug = text(form.slug).toLowerCase();

    return configuredValue === id || configuredValue === title || configuredValue === slug;
  });

  if (matchingForm?.id) {
    return String(matchingForm.id);
  }

  if (forms.length === 1 && forms[0]?.id) {
    return String(forms[0].id);
  }

  throw new Error(
    "Contact Form 7 is reachable, but WORDPRESS_CONTACT_FORM_ID must be the numeric Contact Form 7 form ID.",
  );
}

async function submitContactFormRest(variables: ContactFormVariables) {
  const resolvedContactFormId = await resolveContactForm7Id();
  const formData = new FormData();

  formData.set("_wpcf7", resolvedContactFormId);
  formData.set("_wpcf7_unit_tag", `wpcf7-f${resolvedContactFormId}-o1`);
  formData.set("_wpcf7_container_post", "0");
  formData.set("_wpcf7_posted_data_hash", "");
  formData.set("fullname", variables.fullname);
  formData.set("company-name", variables.companyName);
  formData.set("company-email", variables.companyEmail);
  formData.set("phone-number", variables.phoneNumber);
  formData.set("services-interested-in", variables.servicesInterestedIn);
  formData.set("business-stage", variables.businessStage);
  formData.set("tell-us-what-you-need", variables.tellUsWhatYouNeed);

  async function send(includeAuth: boolean) {
    const headers = new Headers({ Accept: "application/json" });
    const authHeader = makeAuthHeader();

    if (includeAuth && authHeader) {
      headers.set("Authorization", authHeader);
    }

    return fetch(`${getRestEndpoint()}/${resolvedContactFormId}/feedback`, {
      method: "POST",
      headers,
      body: formData,
      cache: "no-store",
    });
  }

  let response = await send(false);

  if ([401, 403].includes(response.status) && makeAuthHeader()) {
    response = await send(true);
  }

  const payload = await response.json();
  const invalidFields =
    (payload.invalid_fields as { field?: string; message?: string }[] | undefined)
      ?.map((field) => {
        const message = text(field.message);
        const label = getRestFieldLabel(text(field.field).replace(/^.*\./, ""));
        return message ? `${label}: ${message}` : "";
      })
      .filter(Boolean) || [];
  const status = text(payload.status).toLowerCase();
  const message =
    invalidFields.join(" ") ||
    text(payload.message) ||
    "Thanks, your enquiry has been sent. A senior ecommerce engineer will reply within one business day.";

  if (response.status === 404) {
    return {
      success: false,
      status: payload.status || "not_found",
      message:
        "Contact Form 7 rejected the submission route. Confirm WORDPRESS_CONTACT_FORM_ID is the numeric CF7 form ID and the Contact Form 7 REST API is enabled.",
    };
  }

  if (status === "mail_failed") {
    return {
      success: false,
      status: payload.status || "mail_failed",
      message:
        message || "WordPress accepted the contact form, but email delivery failed. Please check SMTP or the Contact Form 7 mail settings.",
    };
  }

  if (!response.ok || status === "validation_failed" || invalidFields.length > 0) {
    return {
      success: false,
      status: payload.status || "failed",
      message,
    };
  }

  return {
    success: true,
    status: payload.status || "mail_sent",
    message,
  };
}

export async function POST(request: Request) {
  const configErrors = getConfigErrors();

  if (configErrors.length > 0) {
    return Response.json(
      {
        success: false,
        message: `Contact form is not fully configured. Missing: ${configErrors.join(", ")}.`,
      },
      { status: 500 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json(
      { success: false, message: "Please submit the form again. The request body could not be read." },
      { status: 400 },
    );
  }

  const name = text(payload.name);
  const email = text(payload.email);

  if (!name || !email) {
    return Response.json(
      { success: false, message: "Please enter your full name and email address." },
      { status: 400 },
    );
  }

  const variables: ContactFormVariables = {
    formId: contactFormId,
    clientMutationId: makeClientMutationId(),
    fullname: name,
    companyName: text(payload.company),
    companyEmail: email,
    phoneNumber: text(payload.phone),
    servicesInterestedIn: Array.isArray(payload.services) ? payload.services.join(", ") : "",
    businessStage: text(payload.stage),
    tellUsWhatYouNeed: text(payload.message),
  };

  try {
    const { response, graphQLPayload, graphQLErrors } = await submitContactMutation(variables);
    const contactFormMutationMissing = graphQLErrors.some((message) =>
      message.includes('Cannot query field "submitContactForm"'),
    );

    if (contactFormMutationMissing) {
      const restResult = await submitContactFormRest(variables);

      return Response.json(restResult, { status: restResult.success ? 200 : 400 });
    }

    if (!response.ok || graphQLErrors.length > 0) {
      return Response.json(
        {
          success: false,
          message: graphQLErrors.join(" ") || "WordPress rejected the contact form request.",
        },
        { status: 502 },
      );
    }

    const result = graphQLPayload.data?.submitContactForm;
    const fieldErrorMessage = getFieldErrorMessage(result?.errors);
    const message =
      text(result?.message) ||
      "Thanks, your enquiry has been sent. A senior ecommerce engineer will reply within one business day.";

    if (!getSubmissionSucceeded(result)) {
      return Response.json(
        {
          success: false,
          status: result?.status || "failed",
          message: fieldErrorMessage || message || "Please check the form fields and try again.",
        },
        { status: 400 },
      );
    }

    return Response.json({
      success: true,
      status: result?.status || "submitted",
      message,
    });
  } catch (error) {
    const message =
      error instanceof Error && error.message
        ? error.message
        : "We could not reach WordPress right now. Please try again in a moment.";

    return Response.json(
      {
        success: false,
        message,
      },
      { status: 502 },
    );
  }
}
