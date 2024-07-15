import { bench, describe } from 'vitest';
import { unzip as unzipToolkit } from 'js-utils-es';
import { unzip as unzipLodash } from 'lodash';

describe('unzip, small arrays', () => {
  bench('js-utils-es/unzip', () => {
    unzipToolkit([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });

  bench('lodash/unzip', () => {
    unzipLodash([
      ['a', 1, true],
      ['b', 2, false],
    ]);
  });
});
