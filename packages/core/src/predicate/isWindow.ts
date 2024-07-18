import { toString } from './_internal/toString';

export function isWindow(val: any): boolean {
  // @ts-expect-error
  return typeof window !== 'undefined' && toString(val) === '[object Window]';
}
