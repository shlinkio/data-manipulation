/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive)
 */
export const range = (from: number, to: number): number[] => Array.from({ length: to - from }, (_, i) => from + i);
