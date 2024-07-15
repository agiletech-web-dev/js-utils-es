import { bench, describe } from 'vitest';
import { xorBy as xorByToolkit } from 'js-utils-es';
import { xorBy as xorByLodash } from 'lodash';

describe('xorBy', () => {
  bench('js-utils-es/xorBy', () => {
    const idMapper = obj => obj.id;
    xorByToolkit([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], idMapper);
  });

  bench('lodash/xorBy', () => {
    const idMapper = obj => obj.id;
    xorByLodash([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], idMapper);
  });
});
