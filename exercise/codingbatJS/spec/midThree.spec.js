/* eslint-env jest */
/* question

Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. The array length will be at least 3.

midThree([1, 2, 3, 4, 5]) → [2, 3, 4]
midThree([8, 6, 7, 5, 3, 0, 9]) → [7, 5, 3]
midThree([1, 2, 3]) → [1, 2, 3]
*/


const midThree = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('midThree(nums)', () => {

  it('midThree([1, 2, 3, 4, 5]) -> [2, 3, 4]', () => {
    expect(midThree([1, 2, 3, 4, 5])).toBe([2, 3, 4])
  })

  it('midThree([8, 6, 7, 5, 3, 0, 9]) -> [7, 5, 3]', () => {
    expect(midThree([8, 6, 7, 5, 3, 0, 9])).toBe([7, 5, 3])
  })

  it('midThree([1, 2, 3]) -> [1, 2, 3]', () => {
    expect(midThree([1, 2, 3])).toBe([1, 2, 3])
  })

})
