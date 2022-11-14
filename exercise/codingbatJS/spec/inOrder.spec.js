/* eslint-env jest */
/* question

Given three ints, a b c, return true if b is greater than a, and c is greater than b. However, with the exception that if "bOk" is true, b does not need to be greater than a.

inOrder(1, 2, 4, false) → true
inOrder(1, 2, 1, false) → false
inOrder(1, 1, 2, true) → true
*/


const inOrder = (a, b, c, bOk) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('inOrder(a, b, c, bOk)', () => {

  it('inOrder(1, 2, 4, false) -> true', () => {
    expect(inOrder(1, 2, 4, false)).toBe(true)
  })

  it('inOrder(1, 2, 1, false) -> false', () => {
    expect(inOrder(1, 2, 1, false)).toBe(false)
  })

  it('inOrder(1, 1, 2, true) -> true', () => {
    expect(inOrder(1, 1, 2, true)).toBe(true)
  })

  it('inOrder(3, 2, 4, false) -> false', () => {
    expect(inOrder(3, 2, 4, false)).toBe(false)
  })

  it('inOrder(2, 3, 4, false) -> true', () => {
    expect(inOrder(2, 3, 4, false)).toBe(true)
  })

  it('inOrder(3, 2, 4, true) -> true', () => {
    expect(inOrder(3, 2, 4, true)).toBe(true)
  })

  it('inOrder(4, 2, 2, true) -> false', () => {
    expect(inOrder(4, 2, 2, true)).toBe(false)
  })

  it('inOrder(4, 5, 2, true) -> false', () => {
    expect(inOrder(4, 5, 2, true)).toBe(false)
  })

  it('inOrder(2, 4, 6, true) -> true', () => {
    expect(inOrder(2, 4, 6, true)).toBe(true)
  })

  it('inOrder(7, 9, 10, false) -> true', () => {
    expect(inOrder(7, 9, 10, false)).toBe(true)
  })

  it('inOrder(7, 5, 6, true) -> true', () => {
    expect(inOrder(7, 5, 6, true)).toBe(true)
  })

  it('inOrder(7, 5, 4, true) -> false', () => {
    expect(inOrder(7, 5, 4, true)).toBe(false)
  })

})
