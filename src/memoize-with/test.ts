import { memoizeWith } from './index.js';

describe('memoizeWith', () => {
  it.each([
    [() => '123', 1],
    [(arg: string) => arg, 3],
    [(arg: string) => (!isNaN(Number(arg))).toString(), 2],
  ])('returns expected result', (resolver, actualCalls) => {
    const fn = vi.fn().mockResolvedValue(1);
    const memoizedFunction = memoizeWith(resolver, fn);

    memoizedFunction('123');
    memoizedFunction('456');
    memoizedFunction('foo');

    expect(fn).toHaveBeenCalledTimes(actualCalls);
  });
});
