import { bench, describe } from 'vitest';
import { shuffle as shuffleToolkit } from 'js-utils-es';
import { shuffle as shuffleLodash } from 'lodash';

describe('shuffle', () => {
  bench('js-utils-es/shuffle', () => {
    const array = [1, 2, 3, 4, 5];
    shuffleToolkit(array);
  });

  bench('lodash/shuffle', () => {
    const array = [1, 2, 3, 4, 5];
    shuffleLodash(array);
  });
});
