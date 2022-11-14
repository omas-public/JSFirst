/* eslint-env jest */
/* question

Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

frontAgain("edited") → true
frontAgain("edit") → false
frontAgain("ed") → true
*/


const frontAgain = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('frontAgain(str)', () => {

  it('frontAgain("edited") -> true', () => {
    expect(frontAgain("edited")).toBe(true)
  })

  it('frontAgain("edit") -> false', () => {
    expect(frontAgain("edit")).toBe(false)
  })

  it('frontAgain("ed") -> true', () => {
    expect(frontAgain("ed")).toBe(true)
  })

  it('frontAgain("jj") -> true', () => {
    expect(frontAgain("jj")).toBe(true)
  })

  it('frontAgain("jjj") -> true', () => {
    expect(frontAgain("jjj")).toBe(true)
  })

  it('frontAgain("jjjj") -> true', () => {
    expect(frontAgain("jjjj")).toBe(true)
  })

  it('frontAgain("jjjk") -> false', () => {
    expect(frontAgain("jjjk")).toBe(false)
  })

  it('frontAgain("x") -> false', () => {
    expect(frontAgain("x")).toBe(false)
  })

  it('frontAgain("") -> false', () => {
    expect(frontAgain("")).toBe(false)
  })

  it('frontAgain("java") -> false', () => {
    expect(frontAgain("java")).toBe(false)
  })

  it('frontAgain("javaja") -> true', () => {
    expect(frontAgain("javaja")).toBe(true)
  })

})
