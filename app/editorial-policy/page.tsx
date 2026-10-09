import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Editorial Policy",
  description: "TechLedger's current editorial-policy foundation and items pending publisher confirmation.",
};

export default function EditorialPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Editorial policy</h1>
      <div className="mt-8 space-y-6 text-slate-600 dark:text-slate-300">
        <p>This is an editorial-policy foundation, not evidence that every published article has completed a particular review process.</p>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Editorial intent</h2><p className="mt-3">TechLedger aims to publish clear technology coverage with useful context. Coverage should distinguish reporting, analysis, opinion, and practical guidance where that distinction matters.</p></section>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Publisher confirmation required</h2><ul className="mt-3 list-disc space-y-2 pl-5"><li>Named editor, contributor roles, credentials, and contact route.</li><li>Fact-checking, source-review, corrections, update, and conflict-of-interest procedures.</li><li>Methodology and disclosure standards for reviews, comparisons, affiliate links, sponsorships, and AI-assisted work.</li><li>A process for recording ownership, permissions, and image licences.</li></ul></section>
        <section><h2 className="text-xl font-semibold text-slate-900 dark:text-white">Corrections</h2><p className="mt-3">A corrections contact and a published corrections process have not yet been configured. They should be in place before representing this site as an established editorial publication.</p></section>
      </div>
    </div>
  );
}
