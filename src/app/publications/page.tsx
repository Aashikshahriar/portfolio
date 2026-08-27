import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PublicationCard } from "@/components/PublicationCard";
import { journalArticles, conferencePapers, preprints } from "@/data/publications";

export const metadata: Metadata = { title: "Publications — Khondakar Ashik Shahriar" };

export default function PublicationsPage() {
  return (
    <Container>
      <Section className="pt-14" eyebrow="Research Output" title="Publications">
        <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
          Journal articles, conference proceedings, and preprints spanning biomedical signal processing, medical
          imaging, wireless communications, and privacy-preserving machine learning.
        </p>
      </Section>

      <Section title={`Journal Articles (${journalArticles.length})`}>
        <div className="space-y-4">
          {journalArticles.map((p) => (
            <PublicationCard key={p.id} publication={p} />
          ))}
        </div>
      </Section>

      <Section title={`Conference Proceedings (${conferencePapers.length})`}>
        <div className="space-y-4">
          {conferencePapers.map((p) => (
            <PublicationCard key={p.id} publication={p} />
          ))}
        </div>
      </Section>

      <Section title={`Preprints (${preprints.length})`}>
        <p className="mb-4 text-sm text-neutral-500 dark:text-neutral-400">Not yet peer-reviewed.</p>
        <div className="space-y-4">
          {preprints.map((p) => (
            <PublicationCard key={p.id} publication={p} />
          ))}
        </div>
      </Section>
    </Container>
  );
}
