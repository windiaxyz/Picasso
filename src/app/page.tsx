import { IndexCard } from "@/components/index-card";
import { SectorHeatmap } from "@/components/sector-heatmap";
import { NewsFeed } from "@/components/news-feed";
import { marketIndices, marketSectors, marketNews } from "@/lib/mock-data";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Market Overview
        </h2>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          Major indices and market data at a glance
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {marketIndices.map((index) => (
          <IndexCard key={index.symbol} index={index} />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <SectorHeatmap sectors={marketSectors} />
        </div>
        <div>
          <NewsFeed news={marketNews} />
        </div>
      </div>
    </div>
  );
}
