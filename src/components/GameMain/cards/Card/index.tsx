import type { DisplayCard } from "../../../../types";

type CardProps = {
  card: DisplayCard | null;
};

function Card({ card }: CardProps) {
  const cardImage = card
    ? card.image
    : "https://deckofcardsapi.com/static/img/back.png";

  return <img src={cardImage} />;
}

export default Card;
