import { bench, describe } from 'vitest';
import { isEqual as isEqualToolkit } from 'js-utils-es';
import { isEqual as isEqualLodash } from 'lodash';

describe('isEqual', () => {
  bench('js-utils-es/isEqual', () => {
    isEqualToolkit(1, 1);
    isEqualToolkbench('hello', 'hello');
    isEqualToolkit(true, true);

    isEqualToolkbench('hello', 'world');
    isEqualToolkit(true, false);

    isEqualToolkit(Number.NaN, Number.NaN);
    isEqualToolkit(+0, -0);

    isEqualToolkit(new Date('2020-01-01'), new Date('2020-01-01'));
    isEqualToolkit(new Date('2020-01-01'), new Date('2021-01-01'));

    isEqualToolkit(/hello/g, /hello/g);
    isEqualToolkit(/hello/g, /hello/i);

    isEqualToolkit({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } });
    isEqualToolkit({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } });
    isEqualToolkit({ a: 1, b: 2 }, { a: 1, b: 2 });

    isEqualToolkit([1, 2, 3], [1, 2, 3]);
    isEqualToolkit([1, 2, 3], [1, 2, 4]);
  });

  bench('lodash/isEqual', () => {
    isEqualLodash(1, 1);
    isEqualLodash('hello', 'hello');
    isEqualLodash(true, true);

    isEqualLodash('hello', 'world');
    isEqualLodash(true, false);

    isEqualLodash(Number.NaN, Number.NaN);
    isEqualLodash(+0, -0);

    isEqualLodash(new Date('2020-01-01'), new Date('2020-01-01'));
    isEqualLodash(new Date('2020-01-01'), new Date('2021-01-01'));

    isEqualLodash(/hello/g, /hello/g);
    isEqualLodash(/hello/g, /hello/i);

    isEqualLodash({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } });
    isEqualLodash({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } });
    isEqualLodash({ a: 1, b: 2 }, { a: 1, b: 2 });

    isEqualLodash([1, 2, 3], [1, 2, 3]);
    isEqualLodash([1, 2, 3], [1, 2, 4]);
  });
});
