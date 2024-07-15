import { clamp } from './clamp'

/**
 * Linearly interpolates between `min` and `max` based on `t`
 *
 * @category Math
 * @param min The minimum value
 * @param max The maximum value
 * @param t The interpolation value clamped between 0 and 1
 * @example
 * ```
 * const value = lerp(0, 2, 0.5) // value will be 1
 * ```
 */
export function lerp(min: number, max: number, t: number) {
  const interpolation = clamp(t, 0.0, 1.0)
  return min + (max - min) * interpolation
}
