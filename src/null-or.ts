import type { Eq } from './prelude.js'

export function nullOr<T, U>(eq: Eq<T, U>) {
  return function (a: null | T, b: null | U) {
    return (
      a === null ?
        b === null ?
          true :
          false :
        b === null ?
          false :
          eq(a, b)
    )
  }
}
