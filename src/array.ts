import type { Eq } from './prelude.js'

function array_<T>(eq: Eq<T>) {
  return function (a: T[], b: T[]) {
    return (
      (a.length === b.length) &&
      a.every((v, i) => eq(v, b[i]))
    )
  }
}

export { array_ as array }
