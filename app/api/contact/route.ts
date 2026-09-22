export const dynamic = "force-dynamic";

const DEFAULT_GRAVITY_FORM_URL =
  "https://admin.shomansolutions.com/gravityformsapi/forms/2/submissions";

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  phone?: unknown;
  services?: unknown;
  stage?: unknown;
  message?: unknown;
};

type GravityFormResult = {
  is_valid?: boolean;
  is_spam?: boolean;
  validation_messages?: Record<string, string>;
  code?: string;
  message?: string;
};

type GravityFormResponse = GravityFormResult & {
  status?: number;
  response?: GravityFormResult | string;
};

const fieldLabels: Record<string, string> = {
  "1": "Full name",
  "2": "Email address",
  "3": "Tell Us What You Need",
  "5": "Phone number",
  "14": "Services interested in",
  "15": "Business stage",
  "16": "Company name",
};

function text(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getValidationMessage(messages: GravityFormResult["validation_messages"]) {
  if (!messages || typeof messages !== "object") return "";

  return Object.entries(messages)
    .filter(([, message]) => typeof message === "string" && message.trim())
    .map(([field, message]) => {
      const fieldId = field.replace(/^input_/, "").split(/[._]/)[0];
      return `${fieldLabels[fieldId] || "Form field"}: ${message.trim()}`;
    })
    .join(" ");
}

function getGravityFormResult(payload: unknown): GravityFormResult | null {
  if (!payload || typeof payload !== "object") return null;

  const envelope = payload as GravityFormResponse;
  if (envelope.response && typeof envelope.response === "object") {
    return envelope.response;
  }

  return envelope;
}

export async function POST(request: Request) {
  const customerKey = text(process.env.GRAVITY_FORM_CUSTOMER_KEY);
  const customerSecret = text(process.env.GRAVITY_FORM_CUSTOMER_SECRET);

  if (!customerKey || !customerSecret) {
    return Response.json(
      {
        success: false,
        message: "The contact form is temporarily unavailable. Please try again later or email us directly.",
      },
      { status: 503 },
    );
  }

  let payload: ContactPayload;

  try {
    const body: unknown = await request.json();
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      throw new Error("Invalid form body");
    }
    payload = body as ContactPayload;
  } catch {
    return Response.json(
      { success: false, message: "Please check the form and try again." },
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

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const [firstName, ...lastName] = name.split(/\s+/);
  const services = Array.isArray(payload.services)
    ? payload.services.map(text).filter(Boolean).join(", ")
    : "";

  try {
    const response = await fetch(
      process.env.GRAVITY_FORM_ENDPOINT || DEFAULT_GRAVITY_FORM_URL,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`${customerKey}:${customerSecret}`).toString("base64")}`,
        },
        body: JSON.stringify({
          input_values: {
            input_1_3: firstName,
            input_1_6: lastName.join(" "),
            input_2: email,
            input_3: text(payload.message),
            input_14: services,
            input_15: text(payload.stage),
            input_16: text(payload.company),
            input_5: text(payload.phone),
          },
        }),
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      },
    );

    const body: unknown = await response.json().catch(() => null);
    const result = getGravityFormResult(body);
    const validationMessage = getValidationMessage(result?.validation_messages);

    if (result?.is_valid === false || validationMessage) {
      return Response.json(
        {
          success: false,
          message: validationMessage || "Please check your details and try again.",
        },
        { status: 400 },
      );
    }

    const gravityStatus = (body as GravityFormResponse | null)?.status;

    if (!response.ok || (typeof gravityStatus === "number" && gravityStatus >= 400)) {
      return Response.json(
        {
          success: false,
          message: text(result?.message) || "We couldn't send your enquiry. Please try again shortly.",
        },
        { status: response.status === 429 ? 429 : 502 },
      );
    }

    if (result?.is_spam || result?.is_valid !== true) {
      return Response.json(
        {
          success: false,
          message: "We couldn't confirm your enquiry was sent. Please try again shortly.",
        },
        { status: 502 },
      );
    }

    return Response.json({
      success: true,
      message: "Thank you for your enquiry. Our team will be in touch shortly.",
    });
  } catch {
    return Response.json(
      {
        success: false,
        message: "We couldn't reach the contact service. Please try again shortly.",
      },
      { status: 502 },
    );
  }
}
