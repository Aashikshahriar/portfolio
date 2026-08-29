"use client";

import { useState, type FormEvent } from "react";
import { FORMSPREE_ENDPOINT, isContactFormConfigured } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!isContactFormConfigured) {
    return (
      <div className="rounded-xl border border-dashed border-neutral-300 p-6 text-sm text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
        The contact form isn&apos;t wired up yet — check back soon.
      </div>
    );
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-neutral-200 p-6 text-neutral-700 dark:border-neutral-800 dark:text-neutral-300">
        Thanks for the message — it&apos;s on its way!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot spam trap, hidden from real visitors */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" />

      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-accent-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Email <span className="font-normal text-neutral-400">(optional, if you'd like a reply)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-accent-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-neutral-900 outline-none focus:border-accent-500 dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-neutral-700 disabled:opacity-60 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Something went wrong sending that — mind trying again?
        </p>
      )}
    </form>
  );
}
