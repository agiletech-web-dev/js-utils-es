import { bench, describe } from 'vitest';
import { initial as initialLodash } from 'lodash';
import { initial as initialToolkit } from 'js-utils-es';

// Helper function to generate a large array
function generateLargeArray(size) {
  return Array.from({ length: size }, (_, index) => index);
}

describe('initial function performance', () => {
  const largeArray = generateLargeArray(1000000);

  bench('js-utils-es/initial', () => {
    initialToolkit(largeArray);
  });

  bench('lodash/initial', () => {
    initialLodash(largeArray);
  });
});
