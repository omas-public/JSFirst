/* eslint-env jest */
/* question

You have a blue lottery ticket, with ints a, b, and c on it. This makes three pairs, which we'll call ab, bc, and ac. Consider the sum of the numbers in each pair. If any pair sums to exactly 10, the result is 10. Otherwise if the ab sum is exactly 10 more than either bc or ac sums, the result is 5. Otherwise the result is 0.

blueTicket(9, 1, 0) → 10
blueTicket(9, 2, 0) → 0
blueTicket(6, 1, 4) → 10
*/


const blueTicket = (a, b, c) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('blueTicket(a, b, c)', () => {

  it('blueTicket(9, 1, 0) -> 10', () => {
    expect(blueTicket(9, 1, 0)).toBe(10)
  })

  it('blueTicket(9, 2, 0) -> 0', () => {
    expect(blueTicket(9, 2, 0)).toBe(0)
  })

  it('blueTicket(6, 1, 4) -> 10', () => {
    expect(blueTicket(6, 1, 4)).toBe(10)
  })

  it('blueTicket(6, 1, 5) -> 0', () => {
    expect(blueTicket(6, 1, 5)).toBe(0)
  })

  it('blueTicket(10, 0, 0) -> 10', () => {
    expect(blueTicket(10, 0, 0)).toBe(10)
  })

  it('blueTicket(15, 0, 5) -> 5', () => {
    expect(blueTicket(15, 0, 5)).toBe(5)
  })

  it('blueTicket(5, 15, 5) -> 10', () => {
    expect(blueTicket(5, 15, 5)).toBe(10)
  })

  it('blueTicket(4, 11, 1) -> 5', () => {
    expect(blueTicket(4, 11, 1)).toBe(5)
  })

  it('blueTicket(13, 2, 3) -> 5', () => {
    expect(blueTicket(13, 2, 3)).toBe(5)
  })

  it('blueTicket(8, 4, 3) -> 0', () => {
    expect(blueTicket(8, 4, 3)).toBe(0)
  })

  it('blueTicket(8, 4, 2) -> 10', () => {
    expect(blueTicket(8, 4, 2)).toBe(10)
  })

  it('blueTicket(8, 4, 1) -> 0', () => {
    expect(blueTicket(8, 4, 1)).toBe(0)
  })

})
