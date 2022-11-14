/* eslint-env jest */
/* question

Given two int values, return their sum. Unless the two values are the same, then return double their sum.

2つの値が与えられる，それらの合計を返せ。但し2つの値が同じ場合は合計を2倍して返せ

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8
*/

const sumDouble = (a, b) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('sumDouble(a, b)', () => {
  it('sumDouble(1, 2) -> 3', () => {
    expect(sumDouble(1, 2)).toBe(3)
  })

  it('sumDouble(3, 2) -> 5', () => {
    expect(sumDouble(3, 2)).toBe(5)
  })

  it('sumDouble(2, 2) -> 8', () => {
    expect(sumDouble(2, 2)).toBe(8)
  })

  it('sumDouble(-1, 0) -> -1', () => {
    expect(sumDouble(-1, 0)).toBe(-1)
  })

  it('sumDouble(3, 3) -> 12', () => {
    expect(sumDouble(3, 3)).toBe(12)
  })

  it('sumDouble(0, 0) -> 0', () => {
    expect(sumDouble(0, 0)).toBe(0)
  })

  it('sumDouble(0, 1) -> 1', () => {
    expect(sumDouble(0, 1)).toBe(1)
  })

  it('sumDouble(3, 4) -> 7', () => {
    expect(sumDouble(3, 4)).toBe(7)
  })
})
