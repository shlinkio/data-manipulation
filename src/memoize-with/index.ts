export const memoizeWith = <T extends (...args: readonly any[]) => any>(
  resolver: (...v: Parameters<T>) => string,
  fn: T,
): T => {
  const cache: Record<string, any> = {};

  return ((...args: Parameters<T>) => {
    const key = resolver(...args);
    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  }) as T;
};
