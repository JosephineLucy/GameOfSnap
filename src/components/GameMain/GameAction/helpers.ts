import { useEffect, useState } from "react";
import type { GetCardResponse } from "../../../types";

export async function getCard(deckId: string) {
  try {
    const response = await fetch(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`,
    );

    const data: GetCardResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching deck:", error);
  }
}

export function useGetCard(deckId: string) {
  const [image, setImage] = useState<string | undefined>();
  const [value, setValue] = useState<string | undefined>();
  const [suit, setSuit] = useState<string | undefined>();
  const [remaining, setRemaining] = useState<number | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const data = await getCard(deckId);
        setImage(data?.cards[0].image);
        setValue(data?.cards[0].value);
        setSuit(data?.cards[0].suit);
        setRemaining(data?.remaining);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeck();
  }, [deckId]);

  return { image, value, suit, remaining, loading, error };
}
