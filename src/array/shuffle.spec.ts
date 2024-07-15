import { describe, expect, it } from 'vitest';
import { shuffle } from './shuffle';

describe('shuffle', () => {
  it('randomizes the order of an array', () => {
    const arr = [1, 2, 3, 4, 5];

    expect(shuffle(arr).slice().sort()).toEqual(arr.slice().sort());
  });

  it('does not modify the original array', () => {
    const arr = [1, 2, 3, 4, 5];
    const copiedArr = arr.slice();

    shuffle(arr);
    expect(arr).toEqual(copiedArr);
  });
});
