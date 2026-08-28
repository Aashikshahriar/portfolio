import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { quotes } from "@/data/quotes";

const notoSerifBengali = Noto_Serif_Bengali({ subsets: ["bengali"], weight: ["400", "600"] });

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
            <blockquote
              lang={q.lang}
              className={`text-xl leading-snug text-neutral-900 sm:text-2xl dark:text-white ${
                q.lang === "bn" ? notoSerifBengali.className : "font-serif"
              }`}
            >
              {q.lines ? (
                q.lines.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))
              ) : (
                <>&ldquo;{q.text}&rdquo;</>
              )}
            </blockquote>
            <figcaption className="mt-3 text-sm text-neutral-500 dark:text-neutral-400">
              — {q.author}
              {q.source && <span className="italic">, {q.source}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </Container>
  );
}
