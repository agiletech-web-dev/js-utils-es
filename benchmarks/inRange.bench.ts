import { bench, describe } from 'vitest';
import { inRange as inRangeToolkit } from 'js-utils-es';
import { inRange as inRangeLodash } from 'lodash';

describe('inRange', () => {
  bench('js-utils-es/inRange', () => {
    inRangeToolkit(3, 5);
  });

  bench('lodash/inRange', () => {
    inRangeLodash(3, 5);
  });
});
