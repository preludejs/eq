import type { Eq } from './prelude.js'

export function undefinedOr<T, U>(eq: Eq<T, U>) {
  return function (a: undefined | T, b: undefined | U) {
    return (
      a === undefined ?
        b === undefined ?
          true :
          false :
        b === undefined ?
          false :
          eq(a, b)
    )
  }
}
