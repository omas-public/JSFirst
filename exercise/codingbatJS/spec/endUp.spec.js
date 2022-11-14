/* eslint-env jest */
/* question

Given a string, return a new string where the last 3 chars are now in upper case. If the string has less than 3 chars, uppercase whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.

文字列が与えられる，最後の3文字を大文字にした新しい文字列を返せ。文字列が3文字以下の場合はすべて大文字にして返せ

endUp("Hello") → "HeLLO"
endUp("hi there") → "hi thERE"
endUp("hi") → "HI"
*/

const endUp = (str) => {
// use String.slice() and String.toUpperCase()
// write code here

}

/* -- test code ---------------------------------------- */
describe('endUp(str)', () => {
  it('endUp("Hello") -> "HeLLO"', () => {
    expect(endUp('Hello')).toBe('HeLLO')
  })

  it('endUp("hi there") -> "hi thERE"', () => {
    expect(endUp('hi there')).toBe('hi thERE')
  })

  it('endUp("hi") -> "HI"', () => {
    expect(endUp('hi')).toBe('HI')
  })

  it('endUp("woo hoo") -> "woo HOO"', () => {
    expect(endUp('woo hoo')).toBe('woo HOO')
  })

  it('endUp("xyz12") -> "xyZ12"', () => {
    expect(endUp('xyz12')).toBe('xyZ12')
  })

  it('endUp("x") -> "X"', () => {
    expect(endUp('x')).toBe('X')
  })

  it('endUp("") -> ""', () => {
    expect(endUp('')).toBe('')
  })
})
