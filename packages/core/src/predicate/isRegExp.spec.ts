import { describe, expect, it } from 'vitest';
import { isRegExp } from './isRegExp';

describe('isRegExp', () => {
  it('case1', () => {
    expect(isRegExp(null)).toBe(false);
    expect(isRegExp(undefined)).toBe(false);
    expect(isRegExp({})).toBe(false);
    expect(isRegExp('1')).toBe(false);
    expect(isRegExp(1)).toBe(false);
    expect(isRegExp(true)).toBe(false);
    expect(isRegExp(false)).toBe(false);
    expect(isRegExp(new Date())).toBe(false);
    expect(isRegExp(() => {
      return 2;
    })).toBe(false);

    expect(isRegExp(/[ab]/g)).toBe(true);
  });
});
