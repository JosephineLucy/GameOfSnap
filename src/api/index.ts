import type { GetCardResponse, GetDeckResponse } from "../types";

export async function getDeck() {
  const response = await fetch(
    "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
  );

  const data: GetDeckResponse = await response.json();
  return data;
}

export async function getCard(deckId: string) {
  const response = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`,
  );

  const data: GetCardResponse = await response.json();
  return data;
}
