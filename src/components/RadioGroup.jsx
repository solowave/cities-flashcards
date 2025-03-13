import { twMerge } from "tailwind-merge";

export const RadioGroup = {
  Root: ({ children, className }) => (
    <div className={className}>{children}</div>
  ),
  Item: ({ 
    children, 
    className, 
    value, 
    selectedValue, 
    onSelect, 
    disabled = false,
    correct = null,
  }) => {
    const baseClasses =
      "cursor-pointer border min-h-11 inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:outline-none";

    const isSelected = selectedValue === value;
    
    // Determine the state of the button
    let stateClass;
    if (correct === true) {
      stateClass = "bg-green-100 border-2 border-green-500 text-green-700";
    } else if (correct === false) {
      stateClass = "bg-red-100 border-2 border-red-500 text-red-700";
    } else if (isSelected) {
      stateClass = "bg-sky-300/20 border-2 border-sky-400 focus:ring-sky-300 text-sky-700";
    } else {
      stateClass = "text-zinc-900 bg-white border-zinc-300 hover:bg-zinc-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-zinc-200 dark:focus:ring-zinc-800 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:text-white dark:hover:bg-zinc-800";
    }

    const combinedClasses = twMerge(
      baseClasses,
      stateClass,
      disabled ? "opacity-70 cursor-not-allowed" : "",
      className
    );

    return (
      <button 
        onClick={() => !disabled && onSelect && onSelect(value)} 
        className={combinedClasses}
        disabled={disabled}
      >
        {children}
      </button>
    );
  },
};
