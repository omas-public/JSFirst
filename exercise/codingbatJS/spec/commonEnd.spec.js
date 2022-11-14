/* eslint-env jest */
/* question

Given 2 arrays of ints, a and b, return true if they have the same first element or they have the same last element. Both arrays will be length 1 or more.

commonEnd([1, 2, 3], [7, 3]) → true
commonEnd([1, 2, 3], [7, 3, 2]) → false
commonEnd([1, 2, 3], [1, 3]) → true
*/


const commonEnd = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('commonEnd(a, b)', () => {

  it('commonEnd([1, 2, 3], [7, 3]) -> true', () => {
    expect(commonEnd([1, 2, 3], [7, 3])).toBe(true)
  })

  it('commonEnd([1, 2, 3], [7, 3, 2]) -> false', () => {
    expect(commonEnd([1, 2, 3], [7, 3, 2])).toBe(false)
  })

  it('commonEnd([1, 2, 3], [1, 3]) -> true', () => {
    expect(commonEnd([1, 2, 3], [1, 3])).toBe(true)
  })

  it('commonEnd([1, 2, 3], [1]) -> true', () => {
    expect(commonEnd([1, 2, 3], [1])).toBe(true)
  })

  it('commonEnd([1, 2, 3], [2]) -> false', () => {
    expect(commonEnd([1, 2, 3], [2])).toBe(false)
  })

})
