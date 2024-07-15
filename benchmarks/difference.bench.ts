import { bench, describe } from 'vitest';
import { difference as differenceToolkit } from 'js-utils-es';
import { difference as differenceLodash } from 'lodash';

describe('difference', () => {
  bench('js-utils-es/difference', () => {
    differenceToolkit([1, 2, 3], [2]);
  });

  bench('lodash/difference', () => {
    differenceLodash([1, 2, 3], [2]);
  });
});
