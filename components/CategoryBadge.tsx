import Link from "next/link";

const categoryColors: Record<string, string> = {
  "artificial-intelligence": "border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/60 dark:text-violet-200 dark:hover:bg-violet-950",
  programming: "border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100 dark:border-sky-800 dark:bg-sky-950/60 dark:text-sky-200 dark:hover:bg-sky-950",
  software: "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 dark:border-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-200 dark:hover:bg-emerald-950",
  cybersecurity: "border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100 dark:border-rose-800 dark:bg-rose-950/60 dark:text-rose-200 dark:hover:bg-rose-950",
  "how-to": "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 dark:border-amber-800 dark:bg-amber-950/60 dark:text-amber-200 dark:hover:bg-amber-950",
  reviews: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700 hover:bg-fuchsia-100 dark:border-fuchsia-800 dark:bg-fuchsia-950/60 dark:text-fuchsia-200 dark:hover:bg-fuchsia-950",
};

export function CategoryBadge({ slug, name }: { slug: string; name: string }) {
  return (
    <Link
      href={`/category/${slug}`}
      className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] transition ${categoryColors[slug] ?? "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"}`}
    >
      {name}
    </Link>
  );
}
