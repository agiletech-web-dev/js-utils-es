import { once as onceToolkit } from 'js-utils-es';
import { once as onceLodash } from 'lodash';
import { bench, describe } from 'vitest';

describe('once', () => {
  bench('js-utils-es/once', () => {
    onceToolkit(() => undefined);
  });

  bench('lodash/once', () => {
    onceLodash(() => undefined);
  });
});
