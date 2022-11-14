/* eslint-env jest */
/* question

Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

biggerTwo([1, 2], [3, 4]) → [3, 4]
biggerTwo([3, 4], [1, 2]) → [3, 4]
biggerTwo([1, 1], [1, 2]) → [1, 2]
*/


const biggerTwo = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('biggerTwo(a, b)', () => {

  it('biggerTwo([1, 2], [3, 4]) -> [3, 4]', () => {
    expect(biggerTwo([1, 2], [3, 4])).toBe([3, 4])
  })

  it('biggerTwo([3, 4], [1, 2]) -> [3, 4]', () => {
    expect(biggerTwo([3, 4], [1, 2])).toBe([3, 4])
  })

  it('biggerTwo([1, 1], [1, 2]) -> [1, 2]', () => {
    expect(biggerTwo([1, 1], [1, 2])).toBe([1, 2])
  })

  it('biggerTwo([2, 1], [1, 1]) -> [2, 1]', () => {
    expect(biggerTwo([2, 1], [1, 1])).toBe([2, 1])
  })

  it('biggerTwo([2, 2], [1, 3]) -> [2, 2]', () => {
    expect(biggerTwo([2, 2], [1, 3])).toBe([2, 2])
  })

  it('biggerTwo([1, 3], [2, 2]) -> [1, 3]', () => {
    expect(biggerTwo([1, 3], [2, 2])).toBe([1, 3])
  })

  it('biggerTwo([6, 7], [3, 1]) -> [6, 7]', () => {
    expect(biggerTwo([6, 7], [3, 1])).toBe([6, 7])
  })

})
