import type { ReactNode } from "react";

export type AdPlacementName = "article-inline" | "article-sidebar" | "homepage";

/** Disabled boundary for vendor-approved ad markup. It deliberately renders no
 * container, script, refresh, or impression until a real integration supplies children. */
export function AdPlacement({ enabled, children }: { name: AdPlacementName; enabled: boolean; children?: ReactNode }) {
  if (!enabled || !children) return null;
  return <aside aria-label="Advertisement" className="my-8 min-h-[250px] rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">{children}</aside>;
}
