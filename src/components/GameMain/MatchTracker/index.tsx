import { useEffect } from "react";
import { useSnapContext } from "../../../context/useSnapContext";
import { checkSuitMatch, checkValueMatch } from "./helpers";
import MatchNotification from "../MatchNotification";

function MatchTracker() {
  const { currentCard, previousCard, setSuitMatches, setValueMatches } =
    useSnapContext();

  const isSuitMatch = checkSuitMatch(previousCard?.suit, currentCard?.suit);

  const isValueMatch = checkValueMatch(previousCard?.value, currentCard?.value);

  useEffect(() => {
    if (isSuitMatch) {
      setSuitMatches((prev) => prev + 1);
    }

    if (isValueMatch) {
      setValueMatches((prev) => prev + 1);
    }
  }, [isSuitMatch, isValueMatch, setSuitMatches, setValueMatches]);

  return (
    <div className="match-tracker">
      {isSuitMatch && <MatchNotification notificationType="suitMatch" />}
      {isValueMatch && <MatchNotification notificationType="valueMatch" />}
    </div>
  );
}

export default MatchTracker;
