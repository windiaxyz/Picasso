export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-zinc-900 dark:bg-zinc-100" />
          <h1 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            MarketPicasso
          </h1>
        </div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Market Dashboard
        </p>
      </div>
    </header>
  );
}
