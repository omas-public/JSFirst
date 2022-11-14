/* eslint-env jest */
/* question

Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2.

double23([2, 2]) → true
double23([3, 3]) → true
double23([2, 3]) → false
*/


const double23 = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('double23(nums)', () => {

  it('double23([2, 2]) -> true', () => {
    expect(double23([2, 2])).toBe(true)
  })

  it('double23([3, 3]) -> true', () => {
    expect(double23([3, 3])).toBe(true)
  })

  it('double23([2, 3]) -> false', () => {
    expect(double23([2, 3])).toBe(false)
  })

  it('double23([3, 2]) -> false', () => {
    expect(double23([3, 2])).toBe(false)
  })

  it('double23([4, 5]) -> false', () => {
    expect(double23([4, 5])).toBe(false)
  })

  it('double23([2]) -> false', () => {
    expect(double23([2])).toBe(false)
  })

  it('double23([3]) -> false', () => {
    expect(double23([3])).toBe(false)
  })

  it('double23([]) -> false', () => {
    expect(double23([])).toBe(false)
  })

  it('double23([3, 4]) -> false', () => {
    expect(double23([3, 4])).toBe(false)
  })

})
