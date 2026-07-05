import { useCallback } from "react";
import { useSnapContext } from "../../../context/useSnapContext";

function GameAction() {
  const { deckId, setDrawCardFlag, cardsRemaining } = useSnapContext();
  const onClick = useCallback(() => {
    setDrawCardFlag(true);
  }, [setDrawCardFlag]);

  return (
    <div className="game-action">
      <p className="cards-remaining">{`Cards remaining: ${cardsRemaining || 52}`}</p>
      <button className="action-button" onClick={onClick} disabled={!deckId}>
        Draw card
      </button>
    </div>
  );
}

export default GameAction;
