type Func<T> = (...args: unknown[]) => T;

export const memoizeWith = <T>(resolver: Func<string>, fn: Func<T>): Func<T> => {
  const cache: Record<string, T> = {};

  return (...args: unknown[]): T => {
    const key = resolver(...args);
    if (cache[key]) {
      return cache[key] as T;
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}
