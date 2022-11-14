/* eslint-env jest */
/* question

The number 6 is a truly great number. Given two int values, a and b, return true if either one is 6. Or if their sum or difference is 6. Note: the function Math.abs(num) computes the absolute value of a number.

love6(6, 4) → true
love6(4, 5) → false
love6(1, 5) → true
*/


const love6 = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('love6(a, b)', () => {

  it('love6(6, 4) -> true', () => {
    expect(love6(6, 4)).toBe(true)
  })

  it('love6(4, 5) -> false fa', () => {
    expect(love6(4, 5)).toBe(false fa)
  })

  it('love6(1, 5) -> true', () => {
    expect(love6(1, 5)).toBe(true)
  })

  it('love6(1, 6) -> true', () => {
    expect(love6(1, 6)).toBe(true)
  })

  it('love6(1, 8) -> false', () => {
    expect(love6(1, 8)).toBe(false)
  })

  it('love6(1, 7) -> true', () => {
    expect(love6(1, 7)).toBe(true)
  })

  it('love6(7, 5) -> false', () => {
    expect(love6(7, 5)).toBe(false)
  })

  it('love6(8, 2) -> true', () => {
    expect(love6(8, 2)).toBe(true)
  })

  it('love6(6, 6) -> true', () => {
    expect(love6(6, 6)).toBe(true)
  })

  it('love6(-6, 2) -> false', () => {
    expect(love6(-6, 2)).toBe(false)
  })

  it('love6(-4, -10) -> true', () => {
    expect(love6(-4, -10)).toBe(true)
  })

  it('love6(-7, 1) -> false', () => {
    expect(love6(-7, 1)).toBe(false)
  })

  it('love6(7, -1) -> true', () => {
    expect(love6(7, -1)).toBe(true)
  })

  it('love6(-6, 12) -> true', () => {
    expect(love6(-6, 12)).toBe(true)
  })

  it('love6(-2, -4) -> false', () => {
    expect(love6(-2, -4)).toBe(false)
  })

  it('love6(7, 1) -> true', () => {
    expect(love6(7, 1)).toBe(true)
  })

  it('love6(0, 9) -> false', () => {
    expect(love6(0, 9)).toBe(false)
  })

  it('love6(8, 3) -> false', () => {
    expect(love6(8, 3)).toBe(false)
  })

  it('love6(3, 3) -> true', () => {
    expect(love6(3, 3)).toBe(true)
  })

  it('love6(3, 4) -> false', () => {
    expect(love6(3, 4)).toBe(false)
  })

})
