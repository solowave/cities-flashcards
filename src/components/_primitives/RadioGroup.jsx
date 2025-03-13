import { useState } from "react";
import { twMerge } from "tailwind-merge";

export const RadioGroup = {
  Root: ({ children, className }) => (
    <div className={className}>{children}</div>
  ),
  Item: ({ children, className }) => {
    const [isSelected, setIsSelected] = useState(false);

    const baseClasses =
      "cursor-pointer border min-h-11 inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none";

    const state = {
      default:
        "text-zinc-900 bg-white border-zinc-300 hover:bg-zinc-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-zinc-200 dark:focus:ring-zinc-800 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:text-white dark:hover:bg-zinc-800",
      selected:
        "bg-sky-300/20 border-2 border-sky-400 focus:ring-sky-300 text-sky-700",
    };

    const combinedClasses = twMerge(
      baseClasses,
      isSelected ? state.selected : state.default,
      className
    );

    return (
      <button onClick={() => setIsSelected(true)} className={combinedClasses}>
        {children}
      </button>
    );
  },
};
