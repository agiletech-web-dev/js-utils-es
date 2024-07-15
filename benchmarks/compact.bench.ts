import { bench, describe } from 'vitest';
import { compact as compactToolkit } from 'js-utils-es';
import { compact as compactLodash } from 'lodash';

describe('compact', () => {
  bench('js-utils-es', () => {
    compactToolkit([0, 1, false, 2, '', 3, null, undefined, 4, Number.NaN, 5]);
  });

  bench('lodash', () => {
    compactLodash([0, 1, false, 2, '', 3, null, undefined, 4, Number.NaN, 5]);
  });
});
