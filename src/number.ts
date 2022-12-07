/** @returns true if both arguments are NaN or strictly equal numbers. */
function number_(a: number, b: number) {
  return (
    a === b ||
    (Number.isNaN(a) && Number.isNaN(b))
  )
}

export { number_ as number }
