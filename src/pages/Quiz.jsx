import { Button } from "../components/_primitives/Button";
import { AppLayout } from "../components/AppLayout";
import CardsStack from "../components/CardsStack";
import { RadioGroup } from "../components/RadioGroup";
import { QuizProvider, useQuizContext } from "../contexts/QuizContext";
import { CardsProvider, useCards } from "../contexts/CardsContext";

export function Quiz() {
  return (
    <CardsProvider interactive={false}>
      <QuizProvider>
        <QuizContent />
      </QuizProvider>
    </CardsProvider>
  );
}

function QuizContent() {
  // Get card stack data from CardsContext
  const { countryName, totalCount, isStackComplete, stackRestart } = useCards();

  // Get quiz state from QuizContext
  const {
    lives,
    selectedAnswer,
    setSelectedAnswer,
    isAnswerChecked,
    isCorrect,
    checkAnswer,
    continueToNext,
    resetQuiz,
    currentCity,
    options,
    isAnswerRevealed,
    setIsAnswerRevealed,
  } = useQuizContext();

  // Handle check button click
  const handleCheck = () => {
    if (!isAnswerChecked) {
      checkAnswer(currentCity);
      setIsAnswerRevealed(true);
    } else {
      continueToNext();
    }
  };

  // Determine button state
  const isCheckDisabled = !selectedAnswer && !isAnswerChecked;
  const buttonVariant = isAnswerChecked
    ? isCorrect
      ? "green"
      : "primary"
    : "primary";
  const buttonText = isAnswerChecked ? "CONTINUE" : "CHECK";

  return (
    <AppLayout.Root>
      <AppLayout.Header
        title={`City flags – ${countryName}`}
        citiesNum={totalCount}
        isClosable
        hasLives
      />
      <AppLayout.Body className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-6 max-w-96 h-full mt-16 mb-8">
          {isStackComplete || lives <= 0 ? (
            <>
              <h1 className="text-3xl">
                {lives <= 0 ? `👾 GAME OVER` : "🥳 YOU WON!"}
              </h1>
              <div className="flex flex-col gap-1.5 w-full max-w-3xs">
                <Button to="/" variant="outline">
                  Main menu
                </Button>
                <Button onClick={resetQuiz}>Play Again</Button>
              </div>
            </>
          ) : (
            <>
              <CardsStack />

              {/* Answer options */}
              <RadioGroup.Root className="z-10 grid grid-cols-2 grid-rows-2 gap-2 w-full">
                {options.map((option) => {
                  // Determine if this option is correct
                  const isOptionCorrect = option === currentCity?.cityLabel;
                  // Set correct prop only when answer is checked
                  let correctProp = null;
                  if (isAnswerChecked) {
                    if (isOptionCorrect) correctProp = true;
                    else if (option === selectedAnswer) correctProp = false;
                  }

                  return (
                    <RadioGroup.Item
                      key={option}
                      value={option}
                      selectedValue={selectedAnswer}
                      onSelect={setSelectedAnswer}
                      disabled={isAnswerChecked}
                      correct={correctProp}
                    >
                      {option}
                    </RadioGroup.Item>
                  );
                })}
              </RadioGroup.Root>

              {/* Check/Continue button */}
              <Button
                className="z-10 w-full"
                onClick={handleCheck}
                variant={buttonVariant}
                disabled={isCheckDisabled}
              >
                {buttonText}
              </Button>
            </>
          )}
        </div>
      </AppLayout.Body>
    </AppLayout.Root>
  );
}
