import { HiOutlineExternalLink } from "react-icons/hi";
import type { Publication } from "@/data/publications";
import { AUTHOR } from "@/data/publications";

function AuthorLine({ authors }: { authors: string }) {
  const parts = authors.split(", ");
  return (
    <p className="text-sm text-neutral-500 dark:text-neutral-400">
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
    <a
      href={publication.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-neutral-200 p-5 transition hover:border-accent-400 hover:shadow-sm dark:border-neutral-800 dark:hover:border-accent-500"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-medium text-neutral-900 group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
          {publication.title}
        </h3>
        <HiOutlineExternalLink className="mt-1 h-4 w-4 flex-shrink-0 text-neutral-400 group-hover:text-accent-500" />
      </div>
      <AuthorLine authors={publication.authors} />
      <p className="mt-2 text-sm italic text-neutral-500 dark:text-neutral-400">
        {publication.venue}, {publication.year}
      </p>
    </a>
  );
}
