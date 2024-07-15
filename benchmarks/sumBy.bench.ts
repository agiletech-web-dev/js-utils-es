import { bench, describe } from 'vitest';
import { sumBy as sumByToolkit } from 'js-utils-es';
import { sumBy as sumByLodash } from 'lodash';

describe('sumBy', () => {
  bench('js-utils-es/sumBy', () => {
    const items = [{ a: 1 }, { a: 2 }, { a: 3 }];
    sumByToolkit(items, x => x.a);
  });

  bench('lodash/sumBy', () => {
    const items = [{ a: 1 }, { a: 2 }, { a: 3 }];
    sumByLodash(items, x => x.a);
  });
});
