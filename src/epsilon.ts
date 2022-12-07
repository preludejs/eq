export function epsilon(e = Number.EPSILON) {
  return function (a: number, b: number) {
    return Math.abs(a - b) < e
  }
}
