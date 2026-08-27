import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = { title: "Blog — Khondakar Ashik Shahriar" };

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <Container>
      <Section className="pt-14" eyebrow="Notes" title="Blog">
        <p className="mb-8 max-w-2xl text-neutral-600 dark:text-neutral-400">
          Research notes, paper breakdowns, and the occasional post about life outside the lab.
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-xl border border-neutral-200 p-5 transition hover:border-accent-400 hover:shadow-sm dark:border-neutral-800 dark:hover:border-accent-500"
            >
              <p className="text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
                {formatDate(post.date)}
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold text-neutral-900 group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400">
                {post.title}
              </h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </Section>
    </Container>
  );
}
