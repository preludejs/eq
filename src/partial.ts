import type { Eq, First, Second, OptionalIfUndefined } from './prelude.js'

export function partial<T extends Record<string, Eq<any, any>>>(eqs: T) {
  const f = function (
    a: OptionalIfUndefined<{ [k in keyof T]: First<T[k]> }>,
    b: { [k in keyof T]?: Second<T[k]> }
  ) {
    for (const k in eqs) {
      if (b[k] === undefined) {
        continue
      }
      if (!eqs[k]((a as unknown as { [k in keyof T]: First<T[k]> })[k], b[k])) {
        return false
      }
    }
    return true
  }
  f.arg = eqs
  return f
}
