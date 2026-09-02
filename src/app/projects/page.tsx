import type { Metadata } from "next";
import { SiGithub } from "react-icons/si";
import { HiOutlineExternalLink } from "react-icons/hi";
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
          <article key={p.name} className="rounded-xl border border-neutral-200 p-6 dark:border-neutral-800">
            <h3 className="font-serif text-xl font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
            <p className="mt-1 text-sm font-medium text-accent-600 dark:text-accent-400">{p.tagline}</p>
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
              <a
                href={p.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-700 hover:text-accent-600 dark:text-neutral-300 dark:hover:text-accent-400"
              >
                <SiGithub className="h-4 w-4" />
                Source
              </a>
              {p.demoUrl && (
                <a
                  href={p.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
                >
                  <HiOutlineExternalLink className="h-4 w-4" />
                  Visualize
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
}
