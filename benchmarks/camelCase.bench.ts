import { bench, describe } from 'vitest';
import { camelCase as camelCaseToolkit } from 'js-utils-es';
import { camelCase as camelCaseLodash } from 'lodash';

describe('camelCase', () => {
  bench('js-utils-es/camelCase', () => {
    const str = 'kebab-case';
    camelCaseToolkit(str);
  });

  bench('lodash/camelCase', () => {
    const str = 'kebab-case';
    camelCaseLodash(str);
  });
});
