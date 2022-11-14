/* eslint-env jest */
/* question

Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

middleTwo("string") → "ri"
middleTwo("code") → "od"
middleTwo("Practice") → "ct"
*/


const middleTwo = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('middleTwo(str)', () => {

  it('middleTwo("string") -> "ri"', () => {
    expect(middleTwo("string")).toBe("ri")
  })

  it('middleTwo("code") -> "od"', () => {
    expect(middleTwo("code")).toBe("od")
  })

  it('middleTwo("Practice") -> "ct"', () => {
    expect(middleTwo("Practice")).toBe("ct")
  })

  it('middleTwo("ab") -> "ab"', () => {
    expect(middleTwo("ab")).toBe("ab")
  })

  it('middleTwo("0123456789") -> "45"', () => {
    expect(middleTwo("0123456789")).toBe("45")
  })

})
