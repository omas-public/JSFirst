/* eslint-env jest */
/* question

Given three ints, a b c, return true if two or more of them have the same rightmost digit. The ints are non-negative. Note: the % "mod" operator computes the remainder, e.g. 17 % 10 is 7.

3つの整数 a b c,が与えられる。そのうちの2つ以上が同じ最終桁だった場合はtrueを返せ

lastDigit(23, 19, 13) → true
lastDigit(23, 19, 12) → false
lastDigit(23, 19, 3) → true
*/

const lastDigit = (a, b, c) => {
// use Number.toString() or mod(%) operator
// write code here

}

/* -- test code ---------------------------------------- */
describe('lastDigit(a, b, c)', () => {
  it('lastDigit(23, 19, 13) -> true', () => {
    expect(lastDigit(23, 19, 13)).toBe(true)
  })

  it('lastDigit(23, 19, 12) -> false', () => {
    expect(lastDigit(23, 19, 12)).toBe(false)
  })

  it('lastDigit(23, 19, 3) -> true', () => {
    expect(lastDigit(23, 19, 3)).toBe(true)
  })

  it('lastDigit(23, 19, 39) -> true', () => {
    expect(lastDigit(23, 19, 39)).toBe(true)
  })

  it('lastDigit(1, 2, 3) -> false', () => {
    expect(lastDigit(1, 2, 3)).toBe(false)
  })

  it('lastDigit(1, 1, 2) -> true', () => {
    expect(lastDigit(1, 1, 2)).toBe(true)
  })

  it('lastDigit(1, 2, 2) -> true', () => {
    expect(lastDigit(1, 2, 2)).toBe(true)
  })

  it('lastDigit(14, 25, 43) -> false', () => {
    expect(lastDigit(14, 25, 43)).toBe(false)
  })

  it('lastDigit(14, 25, 45) -> true', () => {
    expect(lastDigit(14, 25, 45)).toBe(true)
  })

  it('lastDigit(248, 106, 1002) -> false', () => {
    expect(lastDigit(248, 106, 1002)).toBe(false)
  })

  it('lastDigit(248, 106, 1008) -> true', () => {
    expect(lastDigit(248, 106, 1008)).toBe(true)
  })

  it('lastDigit(10, 11, 20) -> true', () => {
    expect(lastDigit(10, 11, 20)).toBe(true)
  })

  it('lastDigit(0, 11, 0) -> true', () => {
    expect(lastDigit(0, 11, 0)).toBe(true)
  })
})
