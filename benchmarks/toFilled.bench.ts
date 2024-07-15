import { bench, describe } from 'vitest';
import { fill as fillLodash } from 'lodash';
import { toFilled as toFilledToolkit } from 'js-utils-es';

describe('fill function performance comparison', () => {
  bench('js-utils-es/toFilled', () => {
    toFilledToolkit([1, 2, 3, 4, 5], '*');
  });

  bench('lodash/fill', () => {
    fillLodash([1, 2, 3, 4, 5], '*');
  });
});

describe('fill function performance with custom start and end', () => {
  bench('js-utils-es/toFilled', () => {
    toFilledToolkit([1, 2, 3, 4, 5], '*', 1, 3);
  });

  bench('lodash/fill', () => {
    fillLodash([1, 2, 3, 4, 5], '*', 1, 3);
  });
});
