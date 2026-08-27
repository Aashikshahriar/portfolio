import type { ReactNode } from "react";

export function Section({
  title,
  eyebrow,
  children,
  className = "",
}: {
  title?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 first:pt-0 ${className}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-400">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="mb-6 font-serif text-2xl font-semibold text-neutral-900 dark:text-white">{title}</h2>
      )}
      {children}
    </section>
  );
}
