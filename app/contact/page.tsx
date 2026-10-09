import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for TechPulseDaily editorial questions and reader feedback.",
};

export default function ContactPage() {
  const contactEmail = siteConfig.contactEmail;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Get in touch</h1>
      </div>
      <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900" aria-labelledby="contact-method-heading">
        <h2 id="contact-method-heading" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Contact method</h2>
        {contactEmail ? (
          <p className="mt-4 text-slate-600 dark:text-slate-300">For editorial questions or reader feedback, email <a className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
        ) : (
          <div className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
            <p>A public contact email has not been configured yet, so this site does not collect messages through a form.</p>
            <p className="text-sm">The publisher can enable a contact method by setting <code className="rounded bg-slate-100 px-1.5 py-0.5 text-slate-800 dark:bg-slate-800 dark:text-slate-100">NEXT_PUBLIC_CONTACT_EMAIL</code> after verifying the address and its privacy process.</p>
          </div>
        )}
      </section>
    </div>
  );
}
