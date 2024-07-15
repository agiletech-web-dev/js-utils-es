import { bench, describe } from 'vitest';
import { unionBy as unionByToolkit } from 'js-utils-es';
import { unionBy as unionByLodash } from 'lodash';

describe('unionBy', () => {
  bench('js-utils-es/unionBy', () => {
    unionByToolkit([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], x => x.id);
  });

  bench('lodash/unionBy', () => {
    unionByLodash([{ id: 1 }, { id: 2 }], [{ id: 2 }, { id: 3 }], x => x.id);
  });
});
