import { useState } from "react";

/**
 * Hook for managing flashcard stack state and navigation
 * @param {Array} items - Array of items to display in the stack
 * @param {Object} options - Configuration options
 * @param {boolean} options.interactive - Whether cards can be interacted with (swiped)
 */
export function useCardStack(items, { interactive = true } = {}) {
  // Shuffle array using Fisher-Yates algorithm
  const shuffle = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Track shuffled items
  const [shuffledItems, setShuffledItems] = useState(() => shuffle(items));
  // Track current position in the stack
  const [currentIndex, setCurrentIndex] = useState(0);
  // Track if answer is revealed for current card
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  // Track if we've reached the end of the stack
  const [isStackComplete, setIsStackComplete] = useState(false);
  // Track show answer button variant
  const [ShowBtnVariant, setShowBtnVariant] = useState("outline");

  // Get current visible cards (set to 4 for stack effect)
  const visibleItems = shuffledItems.slice(currentIndex, currentIndex + 4);

  const revealAnswer = () => setIsAnswerRevealed(true);

  const nextItem = () => {
    setIsAnswerRevealed(false);

    if (currentIndex + 1 < items.length) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setIsStackComplete(true);
    }
  };

  const stackRestart = () => {
    setShuffledItems(shuffle(items));
    setCurrentIndex(0);
    setIsStackComplete(false);
  };

  return {
    // Stack state
    currentIndex,
    visibleItems,
    totalCount: items.length,
    isAnswerRevealed,
    isStackComplete,
    isInteractive: interactive,

    // Actions
    revealAnswer,
    nextItem,
    setIsAnswerRevealed,
    ShowBtnVariant,
    setShowBtnVariant,
    stackRestart,
  };
}
