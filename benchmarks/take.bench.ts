import { bench, describe } from 'vitest';
import { take as takeToolkit } from 'js-utils-es';
import { take as takeLodash } from 'lodash';

describe('take', () => {
  bench('js-utils-es/take', () => {
    takeToolkit([1, 2, 3, 4], 2);
  });

  bench('lodash/take', () => {
    takeLodash([1, 2, 3, 4], 2);
  });
});
