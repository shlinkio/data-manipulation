import { groupBy } from './index.js';

type ObjType = {
  foo: string;
};

describe('groupBy', () => {
  it.each([
    [
      [{ foo: 'one' }, { foo: 'one' }, { foo: 'two' }] satisfies ObjType[],
      (value: ObjType) => value.foo,
      {
        one: [{ foo: 'one' }, { foo: 'one' }],
        two: [{ foo: 'two' }],
      },
    ],
    [
      [{ foo: 'one' }, { foo: 'one' }, { foo: 'two' }] satisfies ObjType[],
      () => 'whatever',
      { whatever: [{ foo: 'one' }, { foo: 'one' }, { foo: 'two' }] },
    ],
    [
      [{ foo: 'hello' }, { foo: 'something' }, { foo: 'two' }, { foo: 'three' }] satisfies ObjType[],
      (value: ObjType) => value.foo.substring(0, 1),
      {
        h: [{ foo: 'hello' }],
        s: [{ foo: 'something' }],
        t: [{ foo: 'two' }, { foo: 'three' }],
      },
    ],
  ])('returns expected result', (list, fn, expected) => {
    expect(groupBy(list, fn)).toEqual(expected);
  });
});
