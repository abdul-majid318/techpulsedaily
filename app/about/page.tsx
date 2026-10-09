import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about TechPulseDaily and its approach to technology coverage.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">About us</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Technology coverage with practical context.</h1>
      <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
        <p>TechPulseDaily publishes technology topics, practical guides, and software coverage for readers seeking clearer context around digital tools and everyday technology.</p>
        <p>The publication&apos;s ownership, editorial contacts, contributor profiles, and operating details will be published when they have been verified by the publisher. This page does not represent unverified individuals, credentials, or business details.</p>
      </div>
      <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Publisher information</h2>
        {siteConfig.publisherName ? <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Publisher: {siteConfig.publisherName}</p> : <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Publisher identity has not been configured. Set <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-800 dark:bg-slate-800 dark:text-slate-100">NEXT_PUBLIC_PUBLISHER_NAME</code> only after the owner has confirmed the public name.</p>}
      </div>
    </div>
  );
}
