import { createContext, useContext } from "react";
import { useCardStack } from "../hooks/useCardStack";
import { useCountryData } from "../hooks/useCountryData";

/**
 * Context for managing flashcard state and data
 */
const CardsContext = createContext(null);

/**
 * Provider component for flashcard functionality
 * @param {Object} props
 * @param {boolean} props.interactive - Whether cards can be interacted with
 * @param {React.ReactNode} props.children - Child components
 */
export function CardsProvider({ interactive = true, children }) {
  // Get city data
  const { cities, countryName } = useCountryData();

  // Initialize card stack state and controls
  const cardStack = useCardStack(cities, { interactive });

  const value = {
    // Data
    countryName,
    // Stack state and controls
    ...cardStack,
  };

  return (
    <CardsContext.Provider value={value}>{children}</CardsContext.Provider>
  );
}

export function useCards() {
  const context = useContext(CardsContext);
  if (!context) {
    throw new Error("useCards must be used within a CardsProvider");
  }
  return context;
}
