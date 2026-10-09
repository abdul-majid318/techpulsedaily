export function Newsletter() {
  return (
    <section className="relative overflow-hidden rounded-[28px] border border-violet-200 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-orange-50 p-8 dark:border-violet-900 dark:from-violet-950/70 dark:via-slate-900 dark:to-fuchsia-950/40">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
        Newsletter
      </p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white">
        Newsletter subscriptions are not open yet.
      </h3>
      <p className="mt-4 max-w-xl text-sm leading-6 text-slate-600 dark:text-slate-300">
        TechLedger is not collecting email addresses until a subscription service and its privacy process are in place.
      </p>
    </section>
  );
}
