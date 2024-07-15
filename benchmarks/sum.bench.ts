import { bench, describe } from 'vitest';
import { sum as sumToolkit } from 'js-utils-es';
import { sum as sumLodash } from 'lodash';

describe('sum', () => {
  bench('js-utils-es/sum', () => {
    sumToolkit([1, 2, 3]);
  });

  bench('lodash/sum', () => {
    sumLodash([1, 2, 3]);
  });
});
