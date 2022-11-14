/* eslint-env jest */
/* question

Given three int values, a b c, return the largest.

3つの整数が与えられる，一番大きい値を返せ

intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3
*/

const intMax = (a, b, c) => {
// use Math.Max
// write code here

}

/* -- test code ---------------------------------------- */
describe('intMax(a, b, c)', () => {
  it('intMax(1, 2, 3) -> 3', () => {
    expect(intMax(1, 2, 3)).toBe(3)
  })

  it('intMax(1, 3, 2) -> 3', () => {
    expect(intMax(1, 3, 2)).toBe(3)
  })

  it('intMax(3, 2, 1) -> 3', () => {
    expect(intMax(3, 2, 1)).toBe(3)
  })

  it('intMax(9, 3, 3) -> 9', () => {
    expect(intMax(9, 3, 3)).toBe(9)
  })

  it('intMax(3, 9, 3) -> 9', () => {
    expect(intMax(3, 9, 3)).toBe(9)
  })

  it('intMax(3, 3, 9) -> 9', () => {
    expect(intMax(3, 3, 9)).toBe(9)
  })

  it('intMax(8, 2, 3) -> 8', () => {
    expect(intMax(8, 2, 3)).toBe(8)
  })

  it('intMax(-3, -1, -2) -> -1', () => {
    expect(intMax(-3, -1, -2)).toBe(-1)
  })

  it('intMax(6, 2, 5) -> 6', () => {
    expect(intMax(6, 2, 5)).toBe(6)
  })

  it('intMax(5, 6, 2) -> 6', () => {
    expect(intMax(5, 6, 2)).toBe(6)
  })

  it('intMax(5, 2, 6) -> 6', () => {
    expect(intMax(5, 2, 6)).toBe(6)
  })
})
