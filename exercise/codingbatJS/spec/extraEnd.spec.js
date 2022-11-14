/* eslint-env jest */
/* question

Given a string, return a new string made of 3 copies of the last 2 chars of the original string. The string length will be at least 2.

extraEnd("Hello") → "lololo"
extraEnd("ab") → "ababab"
extraEnd("Hi") → "HiHiHi"
*/


const extraEnd = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('extraEnd(str)', () => {

  it('extraEnd("Hello") -> "lololo"', () => {
    expect(extraEnd("Hello")).toBe("lololo")
  })

  it('extraEnd("ab") -> "ababab"', () => {
    expect(extraEnd("ab")).toBe("ababab")
  })

  it('extraEnd("Hi") -> "HiHiHi"', () => {
    expect(extraEnd("Hi")).toBe("HiHiHi")
  })

  it('extraEnd("Candy") -> "dydydy"', () => {
    expect(extraEnd("Candy")).toBe("dydydy")
  })

  it('extraEnd("Code") -> "dedede"', () => {
    expect(extraEnd("Code")).toBe("dedede")
  })

})
