/* eslint-env jest */
/* question

You have a red lottery ticket showing ints a, b, and c, each of which is 0, 1, or 2. If they are all the value 2, the result is 10. Otherwise if they are all the same, the result is 5. Otherwise so long as both b and c are different from a, the result is 1. Otherwise the result is 0.

redTicket(2, 2, 2) → 10
redTicket(2, 2, 1) → 0
redTicket(0, 0, 0) → 5
*/


const redTicket = (a, b, c) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('redTicket(a, b, c)', () => {

  it('redTicket(2, 2, 2) -> 10', () => {
    expect(redTicket(2, 2, 2)).toBe(10)
  })

  it('redTicket(2, 2, 1) -> 0', () => {
    expect(redTicket(2, 2, 1)).toBe(0)
  })

  it('redTicket(0, 0, 0) -> 5', () => {
    expect(redTicket(0, 0, 0)).toBe(5)
  })

  it('redTicket(2, 0, 0) -> 1', () => {
    expect(redTicket(2, 0, 0)).toBe(1)
  })

  it('redTicket(1, 1, 1) -> 5', () => {
    expect(redTicket(1, 1, 1)).toBe(5)
  })

  it('redTicket(1, 2, 1) -> 0', () => {
    expect(redTicket(1, 2, 1)).toBe(0)
  })

  it('redTicket(1, 2, 0) -> 1', () => {
    expect(redTicket(1, 2, 0)).toBe(1)
  })

  it('redTicket(0, 2, 2) -> 1', () => {
    expect(redTicket(0, 2, 2)).toBe(1)
  })

  it('redTicket(1, 2, 2) -> 1', () => {
    expect(redTicket(1, 2, 2)).toBe(1)
  })

  it('redTicket(0, 2, 0) -> 0', () => {
    expect(redTicket(0, 2, 0)).toBe(0)
  })

  it('redTicket(1, 1, 2) -> 0', () => {
    expect(redTicket(1, 1, 2)).toBe(0)
  })

})
