import type { Eq, First, Second, OptionalIfUndefined } from './prelude.js'

/**
 * Partial not equal keys.
 *
 * @returns an array of keys for which values are not equal excluding undefined rhs (partial).
 */
export function partialNeKeys<T extends Record<string, Eq<any, any>>>(eqs: T) {
  return function (
    a: OptionalIfUndefined<{ [k in keyof T]: First<T[k]> }>,
    b: { [k in keyof T]?: Second<T[k]> }
  ) {
    const keys: (keyof T)[] = []
    for (const k in eqs) {
      if (b[k] === undefined) {
        continue
      }
      if (!eqs[k]((a as any)[k], b[k])) {
        keys.push(k)
      }
    }
    return keys
  }
}
