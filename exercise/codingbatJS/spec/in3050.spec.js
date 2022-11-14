/* eslint-env jest */
/* question

Given 2 int values, return true if they are both in the range 30..40 inclusive, or they are both in the range 40..50 inclusive.

2つの整数が与えられる，両方が30から40の範囲を満たすとき，または両方が40から50の範囲を満たすときは true を返せ

in3050(30, 31) → true
in3050(30, 41) → false
in3050(40, 50) → true
*/

const in3050 = (a, b) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('in3050(a, b)', () => {
  it('in3050(30, 31) -> true', () => {
    expect(in3050(30, 31)).toBe(true)
  })

  it('in3050(30, 41) -> false', () => {
    expect(in3050(30, 41)).toBe(false)
  })

  it('in3050(40, 50) -> true', () => {
    expect(in3050(40, 50)).toBe(true)
  })

  it('in3050(40, 51) -> false', () => {
    expect(in3050(40, 51)).toBe(false)
  })

  it('in3050(39, 50) -> false', () => {
    expect(in3050(39, 50)).toBe(false)
  })

  it('in3050(50, 39) -> false', () => {
    expect(in3050(50, 39)).toBe(false)
  })

  it('in3050(40, 39) -> true', () => {
    expect(in3050(40, 39)).toBe(true)
  })

  it('in3050(49, 48) -> true', () => {
    expect(in3050(49, 48)).toBe(true)
  })

  it('in3050(50, 40) -> true', () => {
    expect(in3050(50, 40)).toBe(true)
  })

  it('in3050(50, 51) -> false', () => {
    expect(in3050(50, 51)).toBe(false)
  })

  it('in3050(35, 36) -> true', () => {
    expect(in3050(35, 36)).toBe(true)
  })

  it('in3050(35, 45) -> false', () => {
    expect(in3050(35, 45)).toBe(false)
  })
})
