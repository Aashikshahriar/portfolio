import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowRight } from "react-icons/hi";
import type { Publication } from "@/data/publications";
import { AUTHOR } from "@/data/publications";
import { asset } from "@/lib/paths";

export function AuthorLine({ authors, className }: { authors: string; className?: string }) {
  const parts = authors.split(", ");
  return (
    <p className={className ?? "text-sm text-neutral-500 dark:text-neutral-400"}>
      {parts.map((part, i) => {
        const isSelf = part.replace("*", "") === AUTHOR;
        return (
          <span key={part}>
            <span className={isSelf ? "font-semibold text-neutral-700 dark:text-neutral-200" : undefined}>
              {part}
            </span>
            {i < parts.length - 1 ? ", " : ""}
          </span>
        );
      })}
    </p>
  );
}

export function PublicationCard({ publication }: { publication: Publication }) {
  return (
    <Link
      href={`/publications/${publication.id}`}
      className="group flex items-start gap-4 rounded-xl border border-neutral-200 p-5 transition hover:border-accent-400 hover:shadow-sm dark:border-neutral-800 dark:hover:border-accent-500"
    >
      {publication.graphicalAbstract && (
        <Image
          src={asset(`publications/${publication.graphicalAbstract}`)}
          alt=""
          width={96}
          height={96}
          className="h-16 w-16 flex-shrink-0 rounded-lg border border-neutral-200 bg-white object-cover sm:h-20 sm:w-20 dark:border-neutral-800"
        />
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-medium text-neutral-900 group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
            {publication.title}
          </h3>
          <HiOutlineArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:text-accent-500" />
        </div>
        <AuthorLine authors={publication.authors} />
        <p className="mt-2 text-sm italic text-neutral-500 dark:text-neutral-400">
          {publication.venue}, {publication.year}
        </p>
      </div>
    </Link>
  );
}
