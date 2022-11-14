/* eslint-env jest */
/* question

Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator see Introduction to Mod

old35(3) → true
old35(10) → true
old35(15) → false
*/


const old35 = (n) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('old35(n)', () => {

  it('old35(3) -> true', () => {
    expect(old35(3)).toBe(true)
  })

  it('old35(10) -> true', () => {
    expect(old35(10)).toBe(true)
  })

  it('old35(15) -> false', () => {
    expect(old35(15)).toBe(false)
  })

  it('old35(5) -> true', () => {
    expect(old35(5)).toBe(true)
  })

  it('old35(9) -> true', () => {
    expect(old35(9)).toBe(true)
  })

  it('old35(8) -> false', () => {
    expect(old35(8)).toBe(false)
  })

  it('old35(7) -> false', () => {
    expect(old35(7)).toBe(false)
  })

  it('old35(6) -> true', () => {
    expect(old35(6)).toBe(true)
  })

  it('old35(17) -> false', () => {
    expect(old35(17)).toBe(false)
  })

  it('old35(18) -> true', () => {
    expect(old35(18)).toBe(true)
  })

  it('old35(29) -> false', () => {
    expect(old35(29)).toBe(false)
  })

  it('old35(20) -> true', () => {
    expect(old35(20)).toBe(true)
  })

  it('old35(21) -> true', () => {
    expect(old35(21)).toBe(true)
  })

  it('old35(22) -> false', () => {
    expect(old35(22)).toBe(false)
  })

  it('old35(45) -> false', () => {
    expect(old35(45)).toBe(false)
  })

  it('old35(99) -> true', () => {
    expect(old35(99)).toBe(true)
  })

})
