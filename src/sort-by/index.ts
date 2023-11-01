export type Ord = number | string | boolean | Date;

/**
 * Sort an array by provided function
 */
export const sortBy = <T>(list: readonly T[], fn: (a: T) => Ord): T[] => [...list].sort((a, b) => {
  const aKey = fn(a);
  const bKey = fn(b);
  if (aKey === bKey) {
    return 0;
  }
  return aKey < bKey ? -1 : 1;
});
