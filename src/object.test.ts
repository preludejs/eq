import * as $ from './index.js'

test('object', () => {
  type A = { xs?: string[] }
  const f: $.Eq<A> = $.object({ xs: $.undefinedOr($.array($.string)) })
  expect(f({ xs: ['a', 'b'] }, { xs: ['a', 'b'] })).toBe(true)
  expect(f({ xs: ['a', 'b'] }, { xs: ['a', 'b', 'c'] })).toBe(false)
  expect(f({ xs: ['a', 'b'] }, { xs: undefined })).toBe(true)
  expect(f({ xs: ['a', 'b'] }, {})).toBe(true)
})
