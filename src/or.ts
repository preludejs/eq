import type { Eq } from './prelude.js'

export function or<T>(...eqs: Eq<T>[]) {
  return function (a: T, b: T) {
    return eqs.some(eq => eq(a, b))
  }
}
