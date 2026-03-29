import { MarketIndex } from "@/lib/types";

export function IndexCard({ index }: { index: MarketIndex }) {
  const isPositive = index.change >= 0;

  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {index.symbol}
          </p>
          <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {index.name}
          </p>
        </div>
      </div>
      <div className="mt-3">
        <p className="text-2xl font-bold tabular-nums text-zinc-900 dark:text-zinc-100">
          {index.value.toLocaleString("en-US", {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
        <p
          className={`mt-1 text-sm font-medium tabular-nums ${
            isPositive
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {isPositive ? "+" : ""}
          {index.change.toFixed(2)} ({isPositive ? "+" : ""}
          {index.changePercent.toFixed(2)}%)
        </p>
      </div>
    </div>
  );
}
