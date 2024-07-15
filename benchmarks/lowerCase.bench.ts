import { bench, describe } from 'vitest';
import { lowerCase as lowerCaseToolkit } from 'js-utils-es';
import { lowerCase as lowerCaseLodash } from 'lodash';

describe('lowerCase', () => {
  describe('short string', () => {
    bench('js-utils-es/lowerCase', () => {
      const str = 'camelCase';
      lowerCaseToolkit(str);
    });

    bench('lodash/lowerCase', () => {
      const str = 'camelCase';
      lowerCaseLodash(str);
    });
  });

  describe('long string', () => {
    const LONG_STR = 'camelCaseLongString'.repeat(1000);
    bench('js-utils-es/lowerCase', () => {
      lowerCaseToolkit(LONG_STR);
    });

    bench('lodash/lowerCase', () => {
      lowerCaseLodash(LONG_STR);
    });
  });
});
