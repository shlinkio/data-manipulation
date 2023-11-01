import { sortBy } from './index.js';

type ObjType = {
  foo: string;
};

describe('sortBy', () => {
  it.each([
    [
      [{ foo: 'zzz' }, { foo: 'aaa' }] satisfies ObjType[],
      (value: ObjType) => value.foo,
      [{ foo: 'aaa' }, { foo: 'zzz' }],
    ],
    [
      [{ foo: 'zzz' }, { foo: 'aaa' }] satisfies ObjType[],
      (value: ObjType) => (value.foo.startsWith('a') ? 'z' : 'a'),
      [{ foo: 'zzz' }, { foo: 'aaa' }],
    ],
    [
      [{ foo: 'aaa' }, { foo: 'aaa' }] satisfies ObjType[],
      (value: ObjType) => value.foo,
      [{ foo: 'aaa' }, { foo: 'aaa' }],
    ],
  ])('returns expected result', (list, fn, expected) => {
    expect(sortBy(list, fn)).toEqual(expected);
  });
});
