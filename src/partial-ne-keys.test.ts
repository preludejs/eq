import * as $ from './index.js'

test('partial-ne-keys', () => {

  const f = $.partialNeKeys({
    foo: $.number,
    bar: $.array($.number)
  })
  const a = { foo: 1, bar: [ 2, 3, 5 ] }
  expect(f(a, { foo: 1, bar: [ 2, 3, 5 ] })).toEqual([])
  expect(f(a, { foo: 1 })).toEqual([])
  expect(f(a, { bar: [2, 3, 5] })).toEqual([])
  expect(f(a, { foo: 1, bar: [ 2, 3, 4 ] })).toEqual([ 'bar' ])
  expect(f(a, { foo: 2, bar: [ 2, 3, 5 ] })).toEqual([ 'foo' ])
  expect(f(a, { foo: 2, bar: [ 2, 3, 4 ] })).toEqual([ 'foo', 'bar' ])
  expect(f(a, { foo: 2 })).toEqual([ 'foo' ])
  expect(f(a, { bar: [ 2, 3, 4 ] })).toEqual([ 'bar' ])
})
