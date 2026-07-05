import { useState } from "react";
import type { DisplayCard } from "../../../types";
import Card from "../Card";
import CurrentCard from "../CurrentCard";

type CardPairProps = {
  drawNewCard: boolean;
  deckId: string | undefined;
  setDrawNewCard: React.Dispatch<React.SetStateAction<boolean>>;
};

function CardPair({ drawNewCard, deckId, setDrawNewCard }: CardPairProps) {
  const [previousCard, setPreviousCard] = useState<DisplayCard | undefined>();

  if (!deckId) {
    return <p>no deck id</p>;
  }

  return (
    <div className="card-pair">
      <Card card={previousCard} />
      <CurrentCard
        deckId={deckId}
        drawNewCard={drawNewCard}
        setPreviousCard={setPreviousCard}
        setDrawNewCard={setDrawNewCard}
      />
    </div>
  );
}

export default CardPair;
