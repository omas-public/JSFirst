/* eslint-env jest */
/* question

Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

firstTwo("Hello") → "He"
firstTwo("abcdefg") → "ab"
firstTwo("ab") → "ab"
*/


const firstTwo = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('firstTwo(str)', () => {

  it('firstTwo("Hello") -> "He"', () => {
    expect(firstTwo("Hello")).toBe("He")
  })

  it('firstTwo("abcdefg") -> "ab"', () => {
    expect(firstTwo("abcdefg")).toBe("ab")
  })

  it('firstTwo("ab") -> "ab"', () => {
    expect(firstTwo("ab")).toBe("ab")
  })

  it('firstTwo("a") -> "a"', () => {
    expect(firstTwo("a")).toBe("a")
  })

  it('firstTwo("") -> ""', () => {
    expect(firstTwo("")).toBe("")
  })

  it('firstTwo("Kitten") -> "Ki"', () => {
    expect(firstTwo("Kitten")).toBe("Ki")
  })

  it('firstTwo("hi") -> "hi"', () => {
    expect(firstTwo("hi")).toBe("hi")
  })

  it('firstTwo("hiya") -> "hi"', () => {
    expect(firstTwo("hiya")).toBe("hi")
  })

})
