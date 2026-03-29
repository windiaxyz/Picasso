import { ForexPair, CryptoAsset } from "@/lib/types";

export function ForexCrypto({
  forex,
  crypto,
}: {
  forex: ForexPair[];
  crypto: CryptoAsset[];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Forex */}
      <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Forex
        </h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {forex.map((pair) => {
            const isPositive = pair.change >= 0;
            return (
              <div
                key={pair.pair}
                className="rounded-lg border border-zinc-100 p-3 dark:border-zinc-800"
              >
                <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                  {pair.pair}
                </p>
                <p className="mt-1 text-base font-bold tabular-nums text-zinc-900 dark:text-zinc-100">
                  {pair.rate.toFixed(4)}
                </p>
                <p
                  className={`text-xs font-medium tabular-nums ${
                    isPositive
                      ? "text-emerald-600 dark:text-emerald-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {isPositive ? "+" : ""}
                  {pair.change.toFixed(2)}%
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Crypto */}
      <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
          Crypto
        </h2>
        <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
          {crypto.map((coin) => {
            const isPositive = coin.change >= 0;
            return (
              <div
                key={coin.symbol}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
              >
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {coin.symbol}
                  </p>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {coin.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium tabular-nums text-zinc-900 dark:text-zinc-100">
                    $
                    {coin.price.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </p>
                  <p
                    className={`text-xs font-bold tabular-nums ${
                      isPositive
                        ? "text-emerald-600 dark:text-emerald-400"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {isPositive ? "+" : ""}
                    {coin.changePercent.toFixed(2)}%
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
