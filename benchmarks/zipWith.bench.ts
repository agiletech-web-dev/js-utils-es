import { bench, describe } from 'vitest';
import { zipWith as zipWithToolkit } from 'js-utils-es';
import { zipWith as zipWithLodash } from 'lodash';

describe('zipWith', () => {
  bench('js-utils-es/zipWith', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const arr3 = [5, 6];
    zipWithToolkit(arr1, arr2, arr3, (a, b, c) => `${a}${b}${c}`);
  });

  bench('lodash/zipWith', () => {
    const arr1 = [1, 2];
    const arr2 = [3, 4];
    const arr3 = [5, 6];
    zipWithLodash(arr1, arr2, arr3, (a, b, c) => `${a}${b}${c}`);
  });
});
