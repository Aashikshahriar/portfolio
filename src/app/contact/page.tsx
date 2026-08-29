import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Contact — Khondakar Ashik Shahriar" };

export default function ContactPage() {
  return (
    <Container className="max-w-xl">
      <Section className="pt-14 pb-20" eyebrow="Say Hello" title="Contact">
        <p className="mb-8 max-w-2xl text-neutral-600 dark:text-neutral-400">
          A well-wisher, a collaborator, or just someone with a thought to share — leave a note below and it'll
          land straight in my inbox.
        </p>
        <ContactForm />
      </Section>
    </Container>
  );
}
