/**
 * Group elements of an array based on provided function
 */
export const groupBy = <T, K extends string = string>(list: T[], fn: (a: T) => K): Record<K, T[]> => list.reduce(
  (acc, current) => {
    const key = fn(current);
    (acc[key] = acc[key] || []).push(current);
    return acc;
  },
  {} as Record<K, T[]>,
);
