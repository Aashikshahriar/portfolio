import { profile } from "@/data/profile";
import { SocialIcon } from "./icons";

export function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {profile.social.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target={link.url.startsWith("http") ? "_blank" : undefined}
          rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={link.name}
          title={link.name}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:-translate-y-0.5 hover:border-accent-400 hover:text-accent-600 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-accent-500 dark:hover:text-accent-400"
        >
          <SocialIcon icon={link.icon} className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  );
}
