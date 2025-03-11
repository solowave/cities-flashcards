export function FilterChip({ label }) {
  return (
    <div className="text-zinc-900 bg-white border border-zinc-300 hover:bg-zinc-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-zinc-200 dark:focus:ring-zinc-800 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:text-white dark:hover:bg-zinc-800">
      {label}
    </div>
  );
}
