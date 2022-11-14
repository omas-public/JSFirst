/* eslint-env jest */
/* question

Given 2 ints, a and b, return their sum. However, sums in the range 10..19 inclusive, are forbidden, so in that case just return 20.

sortaSum(3, 4) → 7
sortaSum(9, 4) → 20
sortaSum(10, 11) → 21
*/


const sortaSum = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('sortaSum(a, b)', () => {

  it('sortaSum(3, 4) -> 7', () => {
    expect(sortaSum(3, 4)).toBe(7)
  })

  it('sortaSum(9, 4) -> 20', () => {
    expect(sortaSum(9, 4)).toBe(20)
  })

  it('sortaSum(10, 11) -> 21', () => {
    expect(sortaSum(10, 11)).toBe(21)
  })

  it('sortaSum(12, -3) -> 9', () => {
    expect(sortaSum(12, -3)).toBe(9)
  })

  it('sortaSum(-3, 12) -> 9', () => {
    expect(sortaSum(-3, 12)).toBe(9)
  })

  it('sortaSum(4, 5) -> 9', () => {
    expect(sortaSum(4, 5)).toBe(9)
  })

  it('sortaSum(4, 6) -> 20', () => {
    expect(sortaSum(4, 6)).toBe(20)
  })

  it('sortaSum(14, 7) -> 21', () => {
    expect(sortaSum(14, 7)).toBe(21)
  })

  it('sortaSum(14, 6) -> 20', () => {
    expect(sortaSum(14, 6)).toBe(20)
  })

})
