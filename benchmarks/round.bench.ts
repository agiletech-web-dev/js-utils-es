import { bench, describe } from 'vitest';
import { round as roundToolkit } from 'js-utils-es';
import { round as roundLodash } from 'lodash';

describe('round', () => {
  bench('js-utils-es/round', () => {
    roundToolkit(1.2345, 2);
  });

  bench('lodash/round', () => {
    roundLodash(1.2345, 2);
  });
});
