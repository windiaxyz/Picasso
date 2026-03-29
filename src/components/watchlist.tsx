import { Stock } from "@/lib/types";

export function Watchlist({ stocks }: { stocks: Stock[] }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="p-5 pb-3">
        <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Watchlist
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-zinc-100 text-left text-xs font-medium uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:text-zinc-400">
              <th className="px-5 py-3">Symbol</th>
              <th className="px-5 py-3">Name</th>
              <th className="px-5 py-3 text-right">Price</th>
              <th className="px-5 py-3 text-right">Change</th>
              <th className="px-5 py-3 text-right">Volume</th>
              <th className="px-5 py-3 text-right">Market Cap</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {stocks.map((stock) => {
              const isPositive = stock.change >= 0;
              return (
                <tr
                  key={stock.symbol}
                  className="transition-colors hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                >
                  <td className="px-5 py-3 font-semibold text-zinc-900 dark:text-zinc-100">
                    {stock.symbol}
                  </td>
                  <td className="px-5 py-3 text-zinc-600 dark:text-zinc-400">
                    {stock.name}
                  </td>
                  <td className="px-5 py-3 text-right tabular-nums font-medium text-zinc-900 dark:text-zinc-100">
                    ${stock.price.toFixed(2)}
                  </td>
                  <td
                    className={`px-5 py-3 text-right tabular-nums font-medium ${
                      isPositive
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {stock.changePercent.toFixed(2)}%
                  </td>
                  <td className="px-5 py-3 text-right tabular-nums text-zinc-600 dark:text-zinc-400">
                    {stock.volume}
                  </td>
                  <td className="px-5 py-3 text-right tabular-nums text-zinc-600 dark:text-zinc-400">
                    ${stock.marketCap}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
