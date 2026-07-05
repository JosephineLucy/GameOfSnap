import CardPair from "./CardPair";
import GameAction from "./GameAction";
import { useState } from "react";
import { useGetDeck } from "./helpers";

function GameMain() {
  const [drawNewCard, setDrawNewCard] = useState(false);
  const { deckId, error, loading } = useGetDeck();

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="game-main">
      <CardPair
        drawNewCard={drawNewCard}
        deckId={deckId}
        setDrawNewCard={setDrawNewCard}
      />
      <GameAction setDrawNewCard={setDrawNewCard} deckId={deckId} />
    </div>
  );
}

export default GameMain;
