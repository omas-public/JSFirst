/* eslint-env jest */
/* question

Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

makeOutWord("<<>>", "Yay") → "<<Yay>>"
makeOutWord("<<>>", "WooHoo") → "<<WooHoo>>"
makeOutWord("[[]]", "word") → "[[word]]"
*/


const makeOutWord = (out, word) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('makeOutWord(out, word)', () => {

  it('makeOutWord("<<>>", "Yay") -> "<<Yay>>"', () => {
    expect(makeOutWord("<<>>", "Yay")).toBe("<<Yay>>")
  })

  it('makeOutWord("<<>>", "WooHoo") -> "<<WooHoo>>"', () => {
    expect(makeOutWord("<<>>", "WooHoo")).toBe("<<WooHoo>>")
  })

  it('makeOutWord("[[]]", "word") -> "[[word]]"', () => {
    expect(makeOutWord("[[]]", "word")).toBe("[[word]]")
  })

  it('makeOutWord("HHoo", "Hello") -> "HHHellooo"', () => {
    expect(makeOutWord("HHoo", "Hello")).toBe("HHHellooo")
  })

  it('makeOutWord("abyz", "YAY") -> "abYAYyz"', () => {
    expect(makeOutWord("abyz", "YAY")).toBe("abYAYyz")
  })

})
