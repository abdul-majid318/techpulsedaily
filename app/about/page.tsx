import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About TechPulseDaily: Practical Technology Coverage",
  description:
    "Learn how TechPulseDaily covers technology, AI, software, cybersecurity, and practical how-to topics for US readers.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">About us</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white">Technology coverage with practical context.</h1>
      <div className="mt-8 space-y-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
        <p>TechPulseDaily is an independent digital publication for US readers who want to make sense of the technology shaping work, home, and everyday life. We cover artificial intelligence, software, cybersecurity, digital privacy, developer tools, and practical how-to topics with an emphasis on useful context over noise.</p>
        <p>Our aim is straightforward: explain what a technology does, why it matters, and what readers can reasonably do next. That can mean comparing everyday AI tools, walking through a Windows backup plan, or helping readers recognize common online scams.</p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900" aria-labelledby="coverage-heading">
          <h2 id="coverage-heading" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">What we cover</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">We focus on timely technology topics and durable guides that help readers evaluate tools, protect their accounts and devices, and use technology with more confidence.</p>
          <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-300">Explore our <Link className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href="/category/artificial-intelligence">AI coverage</Link>, <Link className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href="/category/cybersecurity">cybersecurity guidance</Link>, and <Link className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href="/category/how-to">how-to library</Link>.</p>
        </section>
        <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900" aria-labelledby="standards-heading">
          <h2 id="standards-heading" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">How we work</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">We research articles using relevant primary sources where available, including official documentation, product materials, government guidance, and source organizations. We also consult reputable secondary reporting when it adds needed context.</p>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Before publication, we review claims, links, and practical steps for accuracy and clarity. Technology changes quickly, so an article may be updated when information becomes outdated or a material error is identified.</p>
        </section>
      </div>
      <section className="mt-6 rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900" aria-labelledby="corrections-heading">
        <h2 id="corrections-heading" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Accuracy and corrections</h2>
        <div className="mt-3 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          <p>We welcome specific, good-faith correction requests. If you believe an article contains an error, please include the article URL, the statement in question, and supporting information so we can review it. When we verify a material correction, we will update the article as appropriate.</p>
          <p>Read our <Link className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href="/editorial-policy">editorial policy</Link>, or <Link className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href="/contact">contact us</Link> about a correction or other editorial matter.</p>
        </div>
      </section>
      <section className="mt-6 rounded-[28px] border border-violet-100 bg-violet-50/60 p-6 dark:border-violet-950 dark:bg-violet-950/20" aria-labelledby="start-reading-heading">
        <h2 id="start-reading-heading" className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">Start reading</h2>
        <div className="mt-3 flex flex-col gap-2 text-sm leading-6 sm:flex-row sm:flex-wrap sm:gap-x-5 sm:gap-y-2">
          <Link className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href="/article/how-to-protect-your-online-accounts">How to protect your online accounts</Link>
          <Link className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href="/article/how-to-back-up-windows-11-pc">How to back up a Windows 11 PC</Link>
          <Link className="font-medium text-violet-700 underline underline-offset-4 dark:text-violet-300" href="/article/what-is-retrieval-augmented-generation">What is retrieval-augmented generation?</Link>
        </div>
      </section>
    </div>
  );
}
