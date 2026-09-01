import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { PublicationCard } from "@/components/PublicationCard";
import { journalArticles, conferencePapers, preprints } from "@/data/publications";
import { underReview } from "@/data/underReview";

export const metadata: Metadata = { title: "Publications — Khondakar Ashik Shahriar" };

function StatusBadge({ status }: { status: "1st Revision" | "Under Review" }) {
  const isRevision = status === "1st Revision";
  return (
    <span
      className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
        isRevision
          ? "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300"
          : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
      }`}
    >
      {status}
    </span>
  );
}

export default function PublicationsPage() {
  return (
    <Container>
      <Section className="pt-14" eyebrow="Research Output" title="Publications">
        <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
          Journal articles, conference proceedings, and preprints spanning biomedical signal processing, medical
          imaging, wireless communications, and privacy-preserving machine learning.
        </p>
      </Section>

      <Section title={`Under Review (${underReview.length})`}>
        <div className="space-y-3">
          {underReview.map((w) => {
            const row = (
              <div className="flex items-start justify-between gap-4 rounded-xl border border-neutral-200 p-4 dark:border-neutral-800">
                <p className="text-neutral-800 dark:text-neutral-200">{w.title}</p>
                <StatusBadge status={w.status} />
              </div>
            );
            return w.relatedPublicationId ? (
              <Link
                key={w.title}
                href={`/publications/${w.relatedPublicationId}`}
                className="block transition hover:opacity-80"
              >
                {row}
              </Link>
            ) : (
              <div key={w.title}>{row}</div>
            );
          })}
        </div>
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
