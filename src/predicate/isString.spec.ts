import { describe, expect, it } from 'vitest';
import { isString } from './isString';

describe('isString', () => {
  it('case1', () => {
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString('1')).toBe(true);
    expect(isString(1)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(new Date())).toBe(false);
    expect(isString(() => {
      return 2;
    })).toBe(false);

    expect(isString(/[ab]/g)).toBe(false);
  });
});
