/* eslint-env jest */
/* question

Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

2つの正の整数が与えられる，10から20の範囲にあるなかのうち大きい値を返せ，両方共範囲外の場合は0を返せ

max1020(11, 19) → 19
max1020(19, 11) → 19
max1020(11, 9) → 11
*/

const max1020 = (a, b) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('max1020(a, b)', () => {
  it('max1020(11, 19) -> 19', () => {
    expect(max1020(11, 19)).toBe(19)
  })

  it('max1020(19, 11) -> 19', () => {
    expect(max1020(19, 11)).toBe(19)
  })

  it('max1020(11, 9) -> 11', () => {
    expect(max1020(11, 9)).toBe(11)
  })

  it('max1020(9, 21) -> 0', () => {
    expect(max1020(9, 21)).toBe(0)
  })

  it('max1020(10, 21) -> 10', () => {
    expect(max1020(10, 21)).toBe(10)
  })

  it('max1020(21, 10) -> 10', () => {
    expect(max1020(21, 10)).toBe(10)
  })

  it('max1020(9, 11) -> 11', () => {
    expect(max1020(9, 11)).toBe(11)
  })

  it('max1020(23, 10) -> 10', () => {
    expect(max1020(23, 10)).toBe(10)
  })

  it('max1020(20, 10) -> 20', () => {
    expect(max1020(20, 10)).toBe(20)
  })

  it('max1020(7, 20) -> 20', () => {
    expect(max1020(7, 20)).toBe(20)
  })

  it('max1020(17, 16) -> 17', () => {
    expect(max1020(17, 16)).toBe(17)
  })
})
