import { Button } from "../components/_primitives/Button";
import { RadioGroup } from "../components/_primitives/RadioGroup";
import { AppLayout } from "../components/AppLayout";
import CardsStack from "../components/CardsStack";
import { CardsProvider, useCards } from "../contexts/CardsContext";

export function Quiz() {
  return (
    <CardsProvider>
      <LearnContent />
    </CardsProvider>
  );
}

function LearnContent() {
  const {
    countryName,
    totalCount,
    isStackComplete,
    isAnswerRevealed,
    ShowBtnVariant,
    revealAnswer,
    nextItem,
    stackRestart,
  } = useCards();

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
          {isStackComplete ? (
            <>
              <h1 className="text-3xl">Stack end</h1>
              <div className="flex flex-col gap-1.5">
                <Button to="/" variant="outline">
                  Main menu
                </Button>
                <Button onClick={stackRestart}>Replay</Button>
              </div>
            </>
          ) : (
            <CardsStack />
          )}
          {isStackComplete ? (
            ""
          ) : (
            <RadioGroup.Root className="z-10 grid grid-cols-2 grid-rows-2 gap-2 w-full">
              <RadioGroup.Item>test</RadioGroup.Item>
              <RadioGroup.Item>test</RadioGroup.Item>
              <RadioGroup.Item>test</RadioGroup.Item>
              <RadioGroup.Item>test</RadioGroup.Item>
            </RadioGroup.Root>
          )}
          {isStackComplete ? (
            ""
          ) : (
            <Button
              className="z-10 w-full"
              onClick={isAnswerRevealed ? nextItem : revealAnswer}
              variant={isAnswerRevealed ? "green" : "primary"}
            >
              {isAnswerRevealed ? "Next city" : "Show answer"}
            </Button>
          )}
        </div>
      </AppLayout.Body>
    </AppLayout.Root>
  );
}
