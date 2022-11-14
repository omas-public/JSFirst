/* eslint-env jest */
/* question

Given an array of ints, return true if the array is length 1 or more, and the first element and the last element are equal.

sameFirstLast([1, 2, 3]) → false
sameFirstLast([1, 2, 3, 1]) → true
sameFirstLast([1, 2, 1]) → true
*/


const sameFirstLast = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('sameFirstLast(nums)', () => {

  it('sameFirstLast([1, 2, 3]) -> false', () => {
    expect(sameFirstLast([1, 2, 3])).toBe(false)
  })

  it('sameFirstLast([1, 2, 3, 1]) -> true', () => {
    expect(sameFirstLast([1, 2, 3, 1])).toBe(true)
  })

  it('sameFirstLast([1, 2, 1]) -> true', () => {
    expect(sameFirstLast([1, 2, 1])).toBe(true)
  })

  it('sameFirstLast([7]) -> true', () => {
    expect(sameFirstLast([7])).toBe(true)
  })

  it('sameFirstLast([]) -> false', () => {
    expect(sameFirstLast([])).toBe(false)
  })

  it('sameFirstLast([1, 2, 3, 4, 5, 1]) -> true', () => {
    expect(sameFirstLast([1, 2, 3, 4, 5, 1])).toBe(true)
  })

  it('sameFirstLast([1, 2, 3, 4, 5, 13]) -> false', () => {
    expect(sameFirstLast([1, 2, 3, 4, 5, 13])).toBe(false)
  })

  it('sameFirstLast([13, 2, 3, 4, 5, 13]) -> true', () => {
    expect(sameFirstLast([13, 2, 3, 4, 5, 13])).toBe(true)
  })

  it('sameFirstLast([7, 7]) -> true', () => {
    expect(sameFirstLast([7, 7])).toBe(true)
  })

})
