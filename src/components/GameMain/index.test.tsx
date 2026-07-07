import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";
import GameMain from "./index";
import { useSnapContext } from "../../context/useSnapContext";
import { useGetDeck } from "../../hooks/useGetDeck";
import type { GetDeckState } from "../../types";
import type { SnapContextType } from "../../context/SnapContext";

vi.mock("../../context/useSnapContext", () => ({
  useSnapContext: vi.fn(),
}));

vi.mock("../../hooks/useGetDeck", () => ({
  useGetDeck: vi.fn(),
}));

vi.mock("./cards/CardPair", () => ({
  default: () => <div data-testid="card-pair" />,
}));

vi.mock("./GameAction", () => ({
  default: () => <div data-testid="game-action" />,
}));

vi.mock("./GameStats", () => ({
  default: () => <div data-testid="game-stats" />,
}));

vi.mock("./MatchTracker", () => ({
  default: () => <div data-testid="match-tracker" />,
}));

describe("GameMain", () => {
  const mockUseSnapContext = useSnapContext as unknown as ReturnType<
    typeof vi.fn
  >;
  const mockUseGetDeck = useGetDeck as unknown as ReturnType<typeof vi.fn>;

  beforeEach(() => {
    vi.clearAllMocks();

    mockUseSnapContext.mockReturnValue({
      cardsRemaining: 10,
    } as Partial<SnapContextType> as SnapContextType);
  });

  test("when loading, shows loading fallback", () => {
    mockUseGetDeck.mockReturnValue({
      loading: true,
      error: null,
    } as GetDeckState);

    render(<GameMain />);

    expect(screen.getByText("loading...")).toBeInTheDocument();
  });

  test("when error, shows error fallback", () => {
    mockUseGetDeck.mockReturnValue({
      loading: false,
      error: new Error(),
    } as GetDeckState);

    render(<GameMain />);

    expect(screen.getByText("error")).toBeInTheDocument();
  });

  test("renders game view with cards remaining", () => {
    mockUseGetDeck.mockReturnValue({
      loading: false,
      error: null,
    } as GetDeckState);

    render(<GameMain />);

    expect(screen.getByTestId("match-tracker")).toBeInTheDocument();
    expect(screen.getByTestId("card-pair")).toBeInTheDocument();
    expect(screen.getByTestId("game-action")).toBeInTheDocument();
  });

  test("renders stats when no cards remaining", () => {
    mockUseSnapContext.mockReturnValue({
      cardsRemaining: 0,
    } as Partial<SnapContextType> as SnapContextType);

    mockUseGetDeck.mockReturnValue({
      loading: false,
      error: null,
    } as GetDeckState);

    render(<GameMain />);

    expect(screen.getByTestId("game-stats")).toBeInTheDocument();
  });
});
