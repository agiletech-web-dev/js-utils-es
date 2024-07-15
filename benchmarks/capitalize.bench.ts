import { bench, describe } from 'vitest';
import { capitalize as capitalizeToolkit } from 'js-utils-es';
import { capitalize as capitalizeLodash } from 'lodash';

describe('capitalize', () => {
  bench('js-utils-es/capitalize', () => {
    const str = 'camelCase';
    capitalizeToolkit(str);
  });

  bench('lodash/capitalize', () => {
    const str = 'camelCase';
    capitalizeLodash(str);
  });
});
