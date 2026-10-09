import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Important limitations on TechPulseDaily content.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Disclaimer</h1>
      <div className="mt-8 space-y-6 text-slate-600 dark:text-slate-300">
        <p>TechPulseDaily content is provided for general informational and educational purposes. It is not professional legal, financial, medical, security, or technical advice for a reader&apos;s specific circumstances.</p>
        <p>Technology, product features, pricing, policies, and security guidance can change. Readers should verify current details with the relevant provider or qualified professional before relying on a recommendation or making a decision.</p>
        <p>This page does not create a contractual relationship or make a guarantee about the completeness, accuracy, availability, or suitability of any content. Publisher-specific legal terms still require owner and jurisdiction confirmation.</p>
      </div>
    </div>
  );
}
