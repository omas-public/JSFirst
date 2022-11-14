/* eslint-env jest */
/* question

We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator  see Introduction to Mod

specialEleven(22) → true
specialEleven(23) → true
specialEleven(24) → false
*/


const specialEleven = (n) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('specialEleven(n)', () => {

  it('specialEleven(22) -> true', () => {
    expect(specialEleven(22)).toBe(true)
  })

  it('specialEleven(23) -> true', () => {
    expect(specialEleven(23)).toBe(true)
  })

  it('specialEleven(24) -> false', () => {
    expect(specialEleven(24)).toBe(false)
  })

  it('specialEleven(21) -> false', () => {
    expect(specialEleven(21)).toBe(false)
  })

  it('specialEleven(11) -> true', () => {
    expect(specialEleven(11)).toBe(true)
  })

  it('specialEleven(12) -> true', () => {
    expect(specialEleven(12)).toBe(true)
  })

  it('specialEleven(10) -> false', () => {
    expect(specialEleven(10)).toBe(false)
  })

  it('specialEleven(9) -> false', () => {
    expect(specialEleven(9)).toBe(false)
  })

  it('specialEleven(8) -> false', () => {
    expect(specialEleven(8)).toBe(false)
  })

  it('specialEleven(0) -> true', () => {
    expect(specialEleven(0)).toBe(true)
  })

  it('specialEleven(1) -> true', () => {
    expect(specialEleven(1)).toBe(true)
  })

  it('specialEleven(2) -> false', () => {
    expect(specialEleven(2)).toBe(false)
  })

  it('specialEleven(121) -> true', () => {
    expect(specialEleven(121)).toBe(true)
  })

  it('specialEleven(122) -> true', () => {
    expect(specialEleven(122)).toBe(true)
  })

  it('specialEleven(123) -> false', () => {
    expect(specialEleven(123)).toBe(false)
  })

  it('specialEleven(46) -> false', () => {
    expect(specialEleven(46)).toBe(false)
  })

  it('specialEleven(49) -> false', () => {
    expect(specialEleven(49)).toBe(false)
  })

  it('specialEleven(52) -> false', () => {
    expect(specialEleven(52)).toBe(false)
  })

  it('specialEleven(54) -> false', () => {
    expect(specialEleven(54)).toBe(false)
  })

  it('specialEleven(55) -> true', () => {
    expect(specialEleven(55)).toBe(true)
  })

})
