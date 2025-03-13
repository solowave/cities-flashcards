import React, { useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Card } from "./_primitives/Card";
import { useCards } from "../contexts/CardsContext";

/**
 * A stack of interactive cards with swipe and reveal animations
 */
const CardsStack = () => {
  const { visibleItems, isInteractive } = useCards();

  return (
    <div className="grid grid-cols-1 grid-rows-1 h-full justify-items-center max-h-[656px]">
      <AnimatePresence mode="popLayout">
        {visibleItems.map((item, index) => (
          <FlashCard
            key={item.cityLabel}
            item={item}
            index={index}
            isInteractive={isInteractive}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

// Animation variants for different card positions
const cardVariants = {
  first: {
    y: 0,
    height: "100%",
    width: "100%",
    zIndex: 2,
    transition: { duration: 0.3 },
  },
  second: {
    y: -16,
    height: "90%",
    width: "90%",
    zIndex: 1,
    transition: { duration: 0.3 },
  },
  third: {
    y: -32,
    height: "80%",
    width: "80%",
    zIndex: 0,
    transition: { duration: 0.3 },
  },
  fourth: {
    y: 0,
    height: "50%",
    width: "50%",
    zIndex: 0,
    transition: { duration: 0.3 },
  },
};

/**
 * Individual flashcard component with animations
 */
const FlashCard = ({ item, index, isInteractive }) => {
  const { nextItem, isAnswerRevealed, setIsAnswerRevealed, setShowBtnVariant } =
    useCards();

  const [exitX, setExitX] = useState(0);

  // Motion values for swipe and rotation
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform(x, [-150, 150], [-18, 18]);

  const handleDragEnd = () => {
    const currentX = x.get();
    const currentY = y.get();

    if (Math.abs(currentX) > 50) {
      setExitX(currentX * 10);
      setTimeout(() => {
        nextItem();
        setExitX(0);
      }, 200);
      return;
    }

    if (currentY > 40) {
      setIsAnswerRevealed(true);
    }
    setShowBtnVariant("outline");
  };

  const position =
    index === 0
      ? "first"
      : index === 1
      ? "second"
      : index === 2
      ? "third"
      : "fourth";

  return (
    <motion.div
      className={`col-start-1 row-start-1 w-full h-full ${isInteractive ? 'cursor-grab active:cursor-grabbing' : ''}`}
      variants={cardVariants}
      initial={position}
      animate={{
        ...cardVariants[position],
        x: exitX,
        // opacity: exitX !== 0 ? 0 : 1,
        transition: { duration: 0.2 },
      }}
      style={{
        x,
        y,
        rotate,
      }}
      drag={isInteractive ? (isAnswerRevealed ? "x" : "y") : false}
      // drag={true}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.5}
      onDragEnd={handleDragEnd}
      onDrag={(event, info) => {
        if (!isInteractive) return;
        if (info.offset.y > 40 && !isAnswerRevealed) {
          setShowBtnVariant("primary");
        } else {
          setShowBtnVariant("outline");
        }
      }}
      whileTap={isInteractive ? { scale: 0.96 } : undefined}
    >
      <Card className="rounded-2xl w-full h-full">
        <motion.div
          className="flex flex-col gap-6 p-3 items-center justify-center w-full h-full"
          // animate={{
          //   borderColor:
          //     index === 0
          //       ? `oklch(0.546 0.245 262.881 / ${bgOpacity})`
          //       : "transparent",
          // }}
          transition={{ duration: 0.2 }}
        >
          <motion.h3
            className="text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === 0 && isAnswerRevealed ? 1 : 0 }}
          >
            {item.cityLabel}
          </motion.h3>

          <img
            className="rounded-lg w-full border border-zinc-200 dark:border-zinc-700"
            src={item.flagUrl}
            alt={`Flag of ${item.cityLabel}`}
          />
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default CardsStack;
