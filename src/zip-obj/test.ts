import { zipObj } from './index.js';

describe('zipObj', () => {
  it.each([
    [[], [], {}],
    [['aa', 'bb'], [2, 3], { aa: 2, bb: 3 }],
    [['aa', 'bb', 'zzz'], [2, 3], { aa: 2, bb: 3, zzz: undefined }],
    [['aa', 'bb'], [2, 3, 4, 5], { aa: 2, bb: 3 }],
  ])('returns expected result', (keys, values, expected) => {
    expect(zipObj(keys, values)).toEqual(expected);
  });
});
