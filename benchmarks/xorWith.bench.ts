import { xorWith as xorWithToolkit } from 'js-utils-es';
import { xorWith as xorWithLodash } from 'lodash';
import { bench, describe } from 'vitest';

describe('xorWith', () => {
  bench('js-utils-es/xorWith', () => {
    xorWithToolkit([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], (x, y) => x.id === y.id);
  });

  bench('lodash/xorWith', () => {
    xorWithLodash([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], (x, y) => x.id === y.id);
  });
});
