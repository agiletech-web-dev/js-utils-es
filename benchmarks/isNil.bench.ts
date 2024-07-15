import { bench, describe } from 'vitest';
import { isNil as isNilToolkit } from 'js-utils-es';
import { isNil as isNilLodash } from 'lodash';

describe('isNil', () => {
  bench('js-utils-es/isNil', () => {
    isNilToolkit(null);
    isNilToolkit(undefined);
    isNilToolkit(123);
    isNilToolkit([1, 2, 3]);
  });

  bench('lodash/isNil', () => {
    isNilLodash(null);
    isNilLodash(undefined);
    isNilLodash(123);
    isNilLodash([1, 2, 3]);
  });
});
