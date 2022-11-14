/* eslint-env jest */
/* question

Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.

整数の配列が与えられる，最初の4つ目までの要素に9が含まれていたら true を返せ，配列の長さは4つ以内の場合もある

arrayFront9([1, 2, 9, 3, 4]) → true
arrayFront9([1, 2, 3, 4, 9]) → false
arrayFront9([1, 2, 3, 4, 5]) → false
*/

const arrayFront9 = (nums) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('arrayFront9(nums)', () => {
  it('arrayFront9([1, 2, 9, 3, 4]) -> true', () => {
    expect(arrayFront9([1, 2, 9, 3, 4])).toBe(true)
  })

  it('arrayFront9([1, 2, 3, 4, 9]) -> false', () => {
    expect(arrayFront9([1, 2, 3, 4, 9])).toBe(false)
  })

  it('arrayFront9([1, 2, 3, 4, 5]) -> false', () => {
    expect(arrayFront9([1, 2, 3, 4, 5])).toBe(false)
  })

  it('arrayFront9([9, 2, 3]) -> true', () => {
    expect(arrayFront9([9, 2, 3])).toBe(true)
  })

  it('arrayFront9([1, 9, 9]) -> true', () => {
    expect(arrayFront9([1, 9, 9])).toBe(true)
  })

  it('arrayFront9([1, 2, 3]) -> false', () => {
    expect(arrayFront9([1, 2, 3])).toBe(false)
  })

  it('arrayFront9([1, 9]) -> true', () => {
    expect(arrayFront9([1, 9])).toBe(true)
  })

  it('arrayFront9([5, 5]) -> false', () => {
    expect(arrayFront9([5, 5])).toBe(false)
  })

  it('arrayFront9([2]) -> false', () => {
    expect(arrayFront9([2])).toBe(false)
  })

  it('arrayFront9([9]) -> true', () => {
    expect(arrayFront9([9])).toBe(true)
  })

  it('arrayFront9([]) -> false', () => {
    expect(arrayFront9([])).toBe(false)
  })

  it('arrayFront9([3, 9, 2, 3, 3]) -> true', () => {
    expect(arrayFront9([3, 9, 2, 3, 3])).toBe(true)
  })
})
