/* eslint-env jest */
/* question

You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday  on that day, your speed can be 5 higher in all cases.

caughtSpeeding(60, false) → 0
caughtSpeeding(65, false) → 1
caughtSpeeding(65, true) → 0
*/


const caughtSpeeding = (speed, isBirthday) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('caughtSpeeding(speed, isBirthday)', () => {

  it('caughtSpeeding(60, false) -> 0', () => {
    expect(caughtSpeeding(60, false)).toBe(0)
  })

  it('caughtSpeeding(65, false) -> 1', () => {
    expect(caughtSpeeding(65, false)).toBe(1)
  })

  it('caughtSpeeding(65, true) -> 0', () => {
    expect(caughtSpeeding(65, true)).toBe(0)
  })

  it('caughtSpeeding(80, false) -> 1', () => {
    expect(caughtSpeeding(80, false)).toBe(1)
  })

  it('caughtSpeeding(85, false) -> 2', () => {
    expect(caughtSpeeding(85, false)).toBe(2)
  })

  it('caughtSpeeding(85, true) -> 1', () => {
    expect(caughtSpeeding(85, true)).toBe(1)
  })

  it('caughtSpeeding(70, false) -> 1', () => {
    expect(caughtSpeeding(70, false)).toBe(1)
  })

  it('caughtSpeeding(75, false) -> 1', () => {
    expect(caughtSpeeding(75, false)).toBe(1)
  })

  it('caughtSpeeding(75, true) -> 1', () => {
    expect(caughtSpeeding(75, true)).toBe(1)
  })

  it('caughtSpeeding(40, false) -> 0', () => {
    expect(caughtSpeeding(40, false)).toBe(0)
  })

  it('caughtSpeeding(40, true) -> 0', () => {
    expect(caughtSpeeding(40, true)).toBe(0)
  })

  it('caughtSpeeding(90, false) -> 2', () => {
    expect(caughtSpeeding(90, false)).toBe(2)
  })

})
