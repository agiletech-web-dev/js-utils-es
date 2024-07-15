import { bench, describe } from 'vitest';
import { clamp as clampToolkit } from 'js-utils-es';
import { clamp as clampLodash } from 'lodash';

describe('clamp', () => {
  bench('js-utils-es/clamp', () => {
    clampToolkit(10, 5, 15);
    clampToolkit(10, 5);
  });

  bench('lodash/clamp', () => {
    clampLodash(10, 5, 15);
    clampLodash(10, 5);
  });
});
