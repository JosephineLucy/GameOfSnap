import { useState } from "react";
import { useSnapContext } from "../../context/useSnapContext";
import { getCard } from "../../api";

export function useGetCard() {
  const { setCurrentCard, setPreviousCard, setCardsRemaining, deckId } =
    useSnapContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function fetchCard() {
    if (!deckId) return;
    try {
      setLoading(true);

      const data = await getCard(deckId);
      if (!data) return;

      setCurrentCard((prev) => {
        setPreviousCard(prev);

        return {
          image: data.cards[0].image,
          value: data.cards[0].value,
          suit: data.cards[0].suit,
        };
      });

      setCardsRemaining(data.remaining);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }

  return { fetchCard, loading, error };
}
