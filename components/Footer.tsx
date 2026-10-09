import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/articles";

const companyLinks = [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }, { label: "Editorial Policy", href: "/editorial-policy" }];
const legalLinks = [{ label: "Privacy Information", href: "/privacy-policy" }, { label: "Terms of Use", href: "/terms" }, { label: "Disclaimer", href: "/disclaimer" }];
const otherLinks = [{ label: "RSS", href: "/rss.xml" }, { label: "Sitemap", href: "/sitemap.xml" }];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-violet-100 bg-gradient-to-b from-white/60 to-violet-50/80 dark:border-slate-800 dark:from-slate-950 dark:to-violet-950/20">
      <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2"><Link href="/" aria-label="TechPulseDaily home" className="inline-flex rounded-md bg-white/90 px-2 py-1 dark:bg-white"><Image src="/logo.png" alt="TechPulseDaily" width={2172} height={724} className="h-auto w-48" /></Link><p className="mt-4 max-w-sm text-sm leading-6 text-slate-600 dark:text-slate-300">A digital publication for readers seeking practical technology context and clearer guidance.</p></div>
          <FooterLinkGroup title="Categories" links={categories.map((category) => ({ label: category.shortName, href: `/category/${category.slug}` }))} />
          <FooterLinkGroup title="Company" links={companyLinks} />
          <FooterLinkGroup title="Legal" links={legalLinks} />
          <FooterLinkGroup title="Other" links={otherLinks} />
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between"><p>&copy; {new Date().getFullYear()} TechPulseDaily.</p><p>Publisher and contributor information will be published after verification.</p></div>
      </div>
    </footer>
  );
}

function FooterLinkGroup({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return <div><h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{title}</h3><ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">{links.map((link) => <li key={link.href}><Link href={link.href} className="transition hover:text-slate-900 dark:hover:text-white">{link.label}</Link></li>)}</ul></div>;
}
