/* eslint-env jest */
/* question

You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.

greenTicket(1, 2, 3) → 0
greenTicket(2, 2, 2) → 20
greenTicket(1, 1, 2) → 10
*/


const greenTicket = (a, b, c) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('greenTicket(a, b, c)', () => {

  it('greenTicket(1, 2, 3) -> 0', () => {
    expect(greenTicket(1, 2, 3)).toBe(0)
  })

  it('greenTicket(2, 2, 2) -> 20', () => {
    expect(greenTicket(2, 2, 2)).toBe(20)
  })

  it('greenTicket(1, 1, 2) -> 10', () => {
    expect(greenTicket(1, 1, 2)).toBe(10)
  })

  it('greenTicket(2, 1, 1) -> 10', () => {
    expect(greenTicket(2, 1, 1)).toBe(10)
  })

  it('greenTicket(1, 2, 1) -> 10', () => {
    expect(greenTicket(1, 2, 1)).toBe(10)
  })

  it('greenTicket(3, 2, 1) -> 0', () => {
    expect(greenTicket(3, 2, 1)).toBe(0)
  })

  it('greenTicket(0, 0, 0) -> 20', () => {
    expect(greenTicket(0, 0, 0)).toBe(20)
  })

  it('greenTicket(2, 0, 0) -> 10', () => {
    expect(greenTicket(2, 0, 0)).toBe(10)
  })

  it('greenTicket(0, 9, 10) -> 0', () => {
    expect(greenTicket(0, 9, 10)).toBe(0)
  })

  it('greenTicket(0, 10, 0) -> 10', () => {
    expect(greenTicket(0, 10, 0)).toBe(10)
  })

  it('greenTicket(9, 9, 9) -> 20', () => {
    expect(greenTicket(9, 9, 9)).toBe(20)
  })

  it('greenTicket(9, 0, 9) -> 10', () => {
    expect(greenTicket(9, 0, 9)).toBe(10)
  })

})
