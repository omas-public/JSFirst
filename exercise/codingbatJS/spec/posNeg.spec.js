/* eslint-env jest */
/* question

Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

2つの整数が与えられる，一方が正の数もう一方が負の数の時 true を返せ。但し引数 "negative" が true の場合は両方が負の数の時のみ true を返せ

posNeg(1, -1, false) → true
posNeg(-1, 1, false) → true
posNeg(-4, -5, true) → true
*/

const posNeg = (a, b, negative) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('posNeg(a, b, negative)', () => {
  it('posNeg(1, -1, false) -> true', () => {
    expect(posNeg(1, -1, false)).toBe(true)
  })

  it('posNeg(-1, 1, false) -> true', () => {
    expect(posNeg(-1, 1, false)).toBe(true)
  })

  it('posNeg(-4, -5, true) -> true', () => {
    expect(posNeg(-4, -5, true)).toBe(true)
  })

  it('posNeg(-4, -5, false) -> false', () => {
    expect(posNeg(-4, -5, false)).toBe(false)
  })

  it('posNeg(-4, 5, false) -> true', () => {
    expect(posNeg(-4, 5, false)).toBe(true)
  })

  it('posNeg(-4, 5, true) -> false', () => {
    expect(posNeg(-4, 5, true)).toBe(false)
  })

  it('posNeg(1, 1, false) -> false', () => {
    expect(posNeg(1, 1, false)).toBe(false)
  })

  it('posNeg(-1, -1, false) -> false', () => {
    expect(posNeg(-1, -1, false)).toBe(false)
  })

  it('posNeg(1, -1, true) -> false', () => {
    expect(posNeg(1, -1, true)).toBe(false)
  })

  it('posNeg(-1, 1, true) -> false', () => {
    expect(posNeg(-1, 1, true)).toBe(false)
  })

  it('posNeg(1, 1, true) -> false', () => {
    expect(posNeg(1, 1, true)).toBe(false)
  })

  it('posNeg(-1, -1, true) -> true', () => {
    expect(posNeg(-1, -1, true)).toBe(true)
  })

  it('posNeg(5, -5, false) -> true', () => {
    expect(posNeg(5, -5, false)).toBe(true)
  })

  it('posNeg(-6, 6, false) -> true', () => {
    expect(posNeg(-6, 6, false)).toBe(true)
  })

  it('posNeg(-5, -6, false) -> false', () => {
    expect(posNeg(-5, -6, false)).toBe(false)
  })

  it('posNeg(-2, -1, false) -> false', () => {
    expect(posNeg(-2, -1, false)).toBe(false)
  })

  it('posNeg(1, 2, false) -> false', () => {
    expect(posNeg(1, 2, false)).toBe(false)
  })

  it('posNeg(-5, 6, true) -> false', () => {
    expect(posNeg(-5, 6, true)).toBe(false)
  })

  it('posNeg(-5, -5, true) -> true', () => {
    expect(posNeg(-5, -5, true)).toBe(true)
  })
})
