/* eslint-env jest */
/* question

Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.

maxEnd3([1, 2, 3]) → [3, 3, 3]
maxEnd3([11, 5, 9]) → [11, 11, 11]
maxEnd3([2, 11, 3]) → [3, 3, 3]
*/


const maxEnd3 = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('maxEnd3(nums)', () => {

  it('maxEnd3([1, 2, 3]) -> [3, 3, 3]', () => {
    expect(maxEnd3([1, 2, 3])).toBe([3, 3, 3])
  })

  it('maxEnd3([11, 5, 9]) -> [11, 11, 11]', () => {
    expect(maxEnd3([11, 5, 9])).toBe([11, 11, 11])
  })

  it('maxEnd3([2, 11, 3]) -> [3, 3, 3]', () => {
    expect(maxEnd3([2, 11, 3])).toBe([3, 3, 3])
  })

  it('maxEnd3([11, 3, 3]) -> [11, 11, 11]', () => {
    expect(maxEnd3([11, 3, 3])).toBe([11, 11, 11])
  })

  it('maxEnd3([3, 11, 11]) -> [11, 11, 11]', () => {
    expect(maxEnd3([3, 11, 11])).toBe([11, 11, 11])
  })

  it('maxEnd3([2, 2, 2]) -> [2, 2, 2]', () => {
    expect(maxEnd3([2, 2, 2])).toBe([2, 2, 2])
  })

  it('maxEnd3([2, 11, 2]) -> [2, 2, 2]', () => {
    expect(maxEnd3([2, 11, 2])).toBe([2, 2, 2])
  })

  it('maxEnd3([0, 0, 1]) -> [1, 1, 1]', () => {
    expect(maxEnd3([0, 0, 1])).toBe([1, 1, 1])
  })

})
