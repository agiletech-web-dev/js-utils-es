import { bench, describe } from 'vitest';
import { sampleSize as sampleSizeToolkit } from 'js-utils-es';
import { sampleSize as sampleSizeLodash } from 'lodash';

describe('sampleSize', () => {
  bench('js-utils-es/sampleSize', () => {
    const array = [1, 2, 3, 4, 5];
    sampleSizeToolkit(array, 3);
  });

  bench('lodash/sampleSize', () => {
    const array = [1, 2, 3, 4, 5];
    sampleSizeLodash(array, 3);
  });
});
