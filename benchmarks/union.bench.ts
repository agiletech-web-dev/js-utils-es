import { union as unionToolkit } from 'js-utils-es';
import { union as unionLodash } from 'lodash';
import { bench, describe } from 'vitest';

describe('union', () => {
  bench('js-utils-es/union', () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 4, 5];
    unionToolkit(array1, array2);
  });

  bench('lodash/union', () => {
    const array1 = [1, 2, 3];
    const array2 = [3, 4, 5];
    unionLodash(array1, array2);
  });
});
