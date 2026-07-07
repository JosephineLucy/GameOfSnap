import { useEffect, useState } from "react";
import { useSnapContext } from "../../context/useSnapContext";
import { getDeck } from "../../api";

export function useGetDeck() {
  const { setDeckId, setCardsRemaining } = useSnapContext();

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchDeck = async () => {
      try {
        setLoading(true);

        const data = await getDeck();
        if (!data) return;

        setDeckId(data.deck_id);
        setCardsRemaining(data.remaining);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchDeck();
  }, [setDeckId, setCardsRemaining]);

  return { loading, error };
}
