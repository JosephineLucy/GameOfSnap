import { useEffect, useState } from "react";
import type { GetDeckResponse } from "../../types";

export async function getDeck() {
  try {
    const response = await fetch(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    );

    const data: GetDeckResponse = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching deck:", error);
  }
}

export function useGetDeck() {
  const [deckId, setDeckId] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        const data = await getDeck();
        setDeckId(data?.deck_id);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeck();
  }, []);

  return { deckId, loading, error };
}
