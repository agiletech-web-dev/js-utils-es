import { describe, expect, it } from 'vitest';
import { isBoolean } from './isBoolean';

describe('isBoolean', () => {
  it('case1', () => {
    expect(isBoolean(null)).toBe(false);
    expect(isBoolean(undefined)).toBe(false);
    expect(isBoolean({})).toBe(false);
    expect(isBoolean('1')).toBe(false);
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });
});
