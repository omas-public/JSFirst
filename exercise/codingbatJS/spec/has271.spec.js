/* eslint-env jest */
/* question

Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value, followed by the value plus 5, followed by the value minus 1. Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.

整数の配列が与えられる。2, 7, 1 のパターンが含まれる場合 true を返せ。
2番めの値が1番目より5つ大きくかつ3番目の値が1番目の値から1小さい値との差が2以内は可とする

has271([1, 2, 7, 1]) → true
has271([1, 2, 8, 1]) → false
has271([2, 7, 1]) → true
*/

const has271 = (nums) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('has271(nums)', () => {
  it('has271([1, 2, 7, 1]) -> true', () => {
    expect(has271([1, 2, 7, 1])).toBe(true)
  })

  it('has271([1, 2, 8, 1]) -> false', () => {
    expect(has271([1, 2, 8, 1])).toBe(false)
  })

  it('has271([2, 7, 1]) -> true', () => {
    expect(has271([2, 7, 1])).toBe(true)
  })

  it('has271([3, 8, 2]) -> true', () => {
    expect(has271([3, 8, 2])).toBe(true)
  })

  it('has271([2, 7, 3]) -> true', () => {
    expect(has271([2, 7, 3])).toBe(true)
  })

  it('has271([2, 7, 4]) -> false', () => {
    expect(has271([2, 7, 4])).toBe(false)
  })

  it('has271([2, 7, -1]) -> true', () => {
    expect(has271([2, 7, -1])).toBe(true)
  })

  it('has271([2, 7, -2]) -> false', () => {
    expect(has271([2, 7, -2])).toBe(false)
  })

  it('has271([4, 5, 3, 8, 0]) -> true', () => {
    expect(has271([4, 5, 3, 8, 0])).toBe(true)
  })

  it('has271([2, 7, 5, 10, 4]) -> true', () => {
    expect(has271([2, 7, 5, 10, 4])).toBe(true)
  })

  it('has271([2, 7, -2, 4, 9, 3]) -> true', () => {
    expect(has271([2, 7, -2, 4, 9, 3])).toBe(true)
  })

  it('has271([2, 7, 5, 10, 1]) -> false', () => {
    expect(has271([2, 7, 5, 10, 1])).toBe(false)
  })

  it('has271([2, 7, -2, 4, 10, 2]) -> false', () => {
    expect(has271([2, 7, -2, 4, 10, 2])).toBe(false)
  })

  it('has271([1, 1, 4, 9, 0]) -> false', () => {
    expect(has271([1, 1, 4, 9, 0])).toBe(false)
  })

  it('has271([1, 1, 4, 9, 4, 9, 2]) -> true', () => {
    expect(has271([1, 1, 4, 9, 4, 9, 2])).toBe(true)
  })
})
