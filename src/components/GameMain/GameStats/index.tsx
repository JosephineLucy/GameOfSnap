import { useSnapContext } from "../../../context/useSnapContext";

function GameStats() {
  const { suitMatches, valueMatches } = useSnapContext();

  return (
    <div className="game-stats">
      <p className="game-over">Game over, well done!</p>
      <div>
        <p>{`Suit matches: ${suitMatches}`}</p>
        <p>{`Value matches: ${valueMatches}`}</p>
      </div>
    </div>
  );
}

export default GameStats;
