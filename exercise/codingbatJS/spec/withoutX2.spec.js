/* eslint-env jest */
/* question

Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

withoutX2("xHi") → "Hi"
withoutX2("Hxi") → "Hi"
withoutX2("Hi") → "Hi"
*/


const withoutX2 = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('withoutX2(str)', () => {

  it('withoutX2("xHi") -> "Hi"', () => {
    expect(withoutX2("xHi")).toBe("Hi")
  })

  it('withoutX2("Hxi") -> "Hi"', () => {
    expect(withoutX2("Hxi")).toBe("Hi")
  })

  it('withoutX2("Hi") -> "Hi"', () => {
    expect(withoutX2("Hi")).toBe("Hi")
  })

  it('withoutX2("xxHi") -> "Hi"', () => {
    expect(withoutX2("xxHi")).toBe("Hi")
  })

  it('withoutX2("Hix") -> "Hix"', () => {
    expect(withoutX2("Hix")).toBe("Hix")
  })

  it('withoutX2("xaxb") -> "axb"', () => {
    expect(withoutX2("xaxb")).toBe("axb")
  })

  it('withoutX2("xx") -> ""', () => {
    expect(withoutX2("xx")).toBe("")
  })

  it('withoutX2("x") -> ""', () => {
    expect(withoutX2("x")).toBe("")
  })

  it('withoutX2("") -> ""', () => {
    expect(withoutX2("")).toBe("")
  })

  it('withoutX2("Hello") -> "Hello"', () => {
    expect(withoutX2("Hello")).toBe("Hello")
  })

  it('withoutX2("Hexllo") -> "Hexllo"', () => {
    expect(withoutX2("Hexllo")).toBe("Hexllo")
  })

  it('withoutX2("xHxllo") -> "Hxllo"', () => {
    expect(withoutX2("xHxllo")).toBe("Hxllo")
  })

})
