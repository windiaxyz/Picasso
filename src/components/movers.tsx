import { Mover } from "@/lib/types";

function MoverCard({
  mover,
  type,
}: {
  mover: Mover;
  type: "gainer" | "loser";
}) {
  const isGainer = type === "gainer";

  return (
    <div className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
      <div>
        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
          {mover.symbol}
        </p>
        <p className="text-xs text-zinc-500 dark:text-zinc-400">{mover.name}</p>
      </div>
      <div className="text-right">
        <p className="text-sm font-medium tabular-nums text-zinc-900 dark:text-zinc-100">
          ${mover.price.toFixed(2)}
        </p>
        <p
          className={`text-sm font-bold tabular-nums ${
            isGainer
              ? "text-emerald-600 dark:text-emerald-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {isGainer ? "+" : ""}
          {mover.changePercent.toFixed(2)}%
        </p>
      </div>
    </div>
  );
}

export function Movers({
  gainers,
  losers,
}: {
  gainers: Mover[];
  losers: Mover[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-4 text-lg font-semibold text-emerald-600 dark:text-emerald-400">
          Top Gainers
        </h2>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {gainers.map((g) => (
            <MoverCard key={g.symbol} mover={g} type="gainer" />
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-4 text-lg font-semibold text-red-600 dark:text-red-400">
          Top Losers
        </h2>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {losers.map((l) => (
            <MoverCard key={l.symbol} mover={l} type="loser" />
          ))}
        </div>
      </div>
    </div>
  );
}
