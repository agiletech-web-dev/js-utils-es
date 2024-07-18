import { describe, expect, it } from 'vitest';
import { compact } from './compact';

describe('compact', () => {
  it('removes falsey values from array', () => {
    expect(compact([0, 1, false, 2, '', 3, null, undefined, 4, Number.NaN, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(compact([false, 0, '', null, undefined, Number.NaN])).toEqual([]);
    expect(compact([0, { name: 'John' }, false, 'hello', null, { age: 30 }, undefined, Number.NaN])).toEqual([
      { name: 'John' },
      'hello',
      { age: 30 },
    ]);
  });
});
