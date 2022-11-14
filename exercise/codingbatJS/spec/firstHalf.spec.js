/* eslint-env jest */
/* question

Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".

firstHalf("WooHoo") → "Woo"
firstHalf("HelloThere") → "Hello"
firstHalf("abcdef") → "abc"
*/


const firstHalf = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('firstHalf(str)', () => {

  it('firstHalf("WooHoo") -> "Woo"', () => {
    expect(firstHalf("WooHoo")).toBe("Woo")
  })

  it('firstHalf("HelloThere") -> "Hello"', () => {
    expect(firstHalf("HelloThere")).toBe("Hello")
  })

  it('firstHalf("abcdef") -> "abc"', () => {
    expect(firstHalf("abcdef")).toBe("abc")
  })

  it('firstHalf("ab") -> "a"', () => {
    expect(firstHalf("ab")).toBe("a")
  })

  it('firstHalf("") -> ""', () => {
    expect(firstHalf("")).toBe("")
  })

  it('firstHalf("0123456789") -> "01234"', () => {
    expect(firstHalf("0123456789")).toBe("01234")
  })

  it('firstHalf("kitten") -> "kit"', () => {
    expect(firstHalf("kitten")).toBe("kit")
  })

})
