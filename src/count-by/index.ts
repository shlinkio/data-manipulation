/**
 * Count elements of an array based on provided function
 */
export const countBy = <T>(list: readonly T[], fn: (a: T) => string | number): Record<string, number> => list.reduce(
  (count, current) => {
    const key = fn(current);
    count[key] = (count[key] || 0) + 1;
    return count;
  },
  {} as Record<string, number>,
);
