import { describe, expect, it } from 'vitest';

import { remap } from './remap';

describe('remap', () => {
  it('returns value within the range when two parameters are provided', () => {
    expect(remap(0.5, 0, 1, 200, 400)).toBe(300);
  });
});
