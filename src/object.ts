import type { Eq, First, Second } from './prelude.js'

function object_<T extends Record<string, Eq<any, any>>>(eqs: T) {
  const f = function (a: { [k in keyof T]: First<T[k]> }, b: { [k in keyof T]: Second<T[k]> }) {
    for (const k in eqs) {
      if (!eqs[k](a[k], b[k])) {
        return false
      }
    }
    return true
  }
  f.arg = eqs
  return f
}

export { object_ as object }
