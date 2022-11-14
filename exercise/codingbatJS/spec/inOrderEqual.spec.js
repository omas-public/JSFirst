/* eslint-env jest */
/* question

Given three ints, a b c, return true if they are in strict increasing order, such as 2 5 11, or 5 6 7, but not 6 5 7 or 5 5 7. However, with the exception that if "equalOk" is true, equality is allowed, such as 5 5 7 or 5 5 5.

inOrderEqual(2, 5, 11, false) → true
inOrderEqual(5, 7, 6, false) → false
inOrderEqual(5, 5, 7, true) → true
*/


const inOrderEqual = (a, b, c, equalOk) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('inOrderEqual(a, b, c, equalOk)', () => {

  it('inOrderEqual(2, 5, 11, false) -> true', () => {
    expect(inOrderEqual(2, 5, 11, false)).toBe(true)
  })

  it('inOrderEqual(5, 7, 6, false) -> false', () => {
    expect(inOrderEqual(5, 7, 6, false)).toBe(false)
  })

  it('inOrderEqual(5, 5, 7, true) -> true', () => {
    expect(inOrderEqual(5, 5, 7, true)).toBe(true)
  })

  it('inOrderEqual(5, 5, 7, false) -> false', () => {
    expect(inOrderEqual(5, 5, 7, false)).toBe(false)
  })

  it('inOrderEqual(2, 5, 4, false) -> false', () => {
    expect(inOrderEqual(2, 5, 4, false)).toBe(false)
  })

  it('inOrderEqual(3, 4, 3, false) -> false', () => {
    expect(inOrderEqual(3, 4, 3, false)).toBe(false)
  })

  it('inOrderEqual(3, 4, 4, false) -> false', () => {
    expect(inOrderEqual(3, 4, 4, false)).toBe(false)
  })

  it('inOrderEqual(3, 4, 3, true) -> false', () => {
    expect(inOrderEqual(3, 4, 3, true)).toBe(false)
  })

  it('inOrderEqual(3, 4, 4, true) -> true', () => {
    expect(inOrderEqual(3, 4, 4, true)).toBe(true)
  })

  it('inOrderEqual(1, 5, 5, true) -> true', () => {
    expect(inOrderEqual(1, 5, 5, true)).toBe(true)
  })

  it('inOrderEqual(5, 5, 5, true) -> true', () => {
    expect(inOrderEqual(5, 5, 5, true)).toBe(true)
  })

  it('inOrderEqual(2, 2, 1, true) -> false', () => {
    expect(inOrderEqual(2, 2, 1, true)).toBe(false)
  })

  it('inOrderEqual(9, 2, 2, true) -> false', () => {
    expect(inOrderEqual(9, 2, 2, true)).toBe(false)
  })

  it('inOrderEqual(0, 1, 0, true) -> false', () => {
    expect(inOrderEqual(0, 1, 0, true)).toBe(false)
  })

})
