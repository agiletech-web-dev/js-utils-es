// @ts-check
import antfu from '@antfu/eslint-config';

export default antfu({
  rules: {
    'style/semi': 'off',
    'style/member-delimiter-style': 'off',
    'ts/ban-ts-comment': 'off',
    'test/consistent-test-it': 'off',
  },
});
