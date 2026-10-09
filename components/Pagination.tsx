import Link from "next/link";

export function Pagination({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className="mt-10 flex items-center justify-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
      {currentPage > 1 ? (
        <Link
          href={`${basePath}?page=${currentPage - 1}`}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600 dark:hover:text-white"
        >
          Previous
        </Link>
      ) : null}
      <span className="rounded-full bg-slate-900 px-4 py-2 text-white dark:bg-white dark:text-slate-900">
        {currentPage} / {totalPages}
      </span>
      {currentPage < totalPages ? (
        <Link
          href={`${basePath}?page=${currentPage + 1}`}
          className="rounded-full border border-slate-200 bg-white px-4 py-2 transition hover:border-slate-300 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600 dark:hover:text-white"
        >
          Next
        </Link>
      ) : null}
    </nav>
  );
}
