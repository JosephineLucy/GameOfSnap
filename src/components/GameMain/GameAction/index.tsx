import { useCallback } from "react";

type GameActionProps = {
  setDrawNewCard: React.Dispatch<React.SetStateAction<boolean>>;
  deckId: string | undefined;
};

function GameAction({ setDrawNewCard, deckId }: GameActionProps) {
  const onClick = useCallback(() => {
    setDrawNewCard(true);
  }, [setDrawNewCard]);

  return (
    <button className="action-button" onClick={onClick} disabled={!deckId}>
      Draw card
    </button>
  );
}

export default GameAction;
