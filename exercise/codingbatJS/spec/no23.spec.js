/* eslint-env jest */
/* question

Given an int array length 2, return true if it does not contain a 2 or 3.

no23([4, 5]) → true
no23([4, 2]) → false
no23([3, 5]) → false
*/


const no23 = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('no23(nums)', () => {

  it('no23([4, 5]) -> true', () => {
    expect(no23([4, 5])).toBe(true)
  })

  it('no23([4, 2]) -> false', () => {
    expect(no23([4, 2])).toBe(false)
  })

  it('no23([3, 5]) -> false', () => {
    expect(no23([3, 5])).toBe(false)
  })

  it('no23([1, 9]) -> true', () => {
    expect(no23([1, 9])).toBe(true)
  })

  it('no23([2, 9]) -> false', () => {
    expect(no23([2, 9])).toBe(false)
  })

  it('no23([1, 3]) -> false', () => {
    expect(no23([1, 3])).toBe(false)
  })

  it('no23([1, 1]) -> true', () => {
    expect(no23([1, 1])).toBe(true)
  })

  it('no23([2, 2]) -> false', () => {
    expect(no23([2, 2])).toBe(false)
  })

  it('no23([3, 3]) -> false', () => {
    expect(no23([3, 3])).toBe(false)
  })

  it('no23([7, 8]) -> true', () => {
    expect(no23([7, 8])).toBe(true)
  })

  it('no23([8, 7]) -> true', () => {
    expect(no23([8, 7])).toBe(true)
  })

})
