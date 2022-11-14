/* eslint-env jest */
/* question

Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0. Note: use .equals() to compare 2 strings.

hasBad("badxx") → true
hasBad("xbadxx") → true
hasBad("xxbadxx") → false
*/


const hasBad = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('hasBad(str)', () => {

  it('hasBad("badxx") -> true', () => {
    expect(hasBad("badxx")).toBe(true)
  })

  it('hasBad("xbadxx") -> true', () => {
    expect(hasBad("xbadxx")).toBe(true)
  })

  it('hasBad("xxbadxx") -> false', () => {
    expect(hasBad("xxbadxx")).toBe(false)
  })

  it('hasBad("code") -> false', () => {
    expect(hasBad("code")).toBe(false)
  })

  it('hasBad("bad") -> true', () => {
    expect(hasBad("bad")).toBe(true)
  })

  it('hasBad("ba") -> false', () => {
    expect(hasBad("ba")).toBe(false)
  })

  it('hasBad("xba") -> false', () => {
    expect(hasBad("xba")).toBe(false)
  })

  it('hasBad("xbad") -> true', () => {
    expect(hasBad("xbad")).toBe(true)
  })

  it('hasBad("") -> false', () => {
    expect(hasBad("")).toBe(false)
  })

  it('hasBad("badyy") -> true', () => {
    expect(hasBad("badyy")).toBe(true)
  })

})
