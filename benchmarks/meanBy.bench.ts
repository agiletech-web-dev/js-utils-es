import { bench, describe } from 'vitest';
import { meanBy as meanByToolkit } from 'js-utils-es';
import { meanBy as meanByLodash } from 'lodash';

describe('meanBy', () => {
  bench('js-utils-es/meanBy', () => {
    const items = [{ a: 1 }, { a: 2 }, { a: 3 }];
    meanByToolkit(items, x => x.a);
  });

  bench('lodash/meanBy', () => {
    const items = [{ a: 1 }, { a: 2 }, { a: 3 }];
    meanByLodash(items, x => x.a);
  });
});
