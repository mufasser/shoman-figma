export const dynamic = "force-dynamic";

const DEFAULT_GRAVITY_EMAIL_FORM_URL =
  "https://admin.shomansolutions.com/gravityformsapi/forms/3/submissions";

type GravityResult = {
  is_valid?: boolean;
  is_spam?: boolean;
  validation_messages?: Record<string, string>;
};

type GravityResponse = GravityResult & {
  status?: number;
  response?: GravityResult | string;
};

function getResult(payload: unknown): GravityResult | null {
  if (!payload || typeof payload !== "object") return null;

  const envelope = payload as GravityResponse;
  return envelope.response && typeof envelope.response === "object"
    ? envelope.response
    : envelope;
}

export async function POST(request: Request) {
  let email: string;

  try {
    const payload: unknown = await request.json();
    email = typeof (payload as { email?: unknown } | null)?.email === "string"
      ? (payload as { email: string }).email.trim()
      : "";
  } catch {
    return Response.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  if (!email || email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json(
      { success: false, message: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const customerKey = process.env.GRAVITY_FORM_CUSTOMER_KEY?.trim();
  const customerSecret = process.env.GRAVITY_FORM_CUSTOMER_SECRET?.trim();

  if (!customerKey || !customerSecret) {
    return Response.json(
      { success: false, message: "This form is temporarily unavailable. Please try again later." },
      { status: 503 },
    );
  }

  try {
    const response = await fetch(
      process.env.GRAVITY_EMAIL_FORM_ENDPOINT || DEFAULT_GRAVITY_EMAIL_FORM_URL,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Basic ${Buffer.from(`${customerKey}:${customerSecret}`).toString("base64")}`,
        },
        body: JSON.stringify({ input_values: { input_1: email } }),
        cache: "no-store",
        signal: AbortSignal.timeout(15000),
      },
    );

    const body: unknown = await response.json().catch(() => null);
    const result = getResult(body);
    const validationMessage = result?.validation_messages?.["1"]?.trim();

    if (result?.is_valid === false || validationMessage) {
      return Response.json(
        {
          success: false,
          message: validationMessage
            ? `Email address: ${validationMessage}`
            : "Please check your email address and try again.",
        },
        { status: 400 },
      );
    }

    const gravityStatus = (body as GravityResponse | null)?.status;

    if (!response.ok || (typeof gravityStatus === "number" && gravityStatus >= 400)) {
      return Response.json(
        { success: false, message: "We couldn't save your email address. Please try again shortly." },
        { status: response.status === 429 ? 429 : 502 },
      );
    }

    if (result?.is_spam || result?.is_valid !== true) {
      return Response.json(
        { success: false, message: "We couldn't confirm your email was saved. Please try again shortly." },
        { status: 502 },
      );
    }

    return Response.json({
      success: true,
      message: "Thanks! We'll be in touch shortly.",
    });
  } catch {
    return Response.json(
      { success: false, message: "We couldn't reach the contact service. Please try again shortly." },
      { status: 502 },
    );
  }
}
