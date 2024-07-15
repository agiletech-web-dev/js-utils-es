import { bench, describe } from 'vitest';
import { tail as tailTookit } from 'js-utils-es';
import { tail as tailLodash } from 'lodash';

describe('tail', () => {
  bench('js-utils-es/tail', () => {
    tailTookit([1, 2, 3, 4]);
  });

  bench('lodash/tail', () => {
    tailLodash([1, 2, 3, 4]);
  });
});
