import { bench, describe } from 'vitest';
import { kebabCase as kebabCaseToolkit } from 'js-utils-es';
import { kebabCase as kebabCaseLodash } from 'lodash';

describe('kebabCase', () => {
  bench('js-utils-es/kebabCase', () => {
    const str = 'camelCase';
    kebabCaseToolkit(str);
  });

  bench('lodash/kebabCase', () => {
    const str = 'camelCase';
    kebabCaseLodash(str);
  });
});
