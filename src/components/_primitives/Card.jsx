import { twMerge } from "tailwind-merge";

export function Card({ as: Component = "div", children, className = "" }) {
  return (
    <Component
      className={twMerge(
        `bg-white border border-zinc-200 rounded-lg shadow-sm overflow-hidden hover:bg-zinc-100 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 ${className}`
      )}
    >
      {children}
    </Component>
  );
}
