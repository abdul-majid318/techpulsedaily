"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteNavigation } from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85">
      <div className="container mx-auto flex items-center justify-between gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="TechPulseDaily home" className="shrink-0">
          <Image src="/logo-dark.png" alt="TechPulseDaily" width={2172} height={724} priority className="h-auto w-36 sm:w-44 dark:hidden" />
          <Image src="/logo-light.png" alt="" width={2172} height={724} priority className="hidden h-auto w-36 sm:w-44 dark:block" />
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">
          {siteNavigation.map((item) => (
            <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/search" aria-label="Search" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-violet-700 transition hover:border-violet-300 hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-200 lg:w-auto lg:px-4">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="6" />
              <path d="m16 16 4 4" />
            </svg>
            <span className="ml-2 hidden text-sm font-semibold lg:inline">Search</span>
          </Link>
          <ThemeToggle />
          <button type="button" aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-slate-600 dark:hover:bg-slate-800">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
              {open ? <><path d="m6 6 12 12" /><path d="m18 6-12 12" /></> : <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="container mx-auto flex flex-col gap-1">
            {siteNavigation.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
