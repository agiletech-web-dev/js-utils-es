import { bench, describe } from 'vitest';
import { mean as meanToolkit } from 'js-utils-es';
import { mean as meanLodash } from 'lodash';

describe('mean', () => {
  bench('js-utils-es/mean', () => {
    meanToolkit([1, 2, 3]);
  });

  bench('lodash/mean', () => {
    meanLodash([1, 2, 3]);
  });
});
