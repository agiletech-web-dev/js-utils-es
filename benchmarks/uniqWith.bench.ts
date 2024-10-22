import { randomInt } from 'node:crypto';
import { bench, describe } from 'vitest';
import { uniqWith as uniqWithToolkit } from 'js-utils-es';
import { uniqWith as uniqWithLodash } from 'lodash';

describe('uniqWith, small arrays', () => {
  bench('js-utils-es/uniqWith', () => {
    uniqWithToolkit([2.1, 1.2, 2.3], (x, y) => Math.floor(x) === Math.floor(y));
  });

  bench('lodash/uniqWith', () => {
    uniqWithLodash([2.1, 1.2, 2.3], (x, y) => Math.floor(x) === Math.floor(y));
  });
});

describe('uniqWith, large arrays', () => {
  const array = Array.from({ length: 10000 }).map(() => randomInt(0, 10000));
  const comparator = (x, y) => Math.floor(x) === Math.floor(y);

  bench('js-utils-es/uniqWith', () => {
    uniqWithToolkit(array, comparator);
  });

  bench('lodash/uniqWith', () => {
    uniqWithLodash(array, comparator);
  });
});
