import { describe, expect, it } from 'vitest';

import { lerp } from './lerp';

describe('lerp', () => {
  it('returns value within the range when two parameters are provided', () => {
    expect(lerp(0, 2, 0.5)).toBe(1);
  });
});
