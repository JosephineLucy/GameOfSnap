import { renderHook, waitFor } from "@testing-library/react";
import { vi, describe, it, expect, beforeEach } from "vitest";
import { useSnapContext } from "../../context/useSnapContext";
import { getDeck } from "../../api";
import { useGetDeck } from ".";
import type { SnapContextType } from "../../context/SnapContext";

vi.mock("../../api", () => ({
  getDeck: vi.fn(),
}));

vi.mock("../../context/useSnapContext", async () => {
  return {
    useSnapContext: vi.fn(),
  };
});

const mockGetDeck = vi.mocked(getDeck);

describe("useGetDeck", () => {
  const setDeckId = vi.fn();
  const setCardsRemaining = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();

    vi.mocked(useSnapContext).mockReturnValue({
      setDeckId,
      setCardsRemaining,
    } as Partial<SnapContextType> as SnapContextType);
  });

  it("fetches deck", async () => {
    mockGetDeck.mockResolvedValue({
      success: true,
      deck_id: "3p40paa87y65",
      shuffled: true,
      remaining: 52,
    });

    renderHook(() => useGetDeck());

    await waitFor(() => {
      expect(setDeckId).toHaveBeenCalledWith("3p40paa87y65");
    });
  });

  it("updates snap context", async () => {
    mockGetDeck.mockResolvedValue({
      success: true,
      deck_id: "3p40paa87y65",
      shuffled: true,
      remaining: 52,
    });

    renderHook(() => useGetDeck());

    await waitFor(() => {
      expect(setCardsRemaining).toHaveBeenCalledWith(52);
    });
  });

  it("sets loading to false after a successful fetch", async () => {
    mockGetDeck.mockResolvedValue({
      success: true,
      deck_id: "3p40paa87y65",
      shuffled: true,
      remaining: 52,
    });

    const { result } = renderHook(() => useGetDeck());

    await waitFor(() => {
      expect(result.current.error).toBe(null);
      expect(result.current.loading).toBe(false);
    });
  });

  it("when error is received, sets error", async () => {
    mockGetDeck.mockRejectedValue(new Error("Network error"));

    const { result } = renderHook(() => useGetDeck());

    await waitFor(() => {
      expect(result.current.error).toBeInstanceOf(Error);
    });
  });
});
