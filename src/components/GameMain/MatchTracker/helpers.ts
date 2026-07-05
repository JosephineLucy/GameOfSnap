export function checkValueMatch(
  previousValue: number | undefined,
  currentValue: number | undefined,
) {
  if (!previousValue || !currentValue) {
    return;
  }

  return previousValue === currentValue;
}

export function checkSuitMatch(
  previousSuit: string | undefined,
  currentSuit: string | undefined,
) {
  if (!previousSuit || !currentSuit) {
    return;
  }

  return previousSuit === currentSuit;
}
