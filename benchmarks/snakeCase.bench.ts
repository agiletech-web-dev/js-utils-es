import { bench, describe } from 'vitest';
import { snakeCase as snakeCaseToolkit } from 'js-utils-es';
import { snakeCase as snakeCaseLodash } from 'lodash';

describe('snakeCase', () => {
  bench('js-utils-es/snakeCase', () => {
    const str = 'camelCase';
    snakeCaseToolkit(str);
  });

  bench('lodash/snakeCase', () => {
    const str = 'camelCase';
    snakeCaseLodash(str);
  });
});
