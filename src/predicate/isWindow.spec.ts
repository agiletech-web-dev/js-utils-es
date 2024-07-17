import { describe, expect, it } from 'vitest';
import { isWindow } from './isWindow';

describe('isWindow', () => {
  it('case1', () => {
    expect(isWindow(null)).toBe(false);
    expect(isWindow(undefined)).toBe(false);
    expect(isWindow({})).toBe(false);
    expect(isWindow('1')).toBe(false);
    expect(isWindow(1)).toBe(false);
    expect(isWindow(true)).toBe(false);
    expect(isWindow(false)).toBe(false);
    expect(isWindow(new Date())).toBe(false);
    expect(isWindow(() => {
      return 2;
    })).toBe(false);

    expect(isWindow(/[ab]/g)).toBe(false);
  });
});
