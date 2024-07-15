import { bench, describe } from 'vitest';
import { clone } from 'js-utils-es';
import { clone as lodashClone } from 'lodash';

const obj = {
  number: 29,
  string: 'js-utils-es',
  boolean: true,
  array: [1, 2, 3],
  object: { a: 1, b: 'js-utils-es' },
  date: new Date(),
  regex: /abc/g,
  nested: { a: [1, 2, 3], b: { c: 'js-utils-es' }, d: new Date() },
};

describe('clone', () => {
  bench('js-utils-es/clone', () => {
    clone(obj);
  });
  bench('lodash/clone', () => {
    lodashClone(obj);
  });
});
