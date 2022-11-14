/* eslint-env jest */
/* question

Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array. Return true if the array does not contain any triples.

整数の配列が与えられる，’triple’ とは 3回連続で同じ値が続くことをいう。triple’ がこの配列に含まれない場合は true を返せ

noTriples([1, 1, 2, 2, 1]) → true
noTriples([1, 1, 2, 2, 2, 1]) → false
noTriples([1, 1, 1, 2, 2, 2, 1]) → false
*/

const noTriples = (nums) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('noTriples(nums)', () => {
  it('noTriples([1, 1, 2, 2, 1]) -> true', () => {
    expect(noTriples([1, 1, 2, 2, 1])).toBe(true)
  })

  it('noTriples([1, 1, 2, 2, 2, 1]) -> false', () => {
    expect(noTriples([1, 1, 2, 2, 2, 1])).toBe(false)
  })

  it('noTriples([1, 1, 1, 2, 2, 2, 1]) -> false', () => {
    expect(noTriples([1, 1, 1, 2, 2, 2, 1])).toBe(false)
  })

  it('noTriples([1, 1, 2, 2, 1, 2, 1]) -> true', () => {
    expect(noTriples([1, 1, 2, 2, 1, 2, 1])).toBe(true)
  })

  it('noTriples([1, 2, 1]) -> true', () => {
    expect(noTriples([1, 2, 1])).toBe(true)
  })

  it('noTriples([1, 1, 1]) -> false', () => {
    expect(noTriples([1, 1, 1])).toBe(false)
  })

  it('noTriples([1, 1]) -> true', () => {
    expect(noTriples([1, 1])).toBe(true)
  })

  it('noTriples([1]) -> true', () => {
    expect(noTriples([1])).toBe(true)
  })

  it('noTriples([]) -> true', () => {
    expect(noTriples([])).toBe(true)
  })
})
