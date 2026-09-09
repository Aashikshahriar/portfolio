import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { HiOutlineArrowLeft, HiOutlineExternalLink } from "react-icons/hi";
import { Container } from "@/components/Container";
import { blogPosts } from "@/data/blog";
import { asset } from "@/lib/paths";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  return { title: post ? `${post.title} — Blog` : "Blog" };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <Container className="max-w-2xl">
      <div className="pt-14">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-accent-600 dark:text-neutral-400 dark:hover:text-accent-400"
        >
          <HiOutlineArrowLeft className="h-4 w-4" />
          Back to blog
        </Link>

        <p className="mt-6 text-xs uppercase tracking-wide text-neutral-400 dark:text-neutral-500">
          {formatDate(post.date)}
        </p>
        <h1 className="mt-1 font-serif text-3xl font-semibold text-neutral-900 dark:text-white">{post.title}</h1>

        <div className="mt-8 space-y-4 pb-20">
          {post.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed text-neutral-700 dark:text-neutral-300">
              {paragraph}
            </p>
          ))}
        </div>

        {post.resources && post.resources.length > 0 && (
          <div className="mb-20 rounded-xl border border-neutral-200 p-5 dark:border-neutral-800">
            <p className="mb-3 text-sm font-semibold text-neutral-900 dark:text-white">Resources</p>
            <ul className="space-y-2">
              {post.resources.map((r) => (
                <li key={r.url}>
                  <a
                    href={r.isLocalAsset ? asset(r.url) : r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-accent-600 hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
                  >
                    {r.label}
                    <HiOutlineExternalLink className="h-3.5 w-3.5 flex-shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Container>
  );
}
