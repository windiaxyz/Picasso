import { MarketNews } from "@/lib/types";

export function NewsFeed({ news }: { news: MarketNews[] }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        Market News
      </h2>
      <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
        {news.map((item) => (
          <li key={item.id} className="py-3 first:pt-0 last:pb-0">
            <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {item.title}
            </p>
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              {item.source} &middot; {item.time}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
