import { twMerge } from "tailwind-merge";
import { Link } from "react-router-dom";

export function Button({
  as: Component = "button",
  variant = "primary",
  className,
  children,
  value,
  to,
  ...props
}) {
  const baseClasses =
    "cursor-pointer min-h-11 inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-center rounded-lg focus:ring-4 focus:outline-none uppercase";

  const variants = {
    primary:
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 border border-transparent",
    outline:
      "text-zinc-900 bg-white border border-zinc-300 hover:bg-zinc-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-zinc-200 dark:focus:ring-zinc-800 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:text-white dark:hover:bg-zinc-800",
    green:
      "focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    red: "focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900",
  };

  const combinedClasses = twMerge(
    baseClasses,
    variants[variant] || variants.primary,
    className
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses} {...props}>
        {children}
      </Link>
    );
  }

  if (Component === "input") {
    return <Component className={combinedClasses} value={value} {...props} />;
  }

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
}
