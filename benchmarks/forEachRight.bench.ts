import { bench, describe } from 'vitest';
import { forEachRight as forEachRightTookit } from 'js-utils-es';
import { forEachRight as forEachRightLodash } from 'lodash';

describe('forEachRight', () => {
  bench('js-utils-es/forEachRight', () => {
    forEachRightTookit([1, 2, 3, 4, 5, 6], x => x + 3);
  });

  bench('lodash/forEachRight', () => {
    forEachRightLodash([1, 2, 3, 4, 5, 6], x => x + 3);
  });
});
