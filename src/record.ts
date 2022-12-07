import type { Eq } from './prelude.js'

export function record<T>(eq: Eq<T>) {
  return function (a: Record<string, T>, b: Record<string, T>) {
    for (const k in a) {
      if (!eq(a[k], b[k])) {
        return false
      }
    }
    for (const k in b) {
      if (k in a) {
        continue
      }
      if (!eq(a[k], b[k])) {
        return false
      }
    }
    return true
  }
}
