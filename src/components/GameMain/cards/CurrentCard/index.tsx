import { useSnapContext } from "../../../../context/useSnapContext";
import Card from "../Card";
import NewCard from "../NewCard";

function CurrentCard() {
  const { drawCardFlag, currentCard, deckId } = useSnapContext();

  return drawCardFlag && deckId ? (
    <NewCard deckId={deckId} />
  ) : (
    <Card card={currentCard} />
  );
}
export default CurrentCard;
