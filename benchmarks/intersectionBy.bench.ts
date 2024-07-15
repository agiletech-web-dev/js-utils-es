import { bench, describe } from 'vitest';
import { intersectionBy as intersectionByToolkit } from 'js-utils-es';
import { intersectionBy as intersectionByLodash } from 'lodash';

describe('intersectionBy', () => {
  bench('js-utils-es/intersectionBy', () => {
    const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const array2 = [{ id: 2 }, { id: 4 }];
    const mapper = item => item.id;
    intersectionByToolkit(array1, array2, mapper);
  });

  bench('lodash/intersectionBy', () => {
    const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }];
    const array2 = [{ id: 2 }, { id: 4 }];
    const mapper = item => item.id;
    intersectionByLodash(array1, array2, mapper);
  });
});
