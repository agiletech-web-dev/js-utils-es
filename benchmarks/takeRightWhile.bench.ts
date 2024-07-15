import { bench, describe } from 'vitest';
import { takeRightWhile as takeRightWhileToolkit } from 'js-utils-es';
import { takeRightWhile as takeRightWhileLodash } from 'lodash';

describe('takeRightWhile', () => {
  bench('js-utils-es/takeRightWhile', () => {
    takeRightWhileToolkit([5, 4, 3, 2, 1], n => n < 4);
  });

  bench('lodash/takeRightWhile', () => {
    takeRightWhileLodash([5, 4, 3, 2, 1], n => n < 4);
  });
});
