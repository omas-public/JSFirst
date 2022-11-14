/* eslint-env jest */
/* question

Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

comboString("Hello", "hi") → "hiHellohi"
comboString("hi", "Hello") → "hiHellohi"
comboString("aaa", "b") → "baaab"
*/


const comboString = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('comboString(a, b)', () => {

  it('comboString("Hello", "hi") -> "hiHellohi"', () => {
    expect(comboString("Hello", "hi")).toBe("hiHellohi")
  })

  it('comboString("hi", "Hello") -> "hiHellohi"', () => {
    expect(comboString("hi", "Hello")).toBe("hiHellohi")
  })

  it('comboString("aaa", "b") -> "baaab"', () => {
    expect(comboString("aaa", "b")).toBe("baaab")
  })

  it('comboString("b", "aaa") -> "baaab"', () => {
    expect(comboString("b", "aaa")).toBe("baaab")
  })

  it('comboString("aaa", "") -> "aaa"', () => {
    expect(comboString("aaa", "")).toBe("aaa")
  })

  it('comboString("", "bb") -> "bb"', () => {
    expect(comboString("", "bb")).toBe("bb")
  })

  it('comboString("aaa", "1234") -> "aaa1234aaa"', () => {
    expect(comboString("aaa", "1234")).toBe("aaa1234aaa")
  })

  it('comboString("aaa", "bb") -> "bbaaabb"', () => {
    expect(comboString("aaa", "bb")).toBe("bbaaabb")
  })

  it('comboString("a", "bb") -> "abba"', () => {
    expect(comboString("a", "bb")).toBe("abba")
  })

  it('comboString("bb", "a") -> "abba"', () => {
    expect(comboString("bb", "a")).toBe("abba")
  })

  it('comboString("xyz", "ab") -> "abxyzab"', () => {
    expect(comboString("xyz", "ab")).toBe("abxyzab")
  })

})
