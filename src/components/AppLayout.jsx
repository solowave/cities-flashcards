import { useNavigate } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { LivesTracker } from "./LivesTracker";

export const AppLayout = {
  Root: ({ children }) => (
    <div className="flex flex-col w-full h-dvh">{children}</div>
  ),
  Header: ({ title, citiesNum, isClosable, hasLives = false }) => {
    const navigate = useNavigate();
    return (
      <section className="flex items-center gap-3 px-3 py-2 border-b-1 border-zinc-200 dark:border-zinc-800">
        <button
          onClick={() => navigate(-1)}
          className="size-10 flex items-center justify-center cursor-pointer text-zinc-700 dark:text-zinc-300"
        >
          {isClosable ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6.5L6 18.5M6 6.5L18 18.5" />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m12 19-7-7 7-7" />
              <path d="M19 12H5" />
            </svg>
          )}
        </button>
        <div className="grow">
          <h1 className="text-lg font-bold">{title}</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {citiesNum} cities
          </p>
        </div>
        {hasLives ? <LivesTracker /> : ""}
      </section>
    );
  },
  Body: ({ children, className }) => {
    const DefaultClasses = "h-dvh overflow-y-scroll px-4";
    const CombinedClasses = className
      ? `${DefaultClasses} ${className}`
      : DefaultClasses;

    return <section className={CombinedClasses}>{children}</section>;
  },
  Footer: ({ children, className }) => {
    return (
      <section className={twMerge(`grid gap-3 p-4 ${className}`)}>
        {children}
      </section>
    );
  },
};
