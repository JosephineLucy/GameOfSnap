import CardPair from "./CardPair";
import GameAction from "./GameAction";
import { useGetDeck } from "./helpers";
import MatchTracker from "./MatchTracker";

function GameMain() {
  const { error, loading } = useGetDeck();

  if (loading) {
    return <p>loading</p>;
  }

  if (error) {
    return <p>error</p>;
  }

  return (
    <div className="game-main">
      <MatchTracker />
      <CardPair />
      <GameAction />
    </div>
  );
}

export default GameMain;
