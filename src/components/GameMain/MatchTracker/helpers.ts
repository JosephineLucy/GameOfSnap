export function checkValueMatch(
  previousValue: string | undefined,
  currentValue: string | undefined,
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
