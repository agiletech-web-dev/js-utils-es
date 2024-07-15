import { unzipWith as unzipWithToolkit } from 'js-utils-es';
import { unzipWith as unzipWithLodash } from 'lodash';
import { bench, describe } from 'vitest';

describe('unzipWith', () => {
  bench('js-utils-es/unzipWith', () => {
    unzipWithToolkit(
      [
        [1000, 2000],
        [3000, 4000],
        [50000, 60000],
      ],
      (a, b, c) => a + b + c,
    );
  });

  bench('lodash/unzipWith', () => {
    unzipWithLodash(
      [
        [1000, 2000],
        [3000, 4000],
        [50000, 60000],
      ],
      (a, b, c) => a + b + c,
    );
  });
});
