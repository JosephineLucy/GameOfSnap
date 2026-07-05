import { useEffect, useState } from "react";
import { useSnapContext } from "../../../context/useSnapContext";
import type { GetCardResponse } from "../../../types";

export async function getCard(deckId: string) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`,
  );

  const data: GetCardResponse = await response.json();
  return data;
}

export function useGetCard(deckId: string) {
  const {
    currentCard,
    setCurrentCard,
    setPreviousCard,
    setCardsRemaining,
    setDrawCardFlag,
  } = useSnapContext();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchCard = async () => {
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
        setDrawCardFlag(false);
        setLoading(false);
      }
    };

    fetchCard();
  }, [
    deckId,
    currentCard,
    setCardsRemaining,
    setCurrentCard,
    setPreviousCard,
    setDrawCardFlag,
  ]);

  return { loading, error };
}
