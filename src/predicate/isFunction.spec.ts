import { describe, expect, it } from 'vitest';
import { isFunction } from './isFunction';

describe('isFunction', () => {
  it('case1', () => {
    expect(isFunction(null)).toBe(false);
    expect(isFunction(undefined)).toBe(false);
    expect(isFunction({})).toBe(false);
    expect(isFunction('1')).toBe(false);
    expect(isFunction(1)).toBe(false);
    expect(isFunction(true)).toBe(false);
    expect(isFunction(false)).toBe(false);
    expect(isFunction(new Date())).toBe(false);
    expect(isFunction(() => {
      return 2;
    })).toBe(true);
  });
});
