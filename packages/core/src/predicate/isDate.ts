import { toString } from './_internal/toString';

export function isDate(val: any): val is Date {
  return toString(val) === '[object Date]';
}
