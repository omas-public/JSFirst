/* eslint-env jest */
/* question

Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present.

frontPiece([1, 2, 3]) → [1, 2]
frontPiece([1, 2]) → [1, 2]
frontPiece([1]) → [1]
*/


const frontPiece = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('frontPiece(nums)', () => {

  it('frontPiece([1, 2, 3]) -> [1, 2]', () => {
    expect(frontPiece([1, 2, 3])).toBe([1, 2])
  })

  it('frontPiece([1, 2]) -> [1, 2]', () => {
    expect(frontPiece([1, 2])).toBe([1, 2])
  })

  it('frontPiece([1]) -> [1]', () => {
    expect(frontPiece([1])).toBe([1])
  })

  it('frontPiece([]) -> []', () => {
    expect(frontPiece([])).toBe([])
  })

  it('frontPiece([6, 5, 0]) -> [6, 5]', () => {
    expect(frontPiece([6, 5, 0])).toBe([6, 5])
  })

  it('frontPiece([6, 5]) -> [6, 5]', () => {
    expect(frontPiece([6, 5])).toBe([6, 5])
  })

  it('frontPiece([3, 1, 4, 1, 5]) -> [3, 1]', () => {
    expect(frontPiece([3, 1, 4, 1, 5])).toBe([3, 1])
  })

  it('frontPiece([6]) -> [6]', () => {
    expect(frontPiece([6])).toBe([6])
  })

})
