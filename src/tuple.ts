import type { Eq } from './prelude.js'

export function tuple<T extends unknown[]>(...eqs: Eq<T[number]>[]) {
  return function (a: T, b: T) {
    return eqs.every((eq, i) => eq(a[i], b[i]))
  }
}
