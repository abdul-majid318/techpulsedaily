import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact TechPulseDaily",
  description:
    "Contact TechPulseDaily for general questions, editorial corrections, feedback, and business inquiries.",
};

export default function ContactPage() {
  const contactEmail = siteConfig.contactEmail;

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">Contact</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Get in touch</h1>
        <p className="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">Email is the best way to reach TechPulseDaily. We read messages sent to the address below and route them to the appropriate review process.</p>
      </div>
      <section className="rounded-[28px] border border-violet-200 bg-violet-50/70 p-6 shadow-sm dark:border-violet-950 dark:bg-violet-950/20" aria-labelledby="contact-email-heading">
        <h2 id="contact-email-heading" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Email TechPulseDaily</h2>
        <a className="mt-4 inline-block break-all text-xl font-semibold text-violet-700 underline underline-offset-4 dark:text-violet-300" href={`mailto:${contactEmail}`}>{contactEmail}</a>
      </section>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ContactSection title="General inquiries" body="For questions about TechPulseDaily, our coverage, or navigating the site." subject="General inquiry" />
        <ContactSection title="Editorial corrections" body="To report a possible inaccuracy, include the article URL, the statement in question, and any supporting source or context." subject="Editorial correction" />
        <ContactSection title="Feedback" body="Share a story idea, a suggestion for a future guide, or feedback about an article you found useful." subject="Reader feedback" />
        <ContactSection title="Business inquiries" body="For business, partnership, or other non-editorial inquiries. Please include enough detail for us to understand your request." subject="Business inquiry" />
      </div>
      <p className="mt-6 text-sm leading-6 text-slate-500 dark:text-slate-400">TechPulseDaily does not use a contact form on this site. Sending an email opens your email application; please avoid sending sensitive personal, financial, or account information.</p>
    </div>
  );
}

function ContactSection({ title, body, subject }: { title: string; body: string; subject: string }) {
  const email = siteConfig.contactEmail;

  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">{title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{body}</p>
      <a className="mt-4 inline-block text-sm font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href={`mailto:${email}?subject=${encodeURIComponent(`TechPulseDaily: ${subject}`)}`}>Email about {title.toLowerCase()}</a>
    </section>
  );
}
