import { bench, describe } from 'vitest';
import { partition as partitionToolkit } from 'js-utils-es';
import { partition as partitionLodash } from 'lodash';

describe('partition', () => {
  bench('js-utils-es/partition', () => {
    partitionToolkit([1, 2, 3, 4, 5], x => x < 3);
  });

  bench('lodash/partition', () => {
    partitionLodash([1, 2, 3], x => x < 3);
  });
});
