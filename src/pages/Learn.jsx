import { Button } from "../components/_primitives/Button";
import { AppLayout } from "../components/AppLayout";
import CardsStack from "../components/CardsStack";
import { CardsProvider, useCards } from "../contexts/CardsContext";

export function Learn() {
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
    showAnswerVariant,
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
      />
      <AppLayout.Body className="flex flex-col items-center">
        <div className="flex flex-col items-center justify-center gap-6 max-w-96 h-full mt-16 mb-8">
          {isStackComplete ? (
            <>
              <h1 className="text-3xl">Stack end</h1>
              <div className="flex flex-col gap-2 w-3xs">
                <Button className="uppercase" to="/" variant="outline">
                  Main menu
                </Button>
                <Button className="uppercase" onClick={stackRestart}>
                  Replay
                </Button>
              </div>
            </>
          ) : (
            <CardsStack />
          )}

          {isStackComplete ? (
            ""
          ) : (
            <Button
              className="z-10 w-full max-w-3xs"
              onClick={isAnswerRevealed ? nextItem : revealAnswer}
              variant={isAnswerRevealed ? "primary" : showAnswerVariant}
            >
              {isAnswerRevealed ? "NEXT CITY" : "SHOW ANSWER"}
            </Button>
          )}
        </div>
      </AppLayout.Body>
    </AppLayout.Root>
  );
}
