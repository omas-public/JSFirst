/* eslint-env jest */
/* question

Given an array of ints length 3, return the sum of all the elements.

sum3([1, 2, 3]) → 6
sum3([5, 11, 2]) → 18
sum3([7, 0, 0]) → 7
*/


const sum3 = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('sum3(nums)', () => {

  it('sum3([1, 2, 3]) -> 6', () => {
    expect(sum3([1, 2, 3])).toBe(6)
  })

  it('sum3([5, 11, 2]) -> 18', () => {
    expect(sum3([5, 11, 2])).toBe(18)
  })

  it('sum3([7, 0, 0]) -> 7', () => {
    expect(sum3([7, 0, 0])).toBe(7)
  })

  it('sum3([1, 2, 1]) -> 4', () => {
    expect(sum3([1, 2, 1])).toBe(4)
  })

  it('sum3([1, 1, 1]) -> 3', () => {
    expect(sum3([1, 1, 1])).toBe(3)
  })

  it('sum3([2, 7, 2]) -> 11', () => {
    expect(sum3([2, 7, 2])).toBe(11)
  })

})
