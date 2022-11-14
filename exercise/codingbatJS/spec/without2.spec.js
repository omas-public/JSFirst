/* eslint-env jest */
/* question

Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

without2("HelloHe") → "lloHe"
without2("HelloHi") → "HelloHi"
without2("Hi") → ""
*/


const without2 = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('without2(str)', () => {

  it('without2("HelloHe") -> "lloHe"', () => {
    expect(without2("HelloHe")).toBe("lloHe")
  })

  it('without2("HelloHi") -> "HelloHi"', () => {
    expect(without2("HelloHi")).toBe("HelloHi")
  })

  it('without2("Hi") -> ""', () => {
    expect(without2("Hi")).toBe("")
  })

  it('without2("Chocolate") -> "Chocolate"', () => {
    expect(without2("Chocolate")).toBe("Chocolate")
  })

  it('without2("xxx") -> "x"', () => {
    expect(without2("xxx")).toBe("x")
  })

  it('without2("xx") -> ""', () => {
    expect(without2("xx")).toBe("")
  })

  it('without2("x") -> "x"', () => {
    expect(without2("x")).toBe("x")
  })

  it('without2("") -> ""', () => {
    expect(without2("")).toBe("")
  })

  it('without2("Fruits") -> "Fruits"', () => {
    expect(without2("Fruits")).toBe("Fruits")
  })

})
