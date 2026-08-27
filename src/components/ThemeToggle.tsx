"use client";

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-600 dark:hover:text-white"
    >
      {theme === "light" ? <HiOutlineMoon className="h-4 w-4" /> : <HiOutlineSun className="h-4 w-4" />}
    </button>
  );
}
