/* eslint-env jest */
/* question

Given a string, return a version without the first and last char, so "Hello" yields "ell". The string length will be at least 2.

withoutEnd("Hello") → "ell"
withoutEnd("java") → "av"
withoutEnd("coding") → "odin"
*/


const withoutEnd = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('withoutEnd(str)', () => {

  it('withoutEnd("Hello") -> "ell"', () => {
    expect(withoutEnd("Hello")).toBe("ell")
  })

  it('withoutEnd("java") -> "av"', () => {
    expect(withoutEnd("java")).toBe("av")
  })

  it('withoutEnd("coding") -> "odin"', () => {
    expect(withoutEnd("coding")).toBe("odin")
  })

  it('withoutEnd("code") -> "od"', () => {
    expect(withoutEnd("code")).toBe("od")
  })

  it('withoutEnd("ab") -> ""', () => {
    expect(withoutEnd("ab")).toBe("")
  })

  it('withoutEnd("Chocolate!") -> "hocolate"', () => {
    expect(withoutEnd("Chocolate!")).toBe("hocolate")
  })

  it('withoutEnd("kitten") -> "itte"', () => {
    expect(withoutEnd("kitten")).toBe("itte")
  })

  it('withoutEnd("woohoo") -> "ooho"', () => {
    expect(withoutEnd("woohoo")).toBe("ooho")
  })

})
