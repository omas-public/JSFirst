/* eslint-env jest */
/* question

Given an int array, return a new array with double the length where its last element is the same as the original array, and all the other elements are 0. The original array will be length 1 or more. Note: by default, a new int array contains all 0's.

makeLast([4, 5, 6]) → [0, 0, 0, 0, 0, 6]
makeLast([1, 2]) → [0, 0, 0, 2]
makeLast([3]) → [0, 3]
*/


const makeLast = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('makeLast(nums)', () => {

  it('makeLast([4, 5, 6]) -> [0, 0, 0, 0, 0, 6]', () => {
    expect(makeLast([4, 5, 6])).toBe([0, 0, 0, 0, 0, 6])
  })

  it('makeLast([1, 2]) -> [0, 0, 0, 2]', () => {
    expect(makeLast([1, 2])).toBe([0, 0, 0, 2])
  })

  it('makeLast([3]) -> [0, 3]', () => {
    expect(makeLast([3])).toBe([0, 3])
  })

  it('makeLast([0]) -> [0, 0]', () => {
    expect(makeLast([0])).toBe([0, 0])
  })

  it('makeLast([7, 7, 7]) -> [0, 0, 0, 0, 0, 7]', () => {
    expect(makeLast([7, 7, 7])).toBe([0, 0, 0, 0, 0, 7])
  })

  it('makeLast([3, 1, 4]) -> [0, 0, 0, 0, 0, 4]', () => {
    expect(makeLast([3, 1, 4])).toBe([0, 0, 0, 0, 0, 4])
  })

  it('makeLast([1, 2, 3, 4]) -> [0, 0, 0, 0, 0, 0, 0, 4]', () => {
    expect(makeLast([1, 2, 3, 4])).toBe([0, 0, 0, 0, 0, 0, 0, 4])
  })

  it('makeLast([1, 2, 3, 0]) -> [0, 0, 0, 0, 0, 0, 0, 0]', () => {
    expect(makeLast([1, 2, 3, 0])).toBe([0, 0, 0, 0, 0, 0, 0, 0])
  })

  it('makeLast([2, 4]) -> [0, 0, 0, 4]', () => {
    expect(makeLast([2, 4])).toBe([0, 0, 0, 4])
  })

})
