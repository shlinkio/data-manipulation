import { mergeDeepRight } from './index.js';

describe('mergeDeepRight', () => {
  it.each([
    [{}, {}, {}],
    [
      { foo: 'foo' },
      { bar: 'bar' },
      { foo: 'foo', bar: 'bar' },
    ],
    [
      { foo: 'foo', nested: { hello: 123 } },
      { bar: 'bar', nested: { hello: 456 } },
      { foo: 'foo', bar: 'bar', nested: { hello: 456 } },
    ],
    [
      {
        foo: {
          bar: { array: [1, 2, 3] },
        },
      },
      {
        foo: {
          bar: { array: [4, 5, 6] },
        },
        something: 'hi!',
      },
      {
        foo: {
          bar: { array: [4, 5, 6] },
        },
        something: 'hi!',
      },
    ],
    [
      { foo: undefined },
      {
        foo: { one: 1, two: 2 },
      },
      {
        foo: { one: 1, two: 2 },
      },
    ],
    [
      { foo: undefined },
      { foo: 'something' },
      { foo: 'something' },
    ],
  ])('returns expected result', (target, source, expected) => {
    expect(mergeDeepRight(target, source)).toEqual(expected);
  });
});
