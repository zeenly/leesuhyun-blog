import type { CollectionEntry } from "astro:content";
import type { Category } from "@consts";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export function categoryHref(category: Category) {
  return `/${category.toLowerCase()}`;
}

// Blog posts live under their category: /class/my-post
export function postHref(post: CollectionEntry<"blog">) {
  return `${categoryHref(post.data.category)}/${post.id}`;
}
