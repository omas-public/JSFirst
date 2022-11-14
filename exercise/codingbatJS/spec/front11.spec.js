/* eslint-env jest */
/* question

Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array.

front11([1, 2, 3], [7, 9, 8]) → [1, 7]
front11([1], [2]) → [1, 2]
front11([1, 7], []) → [1]
*/


const front11 = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('front11(a, b)', () => {

  it('front11([1, 2, 3], [7, 9, 8]) -> [1, 7]', () => {
    expect(front11([1, 2, 3], [7, 9, 8])).toBe([1, 7])
  })

  it('front11([1], [2]) -> [1, 2]', () => {
    expect(front11([1], [2])).toBe([1, 2])
  })

  it('front11([1, 7], []) -> [1]', () => {
    expect(front11([1, 7], [])).toBe([1])
  })

  it('front11([], [2, 8]) -> [2]', () => {
    expect(front11([], [2, 8])).toBe([2])
  })

  it('front11([], []) -> []', () => {
    expect(front11([], [])).toBe([])
  })

  it('front11([3], [1, 4, 1, 9]) -> [3, 1]', () => {
    expect(front11([3], [1, 4, 1, 9])).toBe([3, 1])
  })

  it('front11([1, 4, 1, 9], []) -> [1]', () => {
    expect(front11([1, 4, 1, 9], [])).toBe([1])
  })

})
