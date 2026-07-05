import { useCallback } from "react";
import { useSnapContext } from "../../../context/useSnapContext";

function GameAction() {
  const { deckId, setDrawCardFlag } = useSnapContext();
  const onClick = useCallback(() => {
    setDrawCardFlag(true);
  }, [setDrawCardFlag]);

  return (
    <button className="action-button" onClick={onClick} disabled={!deckId}>
      Draw card
    </button>
  );
}

export default GameAction;
