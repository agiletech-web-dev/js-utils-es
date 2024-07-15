import { bench, describe } from 'vitest';
import { flatten as flattenToolkit } from 'js-utils-es';
import { flattenDepth as flattenDepthLodash } from 'lodash';

function createNestedArray(values: any[]) {
  if (values.length === 0) {
    return [];
  }
  const [first, ...rest] = values;
  return [first, createNestedArray(rest)];
}

describe('flatten', () => {
  const arr = createNestedArray(Array.from({ length: 30 }, (_, index) => index));

  bench('js-utils-es/flatten', () => {
    flattenToolkit(arr, 30);
  });

  bench('lodash/flattenDepth', () => {
    flattenDepthLodash(arr, 30);
  });

  bench('js built-in/flat', () => {
    arr.flat(30);
  });
});
