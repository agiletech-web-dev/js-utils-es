// eslint-disable-next-line ts/no-unsafe-function-type
export function isFunction<T extends Function>(val: any): val is T {
  return typeof val === 'function';
}
