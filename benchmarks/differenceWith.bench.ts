import { bench, describe } from 'vitest';
import { differenceWith as differenceWithToolkit } from 'js-utils-es';
import { differenceWith as differenceWithLodash } from 'lodash';

describe('differenceWith', () => {
  bench('js-utils-es/differenceWith', () => {
    differenceWithToolkit([1.2, 2.3, 3.4], [1.2], (x, y) => Math.floor(x) === Math.floor(y));
  });

  bench('lodash/differenceWith', () => {
    differenceWithLodash([1.2, 2.3, 3.4], [1.2], (x, y) => Math.floor(x) === Math.floor(y));
  });
});
