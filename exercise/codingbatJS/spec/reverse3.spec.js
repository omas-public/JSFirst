/* eslint-env jest */
/* question

Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

reverse3([1, 2, 3]) → [3, 2, 1]
reverse3([5, 11, 9]) → [9, 11, 5]
reverse3([7, 0, 0]) → [0, 0, 7]
*/


const reverse3 = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('reverse3(nums)', () => {

  it('reverse3([1, 2, 3]) -> [3, 2, 1]', () => {
    expect(reverse3([1, 2, 3])).toBe([3, 2, 1])
  })

  it('reverse3([5, 11, 9]) -> [9, 11, 5]', () => {
    expect(reverse3([5, 11, 9])).toBe([9, 11, 5])
  })

  it('reverse3([7, 0, 0]) -> [0, 0, 7]', () => {
    expect(reverse3([7, 0, 0])).toBe([0, 0, 7])
  })

  it('reverse3([2, 1, 2]) -> [2, 1, 2]', () => {
    expect(reverse3([2, 1, 2])).toBe([2, 1, 2])
  })

  it('reverse3([1, 2, 1]) -> [1, 2, 1]', () => {
    expect(reverse3([1, 2, 1])).toBe([1, 2, 1])
  })

  it('reverse3([2, 11, 3]) -> [3, 11, 2]', () => {
    expect(reverse3([2, 11, 3])).toBe([3, 11, 2])
  })

  it('reverse3([0, 6, 5]) -> [5, 6, 0]', () => {
    expect(reverse3([0, 6, 5])).toBe([5, 6, 0])
  })

  it('reverse3([7, 2, 3]) -> [3, 2, 7]', () => {
    expect(reverse3([7, 2, 3])).toBe([3, 2, 7])
  })

})
