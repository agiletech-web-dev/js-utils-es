import { bench, describe } from 'vitest';
import { unionWith as unionWithToolkit } from 'js-utils-es';
import { unionWith as unionWithLodash } from 'lodash';

describe('unionWith', () => {
  bench('js-utils-es/unionWith', () => {
    const array1 = [{ id: 1 }, { id: 2 }];
    const array2 = [{ id: 2 }, { id: 3 }];
    const areItemsEqual = (a, b) => a.id === b.id;
    unionWithToolkit(array1, array2, areItemsEqual);
  });

  bench('lodash/unionWith', () => {
    const array1 = [{ id: 1 }, { id: 2 }];
    const array2 = [{ id: 2 }, { id: 3 }];
    const areItemsEqual = (a, b) => a.id === b.id;
    unionWithLodash(array1, array2, areItemsEqual);
  });
});
