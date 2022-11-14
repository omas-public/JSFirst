/* eslint-env jest */
/* question

Start with 2 int arrays, a and b, of any length. Return how many of the arrays have 1 as their first element.

start1([1, 2, 3], [1, 3]) → 2
start1([7, 2, 3], [1]) → 1
start1([1, 2], []) → 1
*/


const start1 = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('start1(a, b)', () => {

  it('start1([1, 2, 3], [1, 3]) -> 2', () => {
    expect(start1([1, 2, 3], [1, 3])).toBe(2)
  })

  it('start1([7, 2, 3], [1]) -> 1', () => {
    expect(start1([7, 2, 3], [1])).toBe(1)
  })

  it('start1([1, 2], []) -> 1', () => {
    expect(start1([1, 2], [])).toBe(1)
  })

  it('start1([], [1, 2]) -> 1', () => {
    expect(start1([], [1, 2])).toBe(1)
  })

  it('start1([7], []) -> 0', () => {
    expect(start1([7], [])).toBe(0)
  })

  it('start1([7], [1]) -> 1', () => {
    expect(start1([7], [1])).toBe(1)
  })

  it('start1([1], [1]) -> 2', () => {
    expect(start1([1], [1])).toBe(2)
  })

  it('start1([7], [8]) -> 0', () => {
    expect(start1([7], [8])).toBe(0)
  })

  it('start1([], []) -> 0', () => {
    expect(start1([], [])).toBe(0)
  })

  it('start1([1, 3], [1]) -> 2', () => {
    expect(start1([1, 3], [1])).toBe(2)
  })

})
