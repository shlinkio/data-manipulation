import { countBy } from './index.js';

type ObjType = {
  foo: string;
};

describe('countBy', () => {
  it.each([
    [
      [{ foo: 'one' }, { foo: 'one' }, { foo: 'two' }] satisfies ObjType[],
      (value: ObjType) => value.foo,
      {
        one: 2,
        two: 1,
      },
    ],
    [
      [{ foo: 'one' }, { foo: 'one' }, { foo: 'two' }] satisfies ObjType[],
      () => 'whatever',
      { whatever: 3 },
    ],
    [
      [{ foo: 'hello' }, { foo: 'something' }, { foo: 'two' }, { foo: 'three' }] satisfies ObjType[],
      (value: ObjType) => value.foo.substring(0, 1),
      { h: 1, s: 1, t: 2 },
    ],
  ])('returns expected result', (list, fn, expected) => {
    expect(countBy(list, fn)).toEqual(expected);
  });
});
