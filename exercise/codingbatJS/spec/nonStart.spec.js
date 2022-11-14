/* eslint-env jest */
/* question

Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

nonStart("Hello", "There") → "ellohere"
nonStart("java", "code") → "avaode"
nonStart("shotl", "java") → "hotlava"
*/


const nonStart = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('nonStart(a, b)', () => {

  it('nonStart("Hello", "There") -> "ellohere"', () => {
    expect(nonStart("Hello", "There")).toBe("ellohere")
  })

  it('nonStart("java", "code") -> "avaode"', () => {
    expect(nonStart("java", "code")).toBe("avaode")
  })

  it('nonStart("shotl", "java") -> "hotlava"', () => {
    expect(nonStart("shotl", "java")).toBe("hotlava")
  })

  it('nonStart("ab", "xy") -> "by"', () => {
    expect(nonStart("ab", "xy")).toBe("by")
  })

  it('nonStart("ab", "x") -> "b"', () => {
    expect(nonStart("ab", "x")).toBe("b")
  })

  it('nonStart("x", "ac") -> "c"', () => {
    expect(nonStart("x", "ac")).toBe("c")
  })

  it('nonStart("a", "x") -> ""', () => {
    expect(nonStart("a", "x")).toBe("")
  })

  it('nonStart("kit", "kat") -> "itat"', () => {
    expect(nonStart("kit", "kat")).toBe("itat")
  })

  it('nonStart("mart", "dart") -> "artart"', () => {
    expect(nonStart("mart", "dart")).toBe("artart")
  })

})
