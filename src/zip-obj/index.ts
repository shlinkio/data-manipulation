/**
 * Create an object from a list of keys and values
 */
export const zipObj = <T, K extends string>(keys: readonly K[], values: readonly T[]): { [P in K]: T } =>
  Object.fromEntries(
    keys.map((key, index) => [key, values[index]]),
  ) as { [P in K]: T };
