/* eslint-env jest */
/* question

Given a string, return a version without both the first and last char of the string. The string may be any length, including 0.

withouEnd2("Hello") → "ell"
withouEnd2("abc") → "b"
withouEnd2("ab") → ""
*/


const withouEnd2 = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('withouEnd2(str)', () => {

  it('withouEnd2("Hello") -> "ell"', () => {
    expect(withouEnd2("Hello")).toBe("ell")
  })

  it('withouEnd2("abc") -> "b"', () => {
    expect(withouEnd2("abc")).toBe("b")
  })

  it('withouEnd2("ab") -> ""', () => {
    expect(withouEnd2("ab")).toBe("")
  })

  it('withouEnd2("a") -> ""', () => {
    expect(withouEnd2("a")).toBe("")
  })

  it('withouEnd2("") -> ""', () => {
    expect(withouEnd2("")).toBe("")
  })

  it('withouEnd2("coldy") -> "old"', () => {
    expect(withouEnd2("coldy")).toBe("old")
  })

  it('withouEnd2("java code") -> "ava cod"', () => {
    expect(withouEnd2("java code")).toBe("ava cod")
  })

})
