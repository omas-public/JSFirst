/* eslint-env jest */
/* question

Given an array of ints, return the sum of the first 2 elements in the array. If the array length is less than 2, just sum up the elements that exist, returning 0 if the array is length 0.

sum2([1, 2, 3]) → 3
sum2([1, 1]) → 2
sum2([1, 1, 1, 1]) → 2
*/


const sum2 = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('sum2(nums)', () => {

  it('sum2([1, 2, 3]) -> 3', () => {
    expect(sum2([1, 2, 3])).toBe(3)
  })

  it('sum2([1, 1]) -> 2', () => {
    expect(sum2([1, 1])).toBe(2)
  })

  it('sum2([1, 1, 1, 1]) -> 2', () => {
    expect(sum2([1, 1, 1, 1])).toBe(2)
  })

  it('sum2([1, 2]) -> 3', () => {
    expect(sum2([1, 2])).toBe(3)
  })

  it('sum2([1]) -> 1', () => {
    expect(sum2([1])).toBe(1)
  })

  it('sum2([]) -> 0', () => {
    expect(sum2([])).toBe(0)
  })

  it('sum2([4, 5, 6]) -> 9', () => {
    expect(sum2([4, 5, 6])).toBe(9)
  })

  it('sum2([4]) -> 4', () => {
    expect(sum2([4])).toBe(4)
  })

})
