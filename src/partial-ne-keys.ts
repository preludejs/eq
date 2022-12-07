import type { Eq, First, Second } from './prelude.js'

/**
 * Partial not equal keys.
 *
 * @returns an array of keys for which values are not equal excluding undefined rhs (partial).
 */
export function partialNeKeys<T extends Record<any, Eq<any, any>>>(eqs: T) {
  return function (a: { [k in keyof T]: First<T[k]> }, b: { [k in keyof T]?: Second<T[k]> }) {
    return Object
      .entries(eqs)
      .filter(([k, eq]) => (
        (b[k] !== undefined) &&
        !eq(a[k], b[k])
      ))
      .map(([_]) => _ as keyof T)
  }
}
