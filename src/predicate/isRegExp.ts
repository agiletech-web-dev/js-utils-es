import { toString } from './_internal/toString';

export function isRegExp(val: any): val is RegExp {
  return toString(val) === '[object RegExp]';
}
