/* eslint-env jest */
/* question

Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged.

withoutX("xHix") → "Hi"
withoutX("xHi") → "Hi"
withoutX("Hxix") → "Hxi"
*/


const withoutX = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('withoutX(str)', () => {

  it('withoutX("xHix") -> "Hi"', () => {
    expect(withoutX("xHix")).toBe("Hi")
  })

  it('withoutX("xHi") -> "Hi"', () => {
    expect(withoutX("xHi")).toBe("Hi")
  })

  it('withoutX("Hxix") -> "Hxi"', () => {
    expect(withoutX("Hxix")).toBe("Hxi")
  })

  it('withoutX("Hi") -> "Hi"', () => {
    expect(withoutX("Hi")).toBe("Hi")
  })

  it('withoutX("xxHi") -> "xHi"', () => {
    expect(withoutX("xxHi")).toBe("xHi")
  })

  it('withoutX("Hix") -> "Hi"', () => {
    expect(withoutX("Hix")).toBe("Hi")
  })

  it('withoutX("xaxbx") -> "axb"', () => {
    expect(withoutX("xaxbx")).toBe("axb")
  })

  it('withoutX("xx") -> ""', () => {
    expect(withoutX("xx")).toBe("")
  })

  it('withoutX("x") -> ""', () => {
    expect(withoutX("x")).toBe("")
  })

  it('withoutX("") -> ""', () => {
    expect(withoutX("")).toBe("")
  })

  it('withoutX("Hello") -> "Hello"', () => {
    expect(withoutX("Hello")).toBe("Hello")
  })

  it('withoutX("Hexllo") -> "Hexllo"', () => {
    expect(withoutX("Hexllo")).toBe("Hexllo")
  })

})
