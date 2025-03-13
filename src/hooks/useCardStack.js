import { useState } from "react";

/**
 * Hook for managing flashcard stack state and navigation
 * @param {Array} items - Array of items to display in the stack
 * @param {Object} options - Configuration options
 * @param {boolean} options.interactive - Whether cards can be interacted with (swiped)
 */
export function useCardStack(items, { interactive = true } = {}) {
  // Track current position in the stack
  const [currentIndex, setCurrentIndex] = useState(0);
  // Track if answer is revealed for current card
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  // Track if we've reached the end of the stack
  const [isStackComplete, setIsStackComplete] = useState(false);
  // Track show answer button variant
  const [ShowBtnVariant, setShowBtnVariant] = useState("outline");

  // Get current visible cards (set to 4 for stack effect)
  const visibleItems = items.slice(currentIndex, currentIndex + 4);

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
