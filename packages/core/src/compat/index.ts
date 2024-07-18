/**
 * js-utils-es compatibility layer with lodash (WIP)
 * ====================================
 * ```tsx
 * // js-utils-es/compat aims to provide 100% feature parity with lodash
 * import { chunk } from 'js-utils-es/compat';
 *
 * chunk([1, 2, 3, 4], 0);
 * // Returns [], which is identical to lodash
 * ```
 *
 * `js-utils-es/compat` will offer complete compatibility with lodash, ensuring a seamless transition.
 *
 * To guarantee identical behavior, `js-utils-es/compat` will be thoroughly tested using actual lodash test cases.
 *
 * The primary goal of `js-utils-es/compat` is to serve as a drop-in replacement for lodash.
 *
 * It's important to note that while `js-utils-es/compat` will mirror the behavior of lodash functions with 100% accuracy,
 * it will deliberately omit unsafe features, such as:
 *
 * - Implicit type casting from an empty string `''` to 0 or false, and similar cases.
 *
 * @module
 */
export * from '../index.ts';

export { chunk } from './array/chunk.ts';
