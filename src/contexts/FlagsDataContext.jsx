import { useState, useEffect, createContext } from "react";

export const FlagsDataContext = createContext(null);

export default function FlagsDataProvider({ children }) {
  const [flagsData, setFlagsData] = useState(null);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFlagsData() {
      try {
        const response = await fetch(
          `${import.meta.env.BASE_URL}country-city-flags.json`
        );
        const data = await response.json();
        setFlagsData(data);
      } catch (error) {
        setError(error);
        console.error("Error loading data", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchFlagsData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data...</div>;

  return (
    <FlagsDataContext.Provider value={{ flagsData }}>
      {children}
    </FlagsDataContext.Provider>
  );
}
