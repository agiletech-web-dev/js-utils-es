import { toString } from './_internal/toString';

export function isObject(val: any): val is object {
  return toString(val) === '[object Object]';
}
