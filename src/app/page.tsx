import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight, HiOutlineDownload } from "react-icons/hi";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { SocialLinks } from "@/components/SocialLinks";
import { PublicationCard } from "@/components/PublicationCard";
import { profile } from "@/data/profile";
import { highlightedPublications } from "@/data/publications";

export default function Home() {
  return (
    <Container>
      {/* Hero */}
      <Section className="pt-14 pb-16">
        <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
              Welcome
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl dark:text-white">
              {profile.name}
            </h1>
            <p className="mt-3 text-lg text-neutral-600 dark:text-neutral-400">{profile.title}</p>
            <p className="mt-5 max-w-xl text-neutral-600 dark:text-neutral-400">{profile.shortBio}</p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href="/cv"
                className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
              >
                View CV
                <HiOutlineArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${profile.cvFile}`}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-5 py-2.5 text-sm font-medium text-neutral-800 transition hover:border-neutral-400 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-500"
              >
                Download PDF
                <HiOutlineDownload className="h-4 w-4" />
              </a>
            </div>

            <SocialLinks className="mt-8" />
          </div>

          <div className="mx-auto h-40 w-40 flex-shrink-0 overflow-hidden rounded-full ring-4 ring-neutral-100 sm:h-52 sm:w-52 dark:ring-neutral-900">
            <Image
              src={`/${profile.photos.main}`}
              alt={profile.name}
              width={416}
              height={416}
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Affiliations */}
      <Section eyebrow="Currently" title="Affiliations">
        <div className="space-y-4">
          {profile.affiliations.map((a) => (
            <div
              key={a.org + a.role}
              className="flex flex-col justify-between gap-1 rounded-xl border border-neutral-200 p-5 sm:flex-row sm:items-center dark:border-neutral-800"
            >
              <div>
                <p className="font-medium text-neutral-900 dark:text-white">{a.role}</p>
                {a.url && a.url !== "#" ? (
                  <a
                    href={a.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-neutral-500 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400"
                  >
                    {a.org}
                  </a>
                ) : (
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{a.org}</p>
                )}
                {"detail" in a && a.detail && (
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{a.detail}</p>
                )}
              </div>
              <p className="text-sm text-neutral-400 dark:text-neutral-500">{a.period}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section eyebrow="Background" title="Education">
        <div className="space-y-4">
          {profile.education.map((e) => (
            <div key={e.institution} className="rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                <p className="font-medium text-neutral-900 dark:text-white">{e.institution}</p>
                <p className="text-sm text-neutral-400 dark:text-neutral-500">{e.period}</p>
              </div>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{e.degree}</p>
              <ul className="mt-2 space-y-0.5 text-sm text-neutral-500 dark:text-neutral-400">
                {e.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Research Interests */}
      <Section eyebrow="Focus" title="Research Interests">
        <div className="flex flex-wrap gap-2">
          {profile.researchInterests.map((interest) => (
            <span
              key={interest}
              className="rounded-full border border-neutral-200 px-4 py-1.5 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
            >
              {interest}
            </span>
          ))}
        </div>
      </Section>

      {/* Publication highlights */}
      <Section eyebrow="Selected Work" title="Publication Highlights">
        <div className="space-y-4">
          {highlightedPublications.map((p) => (
            <PublicationCard key={p.id} publication={p} />
          ))}
        </div>
        <Link
          href="/publications"
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
        >
          View all publications
          <HiOutlineArrowRight className="h-4 w-4" />
        </Link>
      </Section>
    </Container>
  );
}
