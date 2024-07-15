import { bench, describe } from 'vitest';
import { flattenDeep as flattenDeepToolkit } from 'js-utils-es';
import { flattenDeep as flattenDeepLodash } from 'lodash';

function createNestedArray(values: number[]) {
  if (values.length === 0) {
    return [];
  }
  const [first, ...rest] = values;
  return [first, createNestedArray(rest)];
}

describe('flattenDeep', () => {
  const arr = createNestedArray(Array.from({ length: 30 }, (_, index) => index));

  bench('js-utils-es/flattenDeep', () => {
    flattenDeepToolkit(arr);
  });

  bench('lodash/flattenDeep', () => {
    flattenDeepLodash(arr);
  });

  bench('js built-in/flat(Infinity)', () => {
    arr.flat(Infinity);
  });
});
