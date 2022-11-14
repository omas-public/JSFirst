/* eslint-env jest */
/* question

Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

makeEnds([1, 2, 3]) → [1, 3]
makeEnds([1, 2, 3, 4]) → [1, 4]
makeEnds([7, 4, 6, 2]) → [7, 2]
*/


const makeEnds = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('makeEnds(nums)', () => {

  it('makeEnds([1, 2, 3]) -> [1, 3]', () => {
    expect(makeEnds([1, 2, 3])).toBe([1, 3])
  })

  it('makeEnds([1, 2, 3, 4]) -> [1, 4]', () => {
    expect(makeEnds([1, 2, 3, 4])).toBe([1, 4])
  })

  it('makeEnds([7, 4, 6, 2]) -> [7, 2]', () => {
    expect(makeEnds([7, 4, 6, 2])).toBe([7, 2])
  })

  it('makeEnds([1, 2, 2, 2, 2, 2, 2, 3]) -> [1, 3]', () => {
    expect(makeEnds([1, 2, 2, 2, 2, 2, 2, 3])).toBe([1, 3])
  })

  it('makeEnds([7, 4]) -> [7, 4]', () => {
    expect(makeEnds([7, 4])).toBe([7, 4])
  })

  it('makeEnds([7]) -> [7, 7]', () => {
    expect(makeEnds([7])).toBe([7, 7])
  })

  it('makeEnds([5, 2, 9]) -> [5, 9]', () => {
    expect(makeEnds([5, 2, 9])).toBe([5, 9])
  })

  it('makeEnds([2, 3, 4, 1]) -> [2, 1]', () => {
    expect(makeEnds([2, 3, 4, 1])).toBe([2, 1])
  })

})
