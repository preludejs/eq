export function is<T = unknown, U = T>(a: T, b: U) {
  return Object.is(a, b)
}
