import { getContentPayload } from "@/app/graphql/content";

export const dynamic = "force-dynamic";

export async function GET() {
  const payload = await getContentPayload();

  return Response.json(payload, {
    headers: {
      "Cache-Control": "no-store, max-age=0",
    },
  });
}
