/* eslint-env jest */
/* question

Given two int values, return whichever value is larger. However if the two values have the same remainder when divided by 5, then the return the smaller value. However, in all cases, if the two values are the same, return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

maxMod5(2, 3) → 3
maxMod5(6, 2) → 6
maxMod5(3, 2) → 3
*/


const maxMod5 = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('maxMod5(a, b)', () => {

  it('maxMod5(2, 3) -> 3', () => {
    expect(maxMod5(2, 3)).toBe(3)
  })

  it('maxMod5(6, 2) -> 6', () => {
    expect(maxMod5(6, 2)).toBe(6)
  })

  it('maxMod5(3, 2) -> 3', () => {
    expect(maxMod5(3, 2)).toBe(3)
  })

  it('maxMod5(8, 12) -> 12', () => {
    expect(maxMod5(8, 12)).toBe(12)
  })

  it('maxMod5(7, 12) -> 7', () => {
    expect(maxMod5(7, 12)).toBe(7)
  })

  it('maxMod5(11, 6) -> 6', () => {
    expect(maxMod5(11, 6)).toBe(6)
  })

  it('maxMod5(2, 7) -> 2', () => {
    expect(maxMod5(2, 7)).toBe(2)
  })

  it('maxMod5(7, 7) -> 0', () => {
    expect(maxMod5(7, 7)).toBe(0)
  })

  it('maxMod5(9, 1) -> 9', () => {
    expect(maxMod5(9, 1)).toBe(9)
  })

  it('maxMod5(9, 14) -> 9', () => {
    expect(maxMod5(9, 14)).toBe(9)
  })

  it('maxMod5(1, 2) -> 2', () => {
    expect(maxMod5(1, 2)).toBe(2)
  })

})
