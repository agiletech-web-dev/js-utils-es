import { bench, describe } from 'vitest';
import { dropWhile as dropWhileToolkit } from 'js-utils-es';
import { dropWhile as dropWhileLodash } from 'lodash';

describe('dropWhile', () => {
  bench('js-utils-es/dropWhile', () => {
    dropWhileToolkit([1.2, 2.3, 3.4], x => x < 2);
  });

  bench('lodash/dropWhile', () => {
    dropWhileLodash([1.2, 2.3, 3.4], x => x < 2);
  });
});
