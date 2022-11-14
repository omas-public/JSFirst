/* eslint-env jest */
/* question

Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

atFirst("hello") → "he"
atFirst("hi") → "hi"
atFirst("h") → "h@"
*/


const atFirst = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('atFirst(str)', () => {

  it('atFirst("hello") -> "he"', () => {
    expect(atFirst("hello")).toBe("he")
  })

  it('atFirst("hi") -> "hi"', () => {
    expect(atFirst("hi")).toBe("hi")
  })

  it('atFirst("h") -> "h@"', () => {
    expect(atFirst("h")).toBe("h@")
  })

  it('atFirst("") -> "@@"', () => {
    expect(atFirst("")).toBe("@@")
  })

  it('atFirst("kitten") -> "ki"', () => {
    expect(atFirst("kitten")).toBe("ki")
  })

  it('atFirst("java") -> "ja"', () => {
    expect(atFirst("java")).toBe("ja")
  })

  it('atFirst("j") -> "j@"', () => {
    expect(atFirst("j")).toBe("j@")
  })

})
