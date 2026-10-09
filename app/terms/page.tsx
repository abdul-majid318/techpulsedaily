import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Current terms-of-use foundation for TechLedger.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Terms of use</h1>
      <div className="mt-8 space-y-6 text-slate-600 dark:text-slate-300">
        <p>These are a preliminary terms-of-use foundation for accessing TechLedger. They do not replace terms prepared for the publisher&apos;s actual entity, jurisdiction, services, or data practices.</p>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Using the site</h2><p className="mt-3">Visitors may read and share links to publicly available content for lawful, personal, and informational use. They must not misrepresent the source, misuse the site, or infringe intellectual-property rights.</p></section>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Content and availability</h2><p className="mt-3">Content may be corrected, updated, removed, or changed as the publication develops. Availability and accuracy are not guaranteed, and readers should review the disclaimer before relying on information.</p></section>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Before publication launch</h2><p className="mt-3">The owner must confirm the legal entity, governing law, dispute/contact process, intellectual-property terms, and any services that collect or process user data before treating these terms as final.</p></section>
      </div>
    </div>
  );
}
