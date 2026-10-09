"use client";

import { useEffect, useState } from "react";

export type TableOfContentsItem = {
  id: string;
  title: string;
  level: number;
};

export function TableOfContents({ items }: { items: TableOfContentsItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActive(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  const content = (
    <ul className="space-y-2 text-sm">
      {items.map((item) => (
        <li key={item.id} style={{ marginLeft: `${(item.level - 2) * 12}px` }}>
          <a
            href={`#${item.id}`}
            className={`block rounded-lg px-2 py-1.5 transition ${
              active === item.id
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
            }`}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
          Contents
        </p>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-slate-200 px-2 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-300 md:hidden"
        >
          {open ? "Hide" : "View"}
        </button>
      </div>
      <div className={open || !isMobile ? "block" : "hidden"}>{content}</div>
    </aside>
  );
}
