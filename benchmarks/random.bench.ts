import { bench, describe } from 'vitest';
import { random as randomToolkit } from 'js-utils-es';
import { random as randomLodash } from 'lodash';

describe('random', () => {
  bench('js-utils-es/random', () => {
    randomToolkit(1, 10);
  });

  bench('lodash/random', () => {
    randomLodash(1, 10, true);
  });
});
