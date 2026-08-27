import { profile } from "@/data/profile";
import { Container } from "./Container";
import { SocialLinks } from "./SocialLinks";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200 py-10 dark:border-neutral-800">
      <Container className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{profile.name}</p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            © {new Date().getFullYear()} · Built with Next.js
          </p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  );
}
