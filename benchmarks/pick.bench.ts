import { bench, describe } from 'vitest';
import { pick as pickToolkit } from 'js-utils-es';
import { pick as pickLodash } from 'lodash';

describe('pick', () => {
  bench('js-utils-es/pick', () => {
    pickToolkit({ foo: 1, bar: 2, baz: 3 }, ['foo', 'bar']);
  });

  bench('lodash/pick', () => {
    pickLodash({ foo: 1, bar: 2, baz: 3 }, ['foo', 'bar']);
  });
});
