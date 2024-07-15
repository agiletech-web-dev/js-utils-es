import { lerp } from './lerp'

/**
 * Linearly remaps a clamped value from its source range [`inMin`, `inMax`] to the destination range [`outMin`, `outMax`]
 *
 * @category Math
 * @example
 * ```
 * const value = remap(0.5, 0, 1, 200, 400) // value will be 300
 * ```
 */
export function remap(n: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const interpolation = (n - inMin) / (inMax - inMin)
  return lerp(outMin, outMax, interpolation)
}
