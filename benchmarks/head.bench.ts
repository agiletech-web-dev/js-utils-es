import { bench, describe } from 'vitest';
import { head as headToolkit } from 'js-utils-es';
import { head as headLodash } from 'lodash';

describe('head', () => {
  bench('js-utils-es/head', () => {
    headToolkit([1, 2, 3, 4]);
  });

  bench('lodash/head', () => {
    headLodash([1, 2, 3, 4]);
  });
});
