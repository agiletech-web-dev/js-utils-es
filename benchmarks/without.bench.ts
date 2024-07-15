import { bench, describe } from 'vitest';
import { without as withoutEsToolkit } from 'js-utils-es';
import { without as withoutLodash } from 'lodash';

function generateArray(length: number, max: number) {
  return Array.from({ length }, () => Math.floor(Math.random() * max))
}

describe('without, small arrays', () => {
  const array = [1, 2, 3, 4, 5];
  const values = [2, 4];

  bench('js-utils-es/without', () => {
    withoutEsToolkit(array, ...values);
  });

  bench('lodash/without', () => {
    withoutLodash(array, ...values);
  });
});

describe('without, large arrays', () => {
  const array = generateArray(10000, 1000);
  const values = generateArray(100, 1000);

  bench('js-utils-es/without', () => {
    withoutEsToolkit(array, ...values);
  });

  bench('lodash/without', () => {
    withoutLodash(array, ...values);
  });
});
