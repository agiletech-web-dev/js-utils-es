import { bench, describe } from 'vitest';
import { zip as zipToolkit } from 'js-utils-es';
import { zip as zipLodash } from 'lodash';

describe('zip', () => {
  bench('js-utils-es/zip', () => {
    zipToolkit([1, 2, 3, 4], [3, 4, 5, 6]);
  });

  bench('lodash/zip', () => {
    zipLodash([1, 2, 3, 4], [3, 4, 5, 6]);
  });
});
