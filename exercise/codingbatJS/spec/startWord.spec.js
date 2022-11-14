/* eslint-env jest */
/* question

Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string, except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". The word will be at least length 1.

startWord("hippo", "hi") → "hi"
startWord("hippo", "xip") → "hip"
startWord("hippo", "i") → "h"
*/


const startWord = (str, word) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('startWord(str, word)', () => {

  it('startWord("hippo", "hi") -> "hi"', () => {
    expect(startWord("hippo", "hi")).toBe("hi")
  })

  it('startWord("hippo", "xip") -> "hip"', () => {
    expect(startWord("hippo", "xip")).toBe("hip")
  })

  it('startWord("hippo", "i") -> "h"', () => {
    expect(startWord("hippo", "i")).toBe("h")
  })

  it('startWord("hippo", "ix") -> ""', () => {
    expect(startWord("hippo", "ix")).toBe("")
  })

  it('startWord("h", "ix") -> ""', () => {
    expect(startWord("h", "ix")).toBe("")
  })

  it('startWord("", "i") -> ""', () => {
    expect(startWord("", "i")).toBe("")
  })

  it('startWord("hip", "zi") -> "hi"', () => {
    expect(startWord("hip", "zi")).toBe("hi")
  })

  it('startWord("hip", "zip") -> "hip"', () => {
    expect(startWord("hip", "zip")).toBe("hip")
  })

  it('startWord("hip", "zig") -> ""', () => {
    expect(startWord("hip", "zig")).toBe("")
  })

  it('startWord("h", "z") -> "h"', () => {
    expect(startWord("h", "z")).toBe("h")
  })

  it('startWord("hippo", "xippo") -> "hippo"', () => {
    expect(startWord("hippo", "xippo")).toBe("hippo")
  })

  it('startWord("hippo", "xyz") -> ""', () => {
    expect(startWord("hippo", "xyz")).toBe("")
  })

  it('startWord("hippo", "hip") -> "hip"', () => {
    expect(startWord("hippo", "hip")).toBe("hip")
  })

  it('startWord("kitten", "cit") -> "kit"', () => {
    expect(startWord("kitten", "cit")).toBe("kit")
  })

  it('startWord("kit", "cit") -> "kit"', () => {
    expect(startWord("kit", "cit")).toBe("kit")
  })

})
