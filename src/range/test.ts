import { range } from './index.js';

describe('range', () => {
  it.each([
    [1, 3, [1, 2]],
    [1, 5, [1, 2, 3, 4]],
    [27, 32, [27, 28, 29, 30, 31]],
  ])('returns expected result', (from, to, expected) => {
    expect(range(from, to)).toEqual(expected);
  });
});
