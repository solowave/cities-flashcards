import { useState, useCallback, useEffect } from "react";

/**
 * Hook for managing quiz functionality
 * @param {Array} cities - Array of city data
 * @param {Object} options - Configuration options
 * @param {Function} options.nextItem - Function to move to next card
 * @param {Function} options.stackRestart - Function to restart the card stack
 */
export function useQuiz(cities, { nextItem, stackRestart }) {
  // Quiz state
  const [lives, setLives] = useState(3);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  
  // Generate options for current city (1 correct, 3 random)
  const generateOptions = useCallback((currentCity) => {
    if (!currentCity || !cities.length) return [];
    
    // Get all other cities
    const otherCities = cities.filter(city => city.cityLabel !== currentCity.cityLabel);
    const options = [];
    
    // Add 3 random unique city names
    while (options.length < 3 && otherCities.length > 0) {
      const randomIndex = Math.floor(Math.random() * otherCities.length);
      const randomCity = otherCities[randomIndex];
      
      if (!options.includes(randomCity.cityLabel)) {
        options.push(randomCity.cityLabel);
      }
      
      // Remove the city to avoid duplicates
      otherCities.splice(randomIndex, 1);
    }
    
    // Insert the correct answer at a random position
    const randomPosition = Math.floor(Math.random() * (options.length + 1));
    options.splice(randomPosition, 0, currentCity.cityLabel);
    
    // Additional shuffle for better randomization
    for (let i = options.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [options[i], options[j]] = [options[j], options[i]];
    }
    
    return options;
  }, []);
  
  // Check if the selected answer is correct
  const checkAnswer = useCallback((currentCity) => {
    if (!selectedAnswer || !currentCity) return;
    
    setIsAnswerChecked(true);
    const isAnswerCorrect = selectedAnswer === currentCity.cityLabel;
    setIsCorrect(isAnswerCorrect);
    
    if (!isAnswerCorrect) {
      setLives(prev => prev - 1);
    }
  }, [selectedAnswer]);
  
  // Move to the next question
  const continueToNext = useCallback(() => {
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setIsCorrect(null);
    nextItem();
  }, [nextItem]);
  
  // Reset the quiz
  const resetQuiz = useCallback(() => {
    setLives(3);
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setIsCorrect(null);
    
    // Call the stack restart function from CardsContext
    if (stackRestart) {
      stackRestart();
    }
  }, [stackRestart]);

  return {
    // State
    lives,
    selectedAnswer,
    isAnswerChecked,
    isCorrect,
    
    // Actions
    setLives,
    setSelectedAnswer,
    checkAnswer,
    continueToNext,
    resetQuiz,
    generateOptions,
  };
}
