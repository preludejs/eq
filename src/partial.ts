import type { Eq, First, Second } from './prelude.js'

export function partial<T extends Record<any, Eq<any, any>>>(eqs: T) {
  const f = function (a: { [k in keyof T]: First<T[k]> }, b: { [k in keyof T]?: Second<T[k]> }) {
    for (const k in eqs) {
      if (b[k] === undefined) {
        continue
      }
      if (!eqs[k](a[k], b[k])) {
        return false
      }
    }
    return true
  }
  f.arg = eqs
  return f
}
