/* eslint-env jest */
/* question

Given an array of ints, return the number of 9's in the array.

整数の配列が与えられる，9がその配列にいくつ含まれているか数を返せ

arrayCount9([1, 2, 9]) → 1
arrayCount9([1, 9, 9]) → 2
arrayCount9([1, 9, 9, 3, 9]) → 3
*/

const arrayCount9 = (nums) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('arrayCount9(nums)', () => {
  it('arrayCount9([1, 2, 9]) -> 1', () => {
    expect(arrayCount9([1, 2, 9])).toBe(1)
  })

  it('arrayCount9([1, 9, 9]) -> 2', () => {
    expect(arrayCount9([1, 9, 9])).toBe(2)
  })

  it('arrayCount9([1, 9, 9, 3, 9]) -> 3', () => {
    expect(arrayCount9([1, 9, 9, 3, 9])).toBe(3)
  })

  it('arrayCount9([1, 2, 3]) -> 0', () => {
    expect(arrayCount9([1, 2, 3])).toBe(0)
  })

  it('arrayCount9([]) -> 0', () => {
    expect(arrayCount9([])).toBe(0)
  })

  it('arrayCount9([4, 2, 4, 3, 1]) -> 0', () => {
    expect(arrayCount9([4, 2, 4, 3, 1])).toBe(0)
  })

  it('arrayCount9([9, 2, 4, 3, 1]) -> 1', () => {
    expect(arrayCount9([9, 2, 4, 3, 1])).toBe(1)
  })
})
