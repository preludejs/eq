export type Eq<T = unknown, U = T> =
  (a: T, b: U) =>
    boolean

export type t<T = unknown, U = T> =
  Eq<T, U>

export type First<T> =
  T extends Eq<infer U, any> ?
    U :
    never

export type Second<T> =
  T extends Eq<any, infer U> ?
    U :
    never

export type IfOverlap<T, U, R> =
  T extends U ?
    R :
    U extends T ?
      R :
      never

export type IntersectionOfUnion<T> =
  (T extends unknown ? (_: T) => unknown : never) extends (_: infer R) => unknown ?
    R :
    never
