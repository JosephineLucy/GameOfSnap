import Card from "../Card";
import { useSnapContext } from "../../../../context/useSnapContext";

function CardPair() {
  const { previousCard, currentCard } = useSnapContext();

  return (
    <div className="card-pair">
      <Card card={previousCard} />
      <Card card={currentCard} />
    </div>
  );
}

export default CardPair;
