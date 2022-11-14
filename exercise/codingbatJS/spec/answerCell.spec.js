/* eslint-env jest */
/* question

Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

answerCell(false, false, false) → true
answerCell(false, false, true) → false
answerCell(true, false, false) → false
*/


const answerCell = (isMorning, isMom, isAsleep) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('answerCell(isMorning, isMom, isAsleep)', () => {

  it('answerCell(false, false, false) -> true', () => {
    expect(answerCell(false, false, false)).toBe(true)
  })

  it('answerCell(false, false, true) -> false', () => {
    expect(answerCell(false, false, true)).toBe(false)
  })

  it('answerCell(true, false, false) -> false', () => {
    expect(answerCell(true, false, false)).toBe(false)
  })

  it('answerCell(true, true, false) -> true', () => {
    expect(answerCell(true, true, false)).toBe(true)
  })

  it('answerCell(false, true, false) -> true', () => {
    expect(answerCell(false, true, false)).toBe(true)
  })

  it('answerCell(true, true, true) -> false', () => {
    expect(answerCell(true, true, true)).toBe(false)
  })

})
