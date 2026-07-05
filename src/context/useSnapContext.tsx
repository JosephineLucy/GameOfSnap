import { useContext } from "react";
import { SnapContext } from "./SnapContext";

export function useSnapContext() {
  const context = useContext(SnapContext);

  if (!context) {
    throw new Error("useSnapContext must be used within SnapContextProvider");
  }

  return context;
}
