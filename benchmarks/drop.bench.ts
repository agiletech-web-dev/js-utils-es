import { bench, describe } from 'vitest';
import { drop as dropToolkit } from 'js-utils-es';
import { drop as dropLodash } from 'lodash';

describe('drop', () => {
  bench('js-utils-es/drop', () => {
    dropToolkit([1, 2, 3, 4, 5, 6], 3);
  });

  bench('lodash/drop', () => {
    dropLodash([1, 2, 3, 4, 5, 6], 3);
  });
});
