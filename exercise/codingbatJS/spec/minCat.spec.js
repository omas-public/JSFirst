/* eslint-env jest */
/* question

Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

minCat("Hello", "Hi") → "loHi"
minCat("Hello", "java") → "ellojava"
minCat("java", "Hello") → "javaello"
*/


const minCat = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('minCat(a, b)', () => {

  it('minCat("Hello", "Hi") -> "loHi"', () => {
    expect(minCat("Hello", "Hi")).toBe("loHi")
  })

  it('minCat("Hello", "java") -> "ellojava"', () => {
    expect(minCat("Hello", "java")).toBe("ellojava")
  })

  it('minCat("java", "Hello") -> "javaello"', () => {
    expect(minCat("java", "Hello")).toBe("javaello")
  })

  it('minCat("abc", "x") -> "cx"', () => {
    expect(minCat("abc", "x")).toBe("cx")
  })

  it('minCat("x", "abc") -> "xc"', () => {
    expect(minCat("x", "abc")).toBe("xc")
  })

  it('minCat("abc", "") -> ""', () => {
    expect(minCat("abc", "")).toBe("")
  })

})
