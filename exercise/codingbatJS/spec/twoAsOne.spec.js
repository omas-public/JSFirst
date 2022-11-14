/* eslint-env jest */
/* question

Given three ints, a b c, return true if it is possible to add two of the ints to get the third.

twoAsOne(1, 2, 3) → true
twoAsOne(3, 1, 2) → true
twoAsOne(3, 2, 2) → false
*/


const twoAsOne = (a, b, c) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('twoAsOne(a, b, c)', () => {

  it('twoAsOne(1, 2, 3) -> true', () => {
    expect(twoAsOne(1, 2, 3)).toBe(true)
  })

  it('twoAsOne(3, 1, 2) -> true', () => {
    expect(twoAsOne(3, 1, 2)).toBe(true)
  })

  it('twoAsOne(3, 2, 2) -> false', () => {
    expect(twoAsOne(3, 2, 2)).toBe(false)
  })

  it('twoAsOne(2, 3, 1) -> true', () => {
    expect(twoAsOne(2, 3, 1)).toBe(true)
  })

  it('twoAsOne(5, 3, -2) -> true', () => {
    expect(twoAsOne(5, 3, -2)).toBe(true)
  })

  it('twoAsOne(5, 3, -3) -> false', () => {
    expect(twoAsOne(5, 3, -3)).toBe(false)
  })

  it('twoAsOne(2, 5, 3) -> true', () => {
    expect(twoAsOne(2, 5, 3)).toBe(true)
  })

  it('twoAsOne(9, 5, 5) -> false', () => {
    expect(twoAsOne(9, 5, 5)).toBe(false)
  })

  it('twoAsOne(9, 4, 5) -> true', () => {
    expect(twoAsOne(9, 4, 5)).toBe(true)
  })

  it('twoAsOne(5, 4, 9) -> true', () => {
    expect(twoAsOne(5, 4, 9)).toBe(true)
  })

  it('twoAsOne(3, 3, 0) -> true', () => {
    expect(twoAsOne(3, 3, 0)).toBe(true)
  })

  it('twoAsOne(3, 3, 2) -> false', () => {
    expect(twoAsOne(3, 3, 2)).toBe(false)
  })

})
