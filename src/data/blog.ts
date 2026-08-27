export type BlogPost = {
  slug: string;
  title: string;
  date: string; // ISO date
  excerpt: string;
  content: string[]; // paragraphs
};

// Starter placeholder post so the blog section has something to render.
// Edit or replace the entries below with your own writing.
export const blogPosts: BlogPost[] = [
  {
    slug: "welcome",
    title: "Welcome to my blog",
    date: "2026-08-28",
    excerpt:
      "A quick note on why I'm starting this blog and what I plan to write about — research notes, paper breakdowns, and things I learn along the way.",
    content: [
      "This is the first post on my personal blog. I plan to use this space to write short notes on papers I'm reading, experiments I'm running, and lessons learned while working across biomedical signal processing, medical imaging, and wireless communications.",
      "Expect a mix of technical deep-dives (e.g. on domain adaptation, privacy-preserving ML, or EEG-fMRI artifact removal) and occasional posts on conferences, travel, and life outside the lab.",
      "Replace this post with your own writing whenever you're ready — the blog is wired up in src/data/blog.ts.",
    ],
  },
];
