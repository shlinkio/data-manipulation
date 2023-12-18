import { isObject } from '../is-object/index.js';

/**
 * Recursively merge two objects
 */
export const mergeDeepRight = <T extends Record<string, any>>(target: T, source: T): T => {
  const output: T = { ...target };
  if (!isObject(target) || !isObject(source)) {
    return output;
  }

  Object.keys(source).forEach((key: keyof T) => {
    if (isObject(source[key])) {
      output[key] = key in target && target[key] !== undefined
        ? mergeDeepRight(target[key], source[key])
        : { ...source[key] };
    } else {
      output[key] = source[key];
    }
  });

  return output;
};
