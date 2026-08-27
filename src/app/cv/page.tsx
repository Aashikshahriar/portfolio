import type { Metadata } from "next";
import Link from "next/link";
import { HiOutlineDownload, HiOutlineExternalLink } from "react-icons/hi";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { publications } from "@/data/publications";
import { asset } from "@/lib/paths";

export const metadata: Metadata = { title: "CV — Khondakar Ashik Shahriar" };

export default function CvPage() {
  return (
    <Container>
      <Section className="pt-14 pb-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <h1 className="font-serif text-3xl font-semibold text-neutral-900 dark:text-white">Curriculum Vitae</h1>
            <p className="mt-2 text-neutral-600 dark:text-neutral-400">
              {profile.email} · {profile.phone}
            </p>
          </div>
          <a
            href={asset(profile.cvFile)}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
          >
            Download PDF
            <HiOutlineDownload className="h-4 w-4" />
          </a>
        </div>
      </Section>

      <Section title="Education">
        {profile.education.map((e) => (
          <div key={e.institution} className="mb-4 last:mb-0">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <p className="font-medium text-neutral-900 dark:text-white">{e.institution}</p>
              <p className="text-sm text-neutral-400 dark:text-neutral-500">{e.period}</p>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">{e.degree}</p>
            <ul className="mt-1 space-y-0.5 text-sm text-neutral-500 dark:text-neutral-400">
              {e.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Section title="Research Experience & Affiliations">
        <div className="space-y-4">
          {profile.affiliations.map((a) => (
            <div key={a.org + a.role} className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">
                  {a.role} <span className="font-normal text-neutral-500 dark:text-neutral-400">— {a.org}</span>
                </p>
                {"detail" in a && a.detail && (
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{a.detail}</p>
                )}
              </div>
              <p className="whitespace-nowrap text-sm text-neutral-400 dark:text-neutral-500">{a.period}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Publications">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {publications.length} publications ({publications.filter((p) => p.type === "journal").length} journal
          articles, {publications.filter((p) => p.type === "conference").length} conference proceedings,{" "}
          {publications.filter((p) => p.type === "pre-print").length} preprints). See the{" "}
          <Link href="/publications" className="text-accent-600 underline dark:text-accent-400">
            full publications page
          </Link>{" "}
          for details and links.
        </p>
      </Section>

      <Section title="Research Interests">
        <div className="flex flex-wrap gap-2">
          {profile.researchInterests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </Section>

      <Section title="Journal Reviewer">
        <ul className="list-inside list-disc space-y-1 text-neutral-700 dark:text-neutral-300">
          {profile.reviewer.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </Section>

      <Section title="Leadership">
        <ul className="space-y-1 text-neutral-700 dark:text-neutral-300">
          {profile.leadership.map((l) => (
            <li key={l.role + l.org}>
              <span className="font-medium text-neutral-900 dark:text-white">{l.role}</span>, {l.org}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Technical Skills">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Object.entries(profile.skills).map(([category, items]) => (
            <div key={category}>
              <p className="mb-1 text-sm font-semibold text-neutral-900 dark:text-white">{category}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{items.join(", ")}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Honors and Awards">
        <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300">
          {profile.honors.map((h) => (
            <li key={h.title} className="flex items-center gap-1.5">
              {h.url ? (
                <a
                  href={h.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-accent-600 dark:hover:text-accent-400"
                >
                  {h.title}
                  <HiOutlineExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-neutral-400" />
                </a>
              ) : (
                <span>{h.title}</span>
              )}
            </li>
          ))}
        </ul>
      </Section>

      <Section title="English Proficiency">
        <p className="text-neutral-700 dark:text-neutral-300">
          <span className="font-medium text-neutral-900 dark:text-white">{profile.englishProficiency.test}:</span>{" "}
          {profile.englishProficiency.score}{" "}
          <a
            href={profile.englishProficiency.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-600 underline dark:text-accent-400"
          >
            [score report]
          </a>
        </p>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">({profile.englishProficiency.breakdown})</p>
      </Section>

      <Section title="References">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {profile.references.map((r) => (
            <div key={r.name}>
              <p className="font-medium text-neutral-900 dark:text-white">{r.name}</p>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{r.role}</p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">{r.relation}</p>
              <a
                href={`mailto:${r.email}`}
                className="text-sm text-accent-600 hover:underline dark:text-accent-400"
              >
                {r.email}
              </a>
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}
