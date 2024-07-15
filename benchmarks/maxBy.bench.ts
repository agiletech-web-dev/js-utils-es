import { bench, describe } from 'vitest';
import { maxBy as maxByToolkit } from 'js-utils-es';
import { maxBy as maxByLodash } from 'lodash';

describe('maxBy', () => {
  bench('js-utils-es/maxBy', () => {
    const people = [
      { name: 'Mark', age: 25 },
      { name: 'Nunu', age: 30 },
      { name: 'Overmars', age: 20 },
    ];
    maxByToolkit(people, person => person.age);
  });

  bench('lodash/maxBy', () => {
    const people = [
      { name: 'Mark', age: 25 },
      { name: 'Nunu', age: 30 },
      { name: 'Overmars', age: 20 },
    ];
    maxByLodash(people, person => person.age);
  });
});
