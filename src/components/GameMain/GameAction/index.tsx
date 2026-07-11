import { useSnapContext } from "../../../context/useSnapContext";
import { useGetCard } from "../../../hooks/useGetCard";

function GameAction() {
  const { deckId, cardsRemaining } = useSnapContext();
  const { fetchCard, loading } = useGetCard();

  return (
    <div className="game-action">
      <p className="cards-remaining">{`Cards remaining: ${cardsRemaining || 52}`}</p>
      <button
        className="action-button"
        onClick={fetchCard}
        disabled={!deckId || loading}
      >
        Draw card
      </button>
    </div>
  );
}

export default GameAction;
