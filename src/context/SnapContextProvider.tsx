import { useState, type ReactNode } from "react";
import type { DisplayCard } from "../types";
import { SnapContext } from "./SnapContext";

type SnapProviderProps = {
  children: ReactNode;
};

function SnapProvider({ children }: SnapProviderProps) {
  const [deckId, setDeckId] = useState<string | undefined>();
  const [cardsRemaining, setCardsRemaining] = useState<number | undefined>();
  const [valueMatches, setValueMatches] = useState<number>(0);
  const [suitMatches, setSuitMatches] = useState<number>(0);
  const [previousCard, setPreviousCard] = useState<DisplayCard | null>(null);
  const [currentCard, setCurrentCard] = useState<DisplayCard | null>(null);
  const [drawCardFlag, setDrawCardFlag] = useState<boolean>(false);

  return (
    <SnapContext.Provider
      value={{
        deckId,
        setDeckId,
        cardsRemaining,
        setCardsRemaining,
        valueMatches,
        setValueMatches,
        suitMatches,
        setSuitMatches,
        currentCard,
        setCurrentCard,
        previousCard,
        setPreviousCard,
        drawCardFlag,
        setDrawCardFlag,
      }}
    >
      {children}
    </SnapContext.Provider>
  );
}

export default SnapProvider;
