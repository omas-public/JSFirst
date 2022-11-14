/* eslint-env jest */
/* question

We'll say that a 1 immediately followed by a 3 in an array is an "unlucky" 1. Return true if the given array contains an unlucky 1 in the first 2 or last 2 positions in the array.

unlucky1([1, 3, 4, 5]) → true
unlucky1([2, 1, 3, 4, 5]) → true
unlucky1([1, 1, 1]) → false
*/


const unlucky1 = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('unlucky1(nums)', () => {

  it('unlucky1([1, 3, 4, 5]) -> true', () => {
    expect(unlucky1([1, 3, 4, 5])).toBe(true)
  })

  it('unlucky1([2, 1, 3, 4, 5]) -> true', () => {
    expect(unlucky1([2, 1, 3, 4, 5])).toBe(true)
  })

  it('unlucky1([1, 1, 1]) -> false', () => {
    expect(unlucky1([1, 1, 1])).toBe(false)
  })

  it('unlucky1([1, 3, 1]) -> true', () => {
    expect(unlucky1([1, 3, 1])).toBe(true)
  })

  it('unlucky1([1, 1, 3]) -> true', () => {
    expect(unlucky1([1, 1, 3])).toBe(true)
  })

  it('unlucky1([1, 2, 3]) -> false', () => {
    expect(unlucky1([1, 2, 3])).toBe(false)
  })

  it('unlucky1([3, 3, 3]) -> false', () => {
    expect(unlucky1([3, 3, 3])).toBe(false)
  })

  it('unlucky1([1, 3]) -> true', () => {
    expect(unlucky1([1, 3])).toBe(true)
  })

  it('unlucky1([1, 4]) -> false', () => {
    expect(unlucky1([1, 4])).toBe(false)
  })

  it('unlucky1([1]) -> false', () => {
    expect(unlucky1([1])).toBe(false)
  })

  it('unlucky1([]) -> false', () => {
    expect(unlucky1([])).toBe(false)
  })

  it('unlucky1([1, 1, 1, 3, 1]) -> false', () => {
    expect(unlucky1([1, 1, 1, 3, 1])).toBe(false)
  })

  it('unlucky1([1, 1, 3, 1, 1]) -> true', () => {
    expect(unlucky1([1, 1, 3, 1, 1])).toBe(true)
  })

  it('unlucky1([1, 1, 1, 1, 3]) -> true', () => {
    expect(unlucky1([1, 1, 1, 1, 3])).toBe(true)
  })

  it('unlucky1([1, 4, 1, 5]) -> false', () => {
    expect(unlucky1([1, 4, 1, 5])).toBe(false)
  })

  it('unlucky1([1, 1, 2, 3]) -> false', () => {
    expect(unlucky1([1, 1, 2, 3])).toBe(false)
  })

  it('unlucky1([2, 3, 2, 1]) -> false', () => {
    expect(unlucky1([2, 3, 2, 1])).toBe(false)
  })

  it('unlucky1([2, 3, 1, 3]) -> true', () => {
    expect(unlucky1([2, 3, 1, 3])).toBe(true)
  })

  it('unlucky1([1, 2, 3, 4, 1, 3]) -> true', () => {
    expect(unlucky1([1, 2, 3, 4, 1, 3])).toBe(true)
  })

})
