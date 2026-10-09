"use client";

import { useEffect, useState } from "react";

const consentKey = "techledger-consent-v1";
type Preferences = { analytics: boolean; advertising: boolean };

function readPreferences(): Preferences | null {
  try { const stored = window.localStorage.getItem(consentKey); return stored ? JSON.parse(stored) as Preferences : null; } catch { return null; }
}

export function ConsentManager({ enabled }: { enabled: boolean }) {
  const [preferences, setPreferences] = useState<Preferences | null>(null);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!enabled) return;
    const timer = window.setTimeout(() => {
      const saved = readPreferences();
      setPreferences(saved);
      setOpen(!saved);
    }, 0);
    return () => window.clearTimeout(timer);
  }, [enabled]);
  if (!enabled) return null;
  const save = (next: Preferences) => { window.localStorage.setItem(consentKey, JSON.stringify(next)); setPreferences(next); setOpen(false); };
  if (!open) return <button type="button" onClick={() => setOpen(true)} className="text-sm underline underline-offset-4">Privacy preferences</button>;
  return <section role="dialog" aria-modal="true" aria-labelledby="consent-title" className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-3xl border border-violet-200 bg-white p-6 shadow-2xl dark:border-violet-900 dark:bg-slate-900"><h2 id="consent-title" className="text-xl font-semibold">Privacy choices</h2><p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">Optional analytics and advertising are disabled unless you choose to allow them. Necessary site functionality is available regardless of this choice.</p><fieldset className="mt-4 space-y-3 text-sm"><legend className="font-medium">Optional categories</legend><label className="flex gap-3"><input type="checkbox" checked={preferences?.analytics ?? false} onChange={(event) => setPreferences({ analytics: event.target.checked, advertising: preferences?.advertising ?? false })} />Analytics (not currently configured)</label><label className="flex gap-3"><input type="checkbox" checked={preferences?.advertising ?? false} onChange={(event) => setPreferences({ advertising: event.target.checked, analytics: preferences?.analytics ?? false })} />Advertising (not currently configured)</label></fieldset><div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={() => save({ analytics: false, advertising: false })} className="rounded-full border px-4 py-2 text-sm font-medium">Reject optional cookies</button><button type="button" onClick={() => save(preferences ?? { analytics: false, advertising: false })} className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white dark:bg-white dark:text-slate-900">Save preferences</button><button type="button" onClick={() => save({ analytics: true, advertising: true })} className="rounded-full border px-4 py-2 text-sm font-medium">Accept optional cookies</button></div></section>;
}
