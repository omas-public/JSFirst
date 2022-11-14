/* eslint-env jest */
/* question

Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

lessBy10(1, 7, 11) → true
lessBy10(1, 7, 10) → false
lessBy10(11, 1, 7) → true
*/


const lessBy10 = (a, b, c) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('lessBy10(a, b, c)', () => {

  it('lessBy10(1, 7, 11) -> true', () => {
    expect(lessBy10(1, 7, 11)).toBe(true)
  })

  it('lessBy10(1, 7, 10) -> false', () => {
    expect(lessBy10(1, 7, 10)).toBe(false)
  })

  it('lessBy10(11, 1, 7) -> true', () => {
    expect(lessBy10(11, 1, 7)).toBe(true)
  })

  it('lessBy10(10, 7, 1) -> false', () => {
    expect(lessBy10(10, 7, 1)).toBe(false)
  })

  it('lessBy10(-10, 2, 2) -> true', () => {
    expect(lessBy10(-10, 2, 2)).toBe(true)
  })

  it('lessBy10(2, 11, 11) -> false', () => {
    expect(lessBy10(2, 11, 11)).toBe(false)
  })

  it('lessBy10(3, 3, 30) -> true', () => {
    expect(lessBy10(3, 3, 30)).toBe(true)
  })

  it('lessBy10(3, 3, 3) -> false', () => {
    expect(lessBy10(3, 3, 3)).toBe(false)
  })

  it('lessBy10(10, 1, 11) -> true', () => {
    expect(lessBy10(10, 1, 11)).toBe(true)
  })

  it('lessBy10(10, 11, 1) -> true', () => {
    expect(lessBy10(10, 11, 1)).toBe(true)
  })

  it('lessBy10(10, 11, 2) -> false', () => {
    expect(lessBy10(10, 11, 2)).toBe(false)
  })

  it('lessBy10(3, 30, 3) -> true', () => {
    expect(lessBy10(3, 30, 3)).toBe(true)
  })

  it('lessBy10(2, 2, -8) -> true', () => {
    expect(lessBy10(2, 2, -8)).toBe(true)
  })

  it('lessBy10(2, 8, 12) -> true', () => {
    expect(lessBy10(2, 8, 12)).toBe(true)
  })

})
