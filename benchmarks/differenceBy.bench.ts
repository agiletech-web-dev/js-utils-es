import { bench, describe } from 'vitest';
import { differenceBy as differenceByToolkit } from 'js-utils-es';
import { differenceBy as differenceByLodash } from 'lodash';

describe('differenceBy', () => {
  bench('js-utils-es/differenceBy', () => {
    differenceByToolkit([1.2, 2.3, 3.4], [1.2], Math.floor);
  });

  bench('lodash/differenceBy', () => {
    differenceByLodash([1.2, 2.3, 3.4], [1.2], Math.floor);
  });
});
