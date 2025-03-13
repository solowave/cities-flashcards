import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { useQuiz } from "../hooks/useQuiz";
import { useCards } from "./CardsContext";

const QuizContext = createContext(null);

/**
 * Provider component for quiz functionality
 * @param {Object} props
 * @param {React.ReactNode} props.children - Child components
 */
export function QuizProvider({ children }) {
  // Get card stack state and data from CardsContext
  const { visibleItems, nextItem, isAnswerRevealed, setIsAnswerRevealed, stackRestart: originalStackRestart } = useCards();
  
  // Get current city (first card in stack)
  const currentCity = visibleItems[0];
  
  // Store options for the current card to prevent reshuffling
  const [currentOptions, setCurrentOptions] = useState([]);
  const [currentCardId, setCurrentCardId] = useState(null);
  
  // Initialize quiz state with card stack controls
  const quizState = useQuiz(visibleItems, { 
    nextItem,
    stackRestart: originalStackRestart
  });
  
  // Generate options for the current city only when the card changes
  useEffect(() => {
    if (currentCity && currentCity.cityLabel !== currentCardId) {
      setCurrentOptions(quizState.generateOptions(currentCity));
      setCurrentCardId(currentCity.cityLabel);
    }
  }, [currentCity, quizState, currentCardId]);
  
  // Handle stack restart to properly reset quiz state
  const handleRestart = () => {
    quizState.resetQuiz();
    setIsAnswerRevealed(false);
    originalStackRestart();
    setCurrentOptions([]);
    setCurrentCardId(null);
  };
  
  // Create memoized value to prevent unnecessary re-renders
  const value = useMemo(() => ({
    // Quiz state
    ...quizState,
    // Current city data
    currentCity,
    // Options for quiz
    options: currentOptions,
    // Flag if answer is revealed from CardsContext
    isAnswerRevealed,
    setIsAnswerRevealed,
    // Custom restart function that resets both quiz and cards
    resetQuiz: handleRestart
  }), [
    quizState,
    currentCity,
    currentOptions,
    isAnswerRevealed,
    setIsAnswerRevealed,
    handleRestart
  ]);

  return (
    <QuizContext.Provider value={value}>{children}</QuizContext.Provider>
  );
}

/**
 * Hook to access quiz context
 */
export function useQuizContext() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuizContext must be used within QuizProvider");
  }
  return context;
}
