"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { siteNavigation } from "@/lib/navigation";

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="sticky top-0 z-50 border-b border-violet-100/80 bg-white/85 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85"><div className="mx-auto flex container items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"><Link href="/" aria-label="TechPulseDaily home" className="shrink-0 rounded-md bg-white/90 px-2 py-1 dark:bg-white"><Image src="/logo.png" alt="TechPulseDaily" width={2172} height={724} priority className="h-auto w-40 sm:w-48" /></Link><nav aria-label="Primary navigation" className="hidden items-center gap-6 lg:flex">{siteNavigation.map((item) => <Link key={item.label} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white">{item.label}</Link>)}</nav><div className="flex items-center gap-2"><Link href="/search" className="inline-flex h-10 items-center justify-center rounded-full border border-violet-200 bg-violet-50 px-4 text-sm font-semibold text-violet-700 transition hover:border-violet-300 hover:bg-violet-100 dark:border-violet-800 dark:bg-violet-950/50 dark:text-violet-200">Search</Link><ThemeToggle /><button type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)} className="inline-flex h-10 items-center justify-center rounded-full border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 lg:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">{open ? "Close" : "Menu"}</button></div></div>{open ? <div className="border-t border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-950 lg:hidden"><nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col gap-3">{siteNavigation.map((item) => <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-2 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">{item.label}</Link>)}</nav></div> : null}</header>;
}
