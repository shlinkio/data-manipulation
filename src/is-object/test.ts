import { isObject } from './index.js';

describe('isObject', () => {
  it.each([
    [undefined, false],
    [null, false],
    [[], false],
    [{}, true],
    [new Date(), true],
  ])('returns expected result', (obj, expected) => {
    expect(isObject(obj)).toEqual(expected);
  });
});
