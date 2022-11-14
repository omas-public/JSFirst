/* eslint-env jest */
/* question

Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

lastChars("last", "chars") → "ls"
lastChars("yo", "java") → "ya"
lastChars("hi", "") → "h@"
*/


const lastChars = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('lastChars(a, b)', () => {

  it('lastChars("last", "chars") -> "ls"', () => {
    expect(lastChars("last", "chars")).toBe("ls")
  })

  it('lastChars("yo", "java") -> "ya"', () => {
    expect(lastChars("yo", "java")).toBe("ya")
  })

  it('lastChars("hi", "") -> "h@"', () => {
    expect(lastChars("hi", "")).toBe("h@")
  })

  it('lastChars("", "hello") -> "@o"', () => {
    expect(lastChars("", "hello")).toBe("@o")
  })

  it('lastChars("", "") -> "@@"', () => {
    expect(lastChars("", "")).toBe("@@")
  })

  it('lastChars("kitten", "hi") -> "ki"', () => {
    expect(lastChars("kitten", "hi")).toBe("ki")
  })

  it('lastChars("k", "zip") -> "kp"', () => {
    expect(lastChars("k", "zip")).toBe("kp")
  })

  it('lastChars("kitten", "") -> "k@"', () => {
    expect(lastChars("kitten", "")).toBe("k@")
  })

  it('lastChars("kitten", "zip") -> "kp"', () => {
    expect(lastChars("kitten", "zip")).toBe("kp")
  })

})
