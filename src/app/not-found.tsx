import Link from "next/link";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="font-serif text-6xl font-semibold text-neutral-300 dark:text-neutral-700">404</p>
      <h1 className="mt-4 text-xl font-medium text-neutral-900 dark:text-white">Page not found</h1>
      <Link href="/" className="mt-6 text-accent-600 hover:underline dark:text-accent-400">
        Back to home
      </Link>
    </Container>
  );
}
