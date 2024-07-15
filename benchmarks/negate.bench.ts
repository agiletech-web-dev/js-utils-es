/* eslint-disable ts/no-unused-expressions */
import { bench, describe } from 'vitest';
import { negate as negateToolkit } from 'js-utils-es';
import { negate as negateLodash } from 'lodash';

describe('compact', () => {
  bench('js-utils-es', () => {
    // @ts-expect-error
    negateToolkit(() => true)() === false;
  });

  bench('lodash', () => {
    negateLodash(() => true)() === false;
  });
});
