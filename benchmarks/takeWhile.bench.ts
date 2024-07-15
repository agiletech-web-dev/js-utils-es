import { bench, describe } from 'vitest';
import { takeWhile as takeWhileToolkit } from 'js-utils-es';
import { takeWhile as takeWhileLodash } from 'lodash';

describe('takeWhile', () => {
  bench('js-utils-es/takeWhile', () => {
    takeWhileToolkit([5, 4, 3, 2, 1], n => n < 4);
  });

  bench('lodash/takeWhile', () => {
    takeWhileLodash([5, 4, 3, 2, 1], n => n < 4);
  });
});
