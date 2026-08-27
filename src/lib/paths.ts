export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * next/image with `unoptimized: true` does not auto-prefix `basePath` the way
 * next/link does, so static assets under public/ need this applied manually.
 */
export function asset(path: string) {
  return `${basePath}/${path.replace(/^\/+/, "")}`;
}
