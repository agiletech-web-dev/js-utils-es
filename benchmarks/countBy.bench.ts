import { bench, describe } from 'vitest';
import { countBy as countByToolkit } from 'js-utils-es';
import { countBy as countByLodash } from 'lodash';

describe('countBy', () => {
  bench('js-utils-es/countBy', () => {
    countByToolkit([1.2, 2.4, 3.6, 2.2, 3.4, 3.6], (item: number) => {
      return Math.floor(item).toString();
    });
  });

  bench('lodash/countBy', () => {
    countByLodash([1.2, 2.4, 3.6, 2.2, 3.4, 3.6], (item: number) => {
      return Math.floor(item).toString();
    });
  });
});
