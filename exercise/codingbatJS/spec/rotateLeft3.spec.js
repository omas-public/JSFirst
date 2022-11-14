/* eslint-env jest */
/* question

Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

rotateLeft3([1, 2, 3]) → [2, 3, 1]
rotateLeft3([5, 11, 9]) → [11, 9, 5]
rotateLeft3([7, 0, 0]) → [0, 0, 7]
*/


const rotateLeft3 = (nums) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('rotateLeft3(nums)', () => {

  it('rotateLeft3([1, 2, 3]) -> [2, 3, 1]', () => {
    expect(rotateLeft3([1, 2, 3])).toBe([2, 3, 1])
  })

  it('rotateLeft3([5, 11, 9]) -> [11, 9, 5]', () => {
    expect(rotateLeft3([5, 11, 9])).toBe([11, 9, 5])
  })

  it('rotateLeft3([7, 0, 0]) -> [0, 0, 7]', () => {
    expect(rotateLeft3([7, 0, 0])).toBe([0, 0, 7])
  })

  it('rotateLeft3([1, 2, 1]) -> [2, 1, 1]', () => {
    expect(rotateLeft3([1, 2, 1])).toBe([2, 1, 1])
  })

  it('rotateLeft3([0, 0, 1]) -> [0, 1, 0]', () => {
    expect(rotateLeft3([0, 0, 1])).toBe([0, 1, 0])
  })

})
