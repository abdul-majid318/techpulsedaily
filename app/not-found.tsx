import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">404</p>
      <h1 className="mt-3 text-5xl font-semibold tracking-tight text-slate-900 dark:text-white">Page not found</h1>
      <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600 dark:text-slate-300">
        The story or page you were looking for may have moved or no longer exists.
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition hover:bg-slate-700 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
        Return home
      </Link>
    </div>
  );
}
