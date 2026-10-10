import { getClients } from "@/app/graphql/content";

export async function GET() {
  try {
    const clients = await getClients();
    return Response.json(
      { clients },
      { headers: { "Cache-Control": "public, max-age=300, s-maxage=3600, stale-while-revalidate=86400" } },
    );
  } catch (error) {
    console.error("Unable to load client logos from GraphQL:", error);
    return Response.json(
      { clients: [], message: "Client logos are temporarily unavailable." },
      { status: 502, headers: { "Cache-Control": "no-store" } },
    );
  }
}
