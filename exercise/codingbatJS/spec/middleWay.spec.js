/* eslint-env jest */
/* question

Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

middleWay([1, 2, 3], [4, 5, 6]) → [2, 5]
middleWay([7, 7, 7], [3, 8, 0]) → [7, 8]
middleWay([5, 2, 9], [1, 4, 5]) → [2, 4]
*/


const middleWay = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('middleWay(a, b)', () => {

  it('middleWay([1, 2, 3], [4, 5, 6]) -> [2, 5]', () => {
    expect(middleWay([1, 2, 3], [4, 5, 6])).toBe([2, 5])
  })

  it('middleWay([7, 7, 7], [3, 8, 0]) -> [7, 8]', () => {
    expect(middleWay([7, 7, 7], [3, 8, 0])).toBe([7, 8])
  })

  it('middleWay([5, 2, 9], [1, 4, 5]) -> [2, 4]', () => {
    expect(middleWay([5, 2, 9], [1, 4, 5])).toBe([2, 4])
  })

  it('middleWay([1, 9, 7], [4, 8, 8]) -> [9, 8]', () => {
    expect(middleWay([1, 9, 7], [4, 8, 8])).toBe([9, 8])
  })

  it('middleWay([1, 2, 3], [3, 1, 4]) -> [2, 1]', () => {
    expect(middleWay([1, 2, 3], [3, 1, 4])).toBe([2, 1])
  })

  it('middleWay([1, 2, 3], [4, 1, 1]) -> [2, 1]', () => {
    expect(middleWay([1, 2, 3], [4, 1, 1])).toBe([2, 1])
  })

})
