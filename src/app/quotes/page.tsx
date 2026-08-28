import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { quotes } from "@/data/quotes";

export const metadata: Metadata = { title: "Quotes — Khondakar Ashik Shahriar" };

export default function QuotesPage() {
  return (
    <Container className="max-w-2xl">
      <Section className="pt-14" eyebrow="Words I Return To" title="Quotes">
        <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
          A small collection of lines that stuck — mostly about honesty, freedom, and why we bother doing any of
          this in the first place.
        </p>
      </Section>

      <div className="space-y-10 pb-20">
        {quotes.map((q) => (
          <figure key={q.text} className="border-l-2 border-neutral-200 pl-6 dark:border-neutral-800">
            <blockquote className="font-serif text-xl leading-snug text-neutral-900 sm:text-2xl dark:text-white">
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">— {q.author}</figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
