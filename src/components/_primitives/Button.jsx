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
  const variants = {
    primary:
      "text-white bg-blue-700 hover:bg-blue-800 focus:ring-blue-300 border border-transparent",
    outline:
      "text-zinc-900 bg-white border border-zinc-300 hover:bg-zinc-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-zinc-200 dark:focus:ring-zinc-800 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:text-white dark:hover:bg-zinc-800",
  };

  const baseClasses =
    "cursor-pointer min-h-11 inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-center rounded-lg focus:ring-4 focus:outline-none";

  const variantClasses = variants[variant] || variants.primary;
  const combinedClasses = className
    ? `${baseClasses} ${variantClasses} ${className}`
    : `${baseClasses} ${variantClasses}`;

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
