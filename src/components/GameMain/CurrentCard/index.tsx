import { useState } from "react";
import type { DisplayCard } from "../../../types";
import Card from "../Card";
import NewCard from "../NewCard";

type CurrentCardProps = {
  drawNewCard: boolean;
  deckId: string;
  setDrawNewCard: React.Dispatch<React.SetStateAction<boolean>>;
  setPreviousCard: React.Dispatch<
    React.SetStateAction<DisplayCard | undefined>
  >;
};

function CurrentCard({
  setPreviousCard,
  deckId,
  drawNewCard,
  setDrawNewCard,
}: CurrentCardProps) {
  const [currentCard, setCurrentCard] = useState<DisplayCard | undefined>();

  return drawNewCard ? (
    <NewCard
      deckId={deckId}
      currentCard={currentCard}
      setCurrentCard={setCurrentCard}
      setPreviousCard={setPreviousCard}
      setDrawNewCard={setDrawNewCard}
    />
  ) : (
    <Card card={currentCard} />
  );
}
export default CurrentCard;
