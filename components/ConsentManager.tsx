"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const consentKey = "techpulsedaily-consent-v2";
type Preferences = { analytics: boolean; advertising: boolean };

function readPreferences(): Preferences | null {
  try { const stored = window.localStorage.getItem(consentKey); return stored ? JSON.parse(stored) as Preferences : null; } catch { return null; }
}

export function ConsentManager({ enabled }: { enabled: boolean }) {
  const [preferences, setPreferences] = useState<Preferences | null>(null);
  const [savedPreferences, setSavedPreferences] = useState<Preferences | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    const timer = window.setTimeout(() => {
      const saved = readPreferences();
      setPreferences(saved);
      setSavedPreferences(saved);
      setOpen(!saved);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [enabled]);
  if (!enabled) return null;
  const save = (next: Preferences) => {
    try { window.localStorage.setItem(consentKey, JSON.stringify(next)); } catch { return; }
    if (savedPreferences?.advertising === true && !next.advertising) { window.location.reload(); return; }
    setPreferences(next); setSavedPreferences(next); setOpen(false);
  };
  return <>
    {process.env.NODE_ENV === "production" && savedPreferences?.advertising === true && <Script id="monetag-in-page-push" strategy="afterInteractive">{"(function(s){s.dataset.zone='12059439',s.src='https://nap5k.com/tag.min.js'})([document.documentElement, document.body].filter(Boolean).pop().appendChild(document.createElement('script')))"}</Script>}
    {!open ? <button type="button" onClick={() => setOpen(true)} className="text-sm underline underline-offset-4">Privacy preferences</button> : <section role="dialog" aria-modal="true" aria-labelledby="consent-title" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-3xl border border-violet-200 bg-white p-6 shadow-2xl dark:border-violet-900 dark:bg-slate-900"><h2 id="consent-title" className="text-xl font-semibold">Privacy choices</h2><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Allowing advertising loads Monetag, which may use device information and cookies to deliver ads. You can change your choice at any time. See our <a href="/privacy-policy" className="underline">privacy information</a>.</p><fieldset className="mt-4 space-y-3 text-sm"><legend className="font-medium">Optional categories</legend><label className="flex gap-3"><input type="checkbox" checked={preferences?.analytics ?? false} onChange={(event) => setPreferences({ analytics: event.target.checked, advertising: preferences?.advertising ?? false })} />Analytics (not currently configured)</label><label className="flex gap-3"><input type="checkbox" checked={preferences?.advertising ?? false} onChange={(event) => setPreferences({ advertising: event.target.checked, analytics: preferences?.analytics ?? false })} />Advertising (Monetag)</label></fieldset><div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={() => save({ analytics: false, advertising: false })} className="rounded-full border px-4 py-2 text-sm font-medium">Reject optional cookies</button><button type="button" onClick={() => save(preferences ?? { analytics: false, advertising: false })} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-slate-900">Save preferences</button><button type="button" onClick={() => save({ analytics: true, advertising: true })} className="rounded-full border px-4 py-2 text-sm font-medium">Accept optional cookies</button></div></section>}
  </>;
}
