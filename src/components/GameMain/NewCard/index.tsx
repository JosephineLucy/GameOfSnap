import { useEffect } from "react";
import type { DisplayCard } from "../../../types";
import { useGetCard } from "../GameAction/helpers";
import Card from "../Card";
import BackOfCard from "../BackOfCard";

type NewCardProps = {
  deckId: string;
  currentCard: DisplayCard | undefined;
  setCurrentCard: React.Dispatch<React.SetStateAction<DisplayCard | undefined>>;
  setPreviousCard: React.Dispatch<
    React.SetStateAction<DisplayCard | undefined>
  >;
  setDrawNewCard: React.Dispatch<React.SetStateAction<boolean>>;
};

function NewCard({
  deckId,
  currentCard,
  setCurrentCard,
  setPreviousCard,
  setDrawNewCard,
}: NewCardProps) {
  const { error, image, loading, suit, value } = useGetCard(deckId);

  useEffect(() => {
    if (image && suit && value) {
      setPreviousCard(currentCard);
      setCurrentCard({ image, suit, value });
      setDrawNewCard(false);
    }
  }, [
    image,
    suit,
    value,
    setCurrentCard,
    setPreviousCard,
    currentCard,
    setDrawNewCard,
  ]);

  if (loading) {
    return <BackOfCard />;
  }

  if (error) {
    return <p>error</p>;
  }

  return <Card card={currentCard} />;
}

export default NewCard;
