import { bench, describe } from 'vitest';
import { dropRight as dropRightToolkit } from 'js-utils-es';
import { dropRight as dropRightLodash } from 'lodash';

describe('dropRight', () => {
  bench('js-utils-es/dropRight', () => {
    dropRightToolkit([1, 2, 3, 4, 5, 6], 3);
  });

  bench('lodash/dropRight', () => {
    dropRightLodash([1, 2, 3, 4, 5, 6], 3);
  });
});
