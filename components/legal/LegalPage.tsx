import type { ReactNode } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./legal-page.css";

export type LegalSection = {
  id: string;
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};

export default function LegalPage({ title, description, sections }: LegalPageProps) {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="legal-page__container">
          <nav className="legal-page__breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight size={14} aria-hidden="true" />
            <span aria-current="page">{title}</span>
          </nav>

          <header className="legal-page__header">
            <span className="legal-page__eyebrow">Legal information</span>
            <h1>{title}</h1>
            <p>{description}</p>
            <time dateTime="2026-10-01">Last updated: 1 October 2026</time>
          </header>

          <div className="legal-page__body">
            <nav className="legal-page__toc" aria-label="On this page">
              <h2>On this page</h2>
              {sections.map(({ id, title: sectionTitle }) => (
                <a key={id} href={`#${id}`}>{sectionTitle}</a>
              ))}
            </nav>
            <article className="legal-page__article">
              {sections.map(({ id, title: sectionTitle, content }) => (
                <section key={id} id={id}>
                  <h2>{sectionTitle}</h2>
                  {content}
                </section>
              ))}
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
