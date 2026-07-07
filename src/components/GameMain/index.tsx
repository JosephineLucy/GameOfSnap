import { useSnapContext } from "../../context/useSnapContext";
import CardPair from "./cards/CardPair";
import GameAction from "./GameAction";
import GameStats from "./GameStats";
import { useGetDeck } from "../../hooks/useGetDeck";
import MatchTracker from "./MatchTracker";

function GameMain() {
  const { error, loading } = useGetDeck();
  const { cardsRemaining } = useSnapContext();

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="game-main">
      <MatchTracker />
      <CardPair />
      {cardsRemaining ? <GameAction /> : <GameStats />}
    </div>
  );
}

export default GameMain;
