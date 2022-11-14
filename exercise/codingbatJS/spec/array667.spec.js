/* eslint-env jest */
/* question

Given an array of ints, return the number of times that two 6's are next to each other in the array. Also count instances where the second "6" is actually a 7.

整数の配列が与えられる。2つの連続した6をカウントして返せ。但し2番目の6は7でもよい

array667([6, 6, 2]) → 1
array667([6, 6, 2, 6]) → 1
array667([6, 7, 2, 6]) → 1
*/

const array667 = (nums) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('array667(nums)', () => {
  it('array667([6, 6, 2]) -> 1', () => {
    expect(array667([6, 6, 2])).toBe(1)
  })

  it('array667([6, 6, 2, 6]) -> 1', () => {
    expect(array667([6, 6, 2, 6])).toBe(1)
  })

  it('array667([6, 7, 2, 6]) -> 1', () => {
    expect(array667([6, 7, 2, 6])).toBe(1)
  })

  it('array667([6, 6, 2, 6, 7]) -> 2', () => {
    expect(array667([6, 6, 2, 6, 7])).toBe(2)
  })

  it('array667([1, 6, 3]) -> 0', () => {
    expect(array667([1, 6, 3])).toBe(0)
  })

  it('array667([6, 1]) -> 0', () => {
    expect(array667([6, 1])).toBe(0)
  })

  it('array667([]) -> 0', () => {
    expect(array667([])).toBe(0)
  })

  it('array667([3, 6, 7, 6]) -> 1', () => {
    expect(array667([3, 6, 7, 6])).toBe(1)
  })

  it('array667([3, 6, 6, 7]) -> 2', () => {
    expect(array667([3, 6, 6, 7])).toBe(2)
  })

  it('array667([6, 3, 6, 6]) -> 1', () => {
    expect(array667([6, 3, 6, 6])).toBe(1)
  })

  it('array667([6, 7, 6, 6]) -> 2', () => {
    expect(array667([6, 7, 6, 6])).toBe(2)
  })

  it('array667([1, 2, 3, 5, 6]) -> 0', () => {
    expect(array667([1, 2, 3, 5, 6])).toBe(0)
  })

  it('array667([1, 2, 3, 6, 6]) -> 1', () => {
    expect(array667([1, 2, 3, 6, 6])).toBe(1)
  })
})
