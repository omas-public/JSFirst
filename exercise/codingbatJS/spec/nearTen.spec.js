/* eslint-env jest */
/* question

Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2. See also: Introduction to Mod

nearTen(12) → true
nearTen(17) → false
nearTen(19) → true
*/


const nearTen = (num) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('nearTen(num)', () => {

  it('nearTen(12) -> true', () => {
    expect(nearTen(12)).toBe(true)
  })

  it('nearTen(17) -> false', () => {
    expect(nearTen(17)).toBe(false)
  })

  it('nearTen(19) -> true', () => {
    expect(nearTen(19)).toBe(true)
  })

  it('nearTen(31) -> true', () => {
    expect(nearTen(31)).toBe(true)
  })

  it('nearTen(6) -> false', () => {
    expect(nearTen(6)).toBe(false)
  })

  it('nearTen(10) -> true', () => {
    expect(nearTen(10)).toBe(true)
  })

  it('nearTen(11) -> true', () => {
    expect(nearTen(11)).toBe(true)
  })

  it('nearTen(21) -> true', () => {
    expect(nearTen(21)).toBe(true)
  })

  it('nearTen(22) -> true', () => {
    expect(nearTen(22)).toBe(true)
  })

  it('nearTen(23) -> false', () => {
    expect(nearTen(23)).toBe(false)
  })

  it('nearTen(54) -> false', () => {
    expect(nearTen(54)).toBe(false)
  })

  it('nearTen(155) -> false', () => {
    expect(nearTen(155)).toBe(false)
  })

  it('nearTen(158) -> true', () => {
    expect(nearTen(158)).toBe(true)
  })

  it('nearTen(3) -> false', () => {
    expect(nearTen(3)).toBe(false)
  })

  it('nearTen(1) -> true', () => {
    expect(nearTen(1)).toBe(true)
  })

})
