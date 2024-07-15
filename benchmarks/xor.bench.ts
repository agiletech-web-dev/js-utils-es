import { bench, describe } from 'vitest';
import { xor as xorToolkit } from 'js-utils-es';
import { xor as xorLodash } from 'lodash';

describe('xor', () => {
  bench('js-utils-es/xor', () => {
    xorToolkit([1, 2, 3, 4], [3, 4, 5, 6]);
  });

  bench('lodash/xor', () => {
    xorLodash([1, 2, 3, 4], [3, 4, 5, 6]);
  });
});
