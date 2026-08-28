import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiOutlineArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import { Container } from "@/components/Container";
import { AuthorLine } from "@/components/PublicationCard";
import { publications } from "@/data/publications";
import { asset } from "@/lib/paths";

const typeLabel = { journal: "Journal Article", conference: "Conference Paper", "pre-print": "Preprint" } as const;

export function generateStaticParams() {
  return publications.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const publication = publications.find((p) => p.id === id);
  return { title: publication ? `${publication.title} — Publications` : "Publications" };
}

export default async function PublicationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const publication = publications.find((p) => p.id === id);
  if (!publication) notFound();

  return (
    <Container className="max-w-2xl">
      <div className="pt-14 pb-20">
        <Link
          href="/publications"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400"
        >
          <HiOutlineArrowLeft className="h-4 w-4" />
          Back to publications
        </Link>

        <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
          {typeLabel[publication.type]}
        </p>
        <h1 className="mt-1 font-serif text-2xl font-semibold leading-snug text-neutral-900 sm:text-3xl dark:text-white">
          {publication.title}
        </h1>
        <AuthorLine authors={publication.authors} className="mt-3 text-neutral-600 dark:text-neutral-400" />
        <p className="mt-1 text-sm italic text-neutral-500 dark:text-neutral-500">
          {publication.venue}, {publication.year}
        </p>

        <a
          href={publication.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
        >
          View at {publication.venue}
          <HiOutlineExternalLink className="h-4 w-4" />
        </a>

        {publication.graphicalAbstract && (
          <figure className="mt-10 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
            <Image
              src={asset(`publications/${publication.graphicalAbstract}`)}
              alt={publication.caption ?? publication.title}
              width={1600}
              height={900}
              className="w-full bg-white object-contain"
            />
            {publication.caption && (
              <figcaption className="border-t border-neutral-200 p-4 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
                {publication.caption}
              </figcaption>
            )}
          </figure>
        )}

        {publication.abstract && (
          <div className="mt-10">
            <h2 className="mb-3 font-serif text-xl font-semibold text-neutral-900 dark:text-white">Abstract</h2>
            <p className="leading-relaxed text-neutral-700 dark:text-neutral-300">{publication.abstract}</p>
          </div>
        )}
      </div>
    </Container>
  );
}
