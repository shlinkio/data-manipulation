import { splitEvery } from './index.js';

describe('splitEvery', () => {
  const list = [1, 2, 3, 4, 5, 6, 7];

  it.each([
    [1, list.map((i) => [i])],
    [3, [[1, 2, 3], [4, 5, 6], [7]]],
    [2, [[1, 2], [3, 4], [5, 6], [7]]],
    [10, [list]],
  ])('returns expected result', (chunkSize, expected) => {
    expect(splitEvery(list, chunkSize)).toEqual(expected);
  });
});
