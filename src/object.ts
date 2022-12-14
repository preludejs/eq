import type { Eq, First, Second, OptionalIfUndefined } from './prelude.js'

function object_<T extends Record<string, Eq<any, any>>>(eqs: T) {
  const f = function (
    a: OptionalIfUndefined<{ [k in keyof T]: First<T[k]> }>,
    b: OptionalIfUndefined<{ [k in keyof T]: Second<T[k]> }>)
   {
    for (const k in eqs) {
      if (!eqs[k]((a as any)[k], (b as any)[k])) {
        return false
      }
    }
    return true
  }
  f.arg = eqs
  return f
}

export { object_ as object }
