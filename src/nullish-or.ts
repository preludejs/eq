import { nullOr } from './null-or.js'
import { undefinedOr } from './undefined-or.js'
import type { Eq } from './prelude.js'

/** Strict nullish comparision, ie. composition of {@link nullOr} and {@link undefinedOr}. */
export function nullishOr<T, U>(eq: Eq<T, U>) {
  return undefinedOr(nullOr(eq))
}
