import { describe, expect, it } from 'vitest';
import { isObject } from './isObject';

describe('isObject', () => {
  it('case1', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject({})).toBe(true);
    expect(isObject('1')).toBe(false);
    expect(isObject(1)).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(false)).toBe(false);
    expect(isObject(new Date())).toBe(false);
    expect(isObject(() => {
      return 2;
    })).toBe(false);
  });
});
