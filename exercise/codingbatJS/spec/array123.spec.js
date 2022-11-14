/* eslint-env jest */
/* question

Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.

整数の配列が与えられる，配列のどこかに 1, 2, 3 がこの順番で現れたら true を返せ

array123([1, 1, 2, 3, 1]) → true
array123([1, 1, 2, 4, 1]) → false
array123([1, 1, 2, 1, 2, 3]) → true
*/

const array123 = (nums) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('array123(nums)', () => {
  it('array123([1, 1, 2, 3, 1]) -> true', () => {
    expect(array123([1, 1, 2, 3, 1])).toBe(true)
  })

  it('array123([1, 1, 2, 4, 1]) -> false', () => {
    expect(array123([1, 1, 2, 4, 1])).toBe(false)
  })

  it('array123([1, 1, 2, 1, 2, 3]) -> true', () => {
    expect(array123([1, 1, 2, 1, 2, 3])).toBe(true)
  })

  it('array123([1, 1, 2, 1, 2, 1]) -> false', () => {
    expect(array123([1, 1, 2, 1, 2, 1])).toBe(false)
  })

  it('array123([1, 2, 3, 1, 2, 3]) -> true', () => {
    expect(array123([1, 2, 3, 1, 2, 3])).toBe(true)
  })

  it('array123([1, 2, 3]) -> true', () => {
    expect(array123([1, 2, 3])).toBe(true)
  })

  it('array123([1, 1, 1]) -> false', () => {
    expect(array123([1, 1, 1])).toBe(false)
  })

  it('array123([1, 2]) -> false', () => {
    expect(array123([1, 2])).toBe(false)
  })

  it('array123([1]) -> false', () => {
    expect(array123([1])).toBe(false)
  })

  it('array123([]) -> false', () => {
    expect(array123([])).toBe(false)
  })
})
