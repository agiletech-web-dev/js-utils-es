import { bench, describe } from 'vitest';
import { keyBy as keyByToolkit } from 'js-utils-es';
import { keyBy as keyByLodash } from 'lodash';

describe('keyBy', () => {
  bench('js-utils-es/keyBy', () => {
    const people = [
      { name: 'mike', age: 20 },
      { name: 'jake', age: 30 },
      { name: 'john', age: 25 },
      { name: 'sarah', age: 25 },
      { name: 'emma', age: 25 },
    ];

    keyByToolkit(people, person => person.name);
  });

  bench('lodash/keyBy', () => {
    const people = [
      { name: 'mike', age: 20 },
      { name: 'jake', age: 30 },
      { name: 'john', age: 25 },
      { name: 'sarah', age: 25 },
      { name: 'emma', age: 25 },
    ];

    keyByLodash(people, person => person.name);
  });
});
