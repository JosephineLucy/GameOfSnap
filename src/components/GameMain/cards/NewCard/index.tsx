import { useGetCard } from "../GameAction/helpers";
import Card from "../Card";
import { useSnapContext } from "../../../context/useSnapContext";

type NewCardProps = {
  deckId: string;
};

function NewCard({ deckId }: NewCardProps) {
  const { error } = useGetCard(deckId);
  const { currentCard } = useSnapContext();

  if (error) {
    return <p>error</p>;
  }

  return <Card card={currentCard} />;
}

export default NewCard;
