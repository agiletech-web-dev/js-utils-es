import { randomInt } from 'node:crypto';
import { bench, describe } from 'vitest';
import { uniqBy as uniqByToolkit } from 'js-utils-es';
import { uniqBy as uniqByLodash } from 'lodash';

describe('uniqBy, small arrays', () => {
  bench('js-utils-es/uniqBy', () => {
    uniqByToolkit([2.1, 1.2, 2.3], Math.floor);
  });

  bench('lodash/uniqBy', () => {
    uniqByLodash([2.1, 1.2, 2.3], Math.floor);
  });
});

describe('uniqBy, large arrays', () => {
  const array = Array.from({ length: 10000 }).map(() => randomInt(0, 10000));

  bench('js-utils-es/uniqBy', () => {
    uniqByToolkit(array, Math.floor);
  });

  bench('lodash/uniqBy', () => {
    uniqByLodash(array, Math.floor);
  });
});
