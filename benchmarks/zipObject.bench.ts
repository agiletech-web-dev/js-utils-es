import { bench, describe } from 'vitest';
import { zipObject as zipObjectToolkit } from 'js-utils-es';
import { zipObject as zipObjectLodash } from 'lodash';

describe('zipObject', () => {
  bench('js-utils-es/zipObject', () => {
    zipObjectToolkit([1, 2, 3, 4], ['a', 'b', 'c', 'd']);
  });

  bench('lodash/zipObject', () => {
    zipObjectLodash([1, 2, 3, 4], ['a', 'b', 'c', 'd']);
  });
});
