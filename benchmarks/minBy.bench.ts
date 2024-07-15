import { bench, describe } from 'vitest';
import { minBy as minByToolkit } from 'js-utils-es';
import { minBy as minByLodash } from 'lodash';

describe('minBy', () => {
  bench('js-utils-es/minBy', () => {
    const people = [
      { name: 'Mark', age: 30 },
      { name: 'Nunu', age: 20 },
      { name: 'Overmars', age: 35 },
    ];
    minByToolkit(people, person => person.age);
  });

  bench('lodash/minBy', () => {
    const people = [
      { name: 'Mark', age: 30 },
      { name: 'Nunu', age: 20 },
      { name: 'Overmars', age: 35 },
    ];
    minByLodash(people, person => person.age);
  });
});
