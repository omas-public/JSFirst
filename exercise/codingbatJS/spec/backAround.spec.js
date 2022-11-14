/* eslint-env jest */
/* question

Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.

文字列が与えられる，最後の文字を取り元の文字の最初と最後に付け加えた新しい文字列を返せ，例えば "cat" -> "tcatt"。 元の文字列は一文字以上とする

backAround("cat") → "tcatt"
backAround("Hello") → "oHelloo"
backAround("a") → "aaa"
*/

const backAround = (str) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('backAround(str)', () => {
  it('backAround("cat") -> "tcatt"', () => {
    expect(backAround('cat')).toBe('tcatt')
  })

  it('backAround("Hello") -> "oHelloo"', () => {
    expect(backAround('Hello')).toBe('oHelloo')
  })

  it('backAround("a") -> "aaa"', () => {
    expect(backAround('a')).toBe('aaa')
  })

  it('backAround("abc") -> "cabcc"', () => {
    expect(backAround('abc')).toBe('cabcc')
  })

  it('backAround("read") -> "dreadd"', () => {
    expect(backAround('read')).toBe('dreadd')
  })

  it('backAround("boo") -> "obooo"', () => {
    expect(backAround('boo')).toBe('obooo')
  })
})
