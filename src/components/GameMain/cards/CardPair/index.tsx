import Card from "../Card";
import CurrentCard from "../CurrentCard";
import { useSnapContext } from "../../../../context/useSnapContext";

function CardPair() {
  const { previousCard } = useSnapContext();

  return (
    <div className="card-pair">
      <Card card={previousCard} />
      <CurrentCard />
    </div>
  );
}

export default CardPair;
