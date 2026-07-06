import { describe, it, expect, vi, afterEach } from "vitest";
import { getCard, getDeck } from "./index";
import type { GetCardResponse, GetDeckResponse } from "../types";

describe("api methods", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  describe("getDeck", () => {
    it("fetches a new deck and returns the response data", async () => {
      const mockResponse: GetDeckResponse = {
        success: true,
        deck_id: "3p40paa87x90",
        shuffled: true,
        remaining: 52,
      };

      const mockFetch = vi
        .spyOn(globalThis, "fetch")
        .mockResolvedValue(new Response(JSON.stringify(mockResponse)));

      const result = await getDeck();

      expect(mockFetch).toHaveBeenCalledWith(
        "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
      );
      expect(result).toEqual(mockResponse);
    });
  });

  describe("getCard", () => {
    it("fetches a card and returns the response data as expected", async () => {
      const mockResponse: GetCardResponse = {
        success: true,
        deck_id: "kxozasf3edqu",
        cards: [
          {
            code: "6H",
            image: "https://deckofcardsapi.com/static/img/6H.png",
            images: {
              svg: "https://deckofcardsapi.com/static/img/6H.svg",
              png: "https://deckofcardsapi.com/static/img/6H.png",
            },
            value: "6",
            suit: "HEARTS",
          },
        ],
        remaining: 50,
      };

      const mockFetch = vi
        .spyOn(globalThis, "fetch")
        .mockResolvedValue(new Response(JSON.stringify(mockResponse)));

      const result = await getCard("abc123");

      expect(mockFetch).toHaveBeenCalledWith(
        "https://deckofcardsapi.com/api/deck/abc123/draw/?count=1",
      );
      expect(result).toEqual(mockResponse);
    });
  });
});
