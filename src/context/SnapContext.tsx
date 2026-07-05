import { createContext } from "react";
import type { DisplayCard } from "../types";

export type SnapContextType = {
  deckId: string | undefined;
  setDeckId: React.Dispatch<React.SetStateAction<string | undefined>>;
  cardsRemaining: number | undefined;
  setCardsRemaining: React.Dispatch<React.SetStateAction<number | undefined>>;
  valueMatches: number;
  setValueMatches: React.Dispatch<React.SetStateAction<number>>;
  suitMatches: number;
  setSuitMatches: React.Dispatch<React.SetStateAction<number>>;
  previousCard: DisplayCard | null;
  setPreviousCard: React.Dispatch<React.SetStateAction<DisplayCard | null>>;
  currentCard: DisplayCard | null;
  setCurrentCard: React.Dispatch<React.SetStateAction<DisplayCard | null>>;
  drawCardFlag: boolean;
  setDrawCardFlag: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SnapContext = createContext<SnapContextType | undefined>(
  undefined,
);
