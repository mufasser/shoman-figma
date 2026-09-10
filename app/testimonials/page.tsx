import { getContentPayload } from "@/app/graphql/content";
import TestimonialsPageClient from "./TestimonialsPageClient";

export const dynamic = "force-dynamic";

export default async function TestimonialsPage() {
  const content = await getContentPayload();

  return <TestimonialsPageClient initialTestimonials={content.testimonials} />;
}
