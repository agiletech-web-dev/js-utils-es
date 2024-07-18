import { describe, expect, it } from 'vitest';
import { isNumber } from './isNumber';

describe('isNumber', () => {
  it('case1', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(undefined)).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber('1')).toBe(false);
    expect(isNumber(1)).toBe(true);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(new Date())).toBe(false);
    expect(isNumber(() => {
      return 2;
    })).toBe(false);
  });
});
