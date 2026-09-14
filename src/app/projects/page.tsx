import type { Metadata } from "next";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink, HiOutlineSparkles } from "react-icons/hi";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { projects } from "@/data/projects";

export const metadata: Metadata = { title: "Projects — Khondakar Ashik Shahriar" };

export default function ProjectsPage() {
  return (
    <Container>
      <Section className="pt-14" eyebrow="Things I've Built" title="Projects">
        <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
          A few side projects — mostly built to make an idea click for myself first, and hopefully for anyone else
          poking at them too.
        </p>
      </Section>

      <div className="space-y-6 pb-20">
        {projects.map((p) => (
          <article
            key={p.name}
            className={`rounded-xl border p-6 ${
              p.highlight
                ? "border-accent-300 bg-accent-50/50 dark:border-accent-700 dark:bg-accent-900/10"
                : "border-neutral-200 dark:border-neutral-800"
            }`}
          >
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-serif text-xl font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
              {p.highlight && (
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-100 px-2.5 py-0.5 text-xs font-medium text-accent-700 dark:bg-accent-900/40 dark:text-accent-300">
                  <HiOutlineSparkles className="h-3.5 w-3.5" />
                  Featured
                </span>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">{p.tagline}</p>
            {p.org && (
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">Built at {p.org}</p>
            )}
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              {p.repoUrl && (
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-accent-600 dark:text-neutral-300 dark:hover:text-accent-400"
                >
                  <SiGithub className="h-4 w-4" />
                  Source
                </a>
              )}
              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
                >
                  <HiOutlineExternalLink className="h-4 w-4" />
                  {p.demoLabel ?? "Visualize"}
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
