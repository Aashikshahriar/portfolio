import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { profile } from "@/data/profile";
import { asset } from "@/lib/paths";

export const metadata: Metadata = { title: "Misc — Khondakar Ashik Shahriar" };

const gallery = [
  { src: profile.photos.alaska, caption: "Alaska — trekking near the glaciers." },
  { src: profile.photos.bungee, caption: "Bungee jumping — chasing a different kind of freefall." },
];

export default function MiscPage() {
  return (
    <Container>
      <Section className="pt-14" eyebrow="Beyond Research" title="Misc">
        <p className="max-w-2xl text-neutral-600 dark:text-neutral-400">
          A few glimpses of life outside the lab — travel, adventure, and the occasional leap of faith.
        </p>
      </Section>

      <Section title="Gallery">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {gallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800"
            >
              <Image
                src={asset(item.src)}
                alt={item.caption}
                width={800}
                height={1000}
                className="h-80 w-full object-cover"
              />
              <figcaption className="p-4 text-sm text-neutral-600 dark:text-neutral-400">{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </Section>
    </Container>
  );
}
