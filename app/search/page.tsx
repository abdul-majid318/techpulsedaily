import type { Metadata } from "next";
import { Suspense } from "react";
import { SearchPageClient } from "@/components/SearchPageClient";

export const metadata: Metadata = {
  title: "Search",
  description: "Search across TechPulseDaily articles by keyword, theme, category, or author.",
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto container px-4 py-10 text-slate-600 dark:text-slate-300">Loading search...</div>}>
      <SearchPageClient />
    </Suspense>
  );
}
