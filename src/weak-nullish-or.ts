import type { Eq } from './prelude.js'

export function weakNullishOr<T, U>(eq: Eq<T, U>) {
  return function (a: undefined | null | T, b: undefined | null | U) {
    return (
      a == null ?
        b == null ?
          true :
          false :
        b == null ?
          false :
          eq(a, b)
    )
  }
}
