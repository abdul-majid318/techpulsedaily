import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Privacy Information",
  description: "Current privacy information and the details TechLedger must verify before collecting personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Privacy information</h1>
      <div className="mt-8 space-y-6 text-slate-600 dark:text-slate-300">
        <p>This page describes the site&apos;s current configuration. It is not a substitute for a completed privacy policy and does not claim legal compliance.</p>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Current website configuration</h2><p className="mt-3">This codebase does not activate analytics, advertising tags, cookie-consent software, or a newsletter service. The contact page shows an email link only when the publisher configures a public contact address; it does not submit form data to this application.</p></section>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Optional technologies and choices</h2><p className="mt-3">The site can display a preference interface only when the publisher enables optional technologies. Until approved analytics or advertising vendors are configured, no optional scripts are loaded. A browser-stored preference is a technical control, not by itself a complete legal compliance programme.</p></section>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Details the publisher must confirm before data collection</h2><ul className="mt-3 list-disc space-y-2 pl-5"><li>Publisher/controller identity and a privacy contact.</li><li>Actual vendors, cookies, analytics, advertising, newsletter, and contact-form data flows.</li><li>Purposes, lawful bases, retention periods, user-rights process, applicable jurisdictions, and any consent records.</li><li>Notice and consent requirements before enabling personalized advertising or location-related processing.</li></ul></section>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Privacy contact</h2>{siteConfig.contactEmail ? <p className="mt-3">Questions can be sent to <a className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href={`mailto:${siteConfig.contactEmail}`}>{siteConfig.contactEmail}</a>.</p> : <p className="mt-3">A privacy contact has not been published yet. The publisher must configure and verify one before collecting personal data.</p>}</section>
      </div>
    </div>
  );
}
