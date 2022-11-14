/* eslint-env jest */
/* question

Given two ints, each in the range 10..99, return true if there is a digit that appears in both numbers, such as the 2 in 12 and 23. (Note: division, e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

shareDigit(12, 23) → true
shareDigit(12, 43) → false
shareDigit(12, 44) → false
*/


const shareDigit = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('shareDigit(a, b)', () => {

  it('shareDigit(12, 23) -> true', () => {
    expect(shareDigit(12, 23)).toBe(true)
  })

  it('shareDigit(12, 43) -> false', () => {
    expect(shareDigit(12, 43)).toBe(false)
  })

  it('shareDigit(12, 44) -> false', () => {
    expect(shareDigit(12, 44)).toBe(false)
  })

  it('shareDigit(23, 12) -> true', () => {
    expect(shareDigit(23, 12)).toBe(true)
  })

  it('shareDigit(23, 39) -> true', () => {
    expect(shareDigit(23, 39)).toBe(true)
  })

  it('shareDigit(23, 19) -> false', () => {
    expect(shareDigit(23, 19)).toBe(false)
  })

  it('shareDigit(30, 90) -> true', () => {
    expect(shareDigit(30, 90)).toBe(true)
  })

  it('shareDigit(30, 91) -> false', () => {
    expect(shareDigit(30, 91)).toBe(false)
  })

  it('shareDigit(55, 55) -> true', () => {
    expect(shareDigit(55, 55)).toBe(true)
  })

  it('shareDigit(55, 44) -> false', () => {
    expect(shareDigit(55, 44)).toBe(false)
  })

})
