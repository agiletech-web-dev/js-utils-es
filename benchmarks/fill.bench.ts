import { bench, describe } from 'vitest';
import { fill as fillToolkit } from 'js-utils-es';
import { fill as fillLodash } from 'lodash';

describe('fill function performance comparison', () => {
  bench('js-utils-es/fill', () => {
    fillToolkit([1, 2, 3], 10);
  });

  bench('lodash/fill', () => {
    fillLodash([1, 2, 3], 10);
  });
});

describe('fill function performance with custom start and end', () => {
  bench('js-utils-es/fill', () => {
    fillToolkit([4, 6, 8, 10], '*', 1, 3);
  });

  bench('lodash/fill', () => {
    fillLodash([4, 6, 8, 10], '*', 1, 3);
  });
});
