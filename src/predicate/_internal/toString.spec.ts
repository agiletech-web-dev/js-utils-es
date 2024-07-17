/* eslint-disable prefer-regex-literals */
import { describe, expect, it } from 'vitest';
import { toString } from './toString';

describe('toString', () => {
  it('case1', async () => {
    expect(toString(1)).toEqual('[object Number]');
  });

  it('case2', async () => {
    expect(toString('1')).toEqual('[object String]');
  });

  it('case3', async () => {
    expect(toString(true)).toEqual('[object Boolean]');
  });

  it('case4', async () => {
    expect(toString([])).toEqual('[object Array]');
  });

  it('case5', async () => {
    expect(toString({})).toEqual('[object Object]');
  });

  it('case6', async () => {
    expect(toString(new Date())).toEqual('[object Date]');
  });

  it('case7', async () => {
    expect(toString(new RegExp(/[a-z]/g))).toEqual('[object RegExp]');
  });
});
