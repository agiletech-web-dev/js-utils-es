import { bench, describe } from 'vitest';
import { sample as sampleToolkit } from 'js-utils-es';
import { sample as sampleLodash } from 'lodash';

describe('sample', () => {
  bench('js-utils-es/sample', () => {
    const array = [1, 2, 3, 4, 5];
    sampleToolkit(array);
  });

  bench('lodash/sample', () => {
    const array = [1, 2, 3, 4, 5];
    sampleLodash(array);
  });
});
