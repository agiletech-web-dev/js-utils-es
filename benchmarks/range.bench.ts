import { bench, describe } from 'vitest';
import { range as rangeToolkit } from 'js-utils-es';
import { range as rangeLodash } from 'lodash';

describe('range', () => {
  bench('js-utils-es/range', () => {
    rangeToolkit(0, 100, 1);
  });

  bench('lodash/range', () => {
    rangeLodash(0, 100, 1);
  });
});
