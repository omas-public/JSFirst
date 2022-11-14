/* eslint-env jest */
/* question

Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

swapEnds([1, 2, 3, 4]) → [4, 2, 3, 1]
swapEnds([1, 2, 3]) → [3, 2, 1]
swapEnds([8, 6, 7, 9, 5]) → [5, 6, 7, 9, 8]
*/


const swapEnds = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('swapEnds(nums)', () => {

  it('swapEnds([1, 2, 3, 4]) -> [4, 2, 3, 1]', () => {
    expect(swapEnds([1, 2, 3, 4])).toBe([4, 2, 3, 1])
  })

  it('swapEnds([1, 2, 3]) -> [3, 2, 1]', () => {
    expect(swapEnds([1, 2, 3])).toBe([3, 2, 1])
  })

  it('swapEnds([8, 6, 7, 9, 5]) -> [5, 6, 7, 9, 8]', () => {
    expect(swapEnds([8, 6, 7, 9, 5])).toBe([5, 6, 7, 9, 8])
  })

  it('swapEnds([3, 1, 4, 1, 5, 9]) -> [9, 1, 4, 1, 5, 3]', () => {
    expect(swapEnds([3, 1, 4, 1, 5, 9])).toBe([9, 1, 4, 1, 5, 3])
  })

  it('swapEnds([1, 2]) -> [2, 1]', () => {
    expect(swapEnds([1, 2])).toBe([2, 1])
  })

  it('swapEnds([1]) -> [1]', () => {
    expect(swapEnds([1])).toBe([1])
  })

})
