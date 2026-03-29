import { MarketSector } from "@/lib/types";

export function SectorHeatmap({ sectors }: { sectors: MarketSector[] }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Sector Performance
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {sectors.map((sector) => {
          const isPositive = sector.change >= 0;
          return (
            <div
              key={sector.name}
              className={`rounded-lg p-3 text-center ${
                isPositive
                  ? "bg-emerald-50 dark:bg-emerald-950/40"
                  : "bg-red-50 dark:bg-red-950/40"
              }`}
            >
              <p className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                {sector.name}
              </p>
              <p
                className={`mt-1 text-sm font-bold tabular-nums ${
                  isPositive
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {isPositive ? "+" : ""}
                {sector.change.toFixed(2)}%
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
