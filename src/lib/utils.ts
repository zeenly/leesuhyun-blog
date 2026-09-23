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

// A post's description, or a summary from its first paragraph when it has none.
export function postDescription(post: CollectionEntry<"blog">, maxLength = 160) {
  if (post.data.description) return post.data.description;

  const paragraph = (post.body ?? "")
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find(
      (block) =>
        block &&
        !/^(#|!\[|```|<|import |export |---|\||- |\* |\d+\. )/.test(block),
    );
  if (!paragraph) return "";

  const text = paragraph
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "") // images
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1") // links -> link text
    .replace(/[*_`~>]/g, "") // emphasis, code, quotes
    .replace(/\s+/g, " ")
    .trim();
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trimEnd()}…` : text;
}

// Blog posts live under their category: /class/my-post
export function postHref(post: CollectionEntry<"blog">) {
  return `${categoryHref(post.data.category)}/${post.id}`;
}
