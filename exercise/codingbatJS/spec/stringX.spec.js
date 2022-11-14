/* eslint-env jest */
/* question

Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.

文字列が与えられる，文字列からすべての文字’ "x" を削除した新しい文字列を返せ，但し最初と最後の"x" は除外する

stringX("xxHxix") → "xHix"
stringX("abxxxcd") → "abcd"
stringX("xabxxxcdx") → "xabcdx"
*/

const stringX = (str) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('stringX(str)', () => {
  it('stringX("xxHxix") -> "xHix"', () => {
    expect(stringX('xxHxix')).toBe('xHix')
  })

  it('stringX("abxxxcd") -> "abcd"', () => {
    expect(stringX('abxxxcd')).toBe('abcd')
  })

  it('stringX("xabxxxcdx") -> "xabcdx"', () => {
    expect(stringX('xabxxxcdx')).toBe('xabcdx')
  })

  it('stringX("xKittenx") -> "xKittenx"', () => {
    expect(stringX('xKittenx')).toBe('xKittenx')
  })

  it('stringX("Hello") -> "Hello"', () => {
    expect(stringX('Hello')).toBe('Hello')
  })

  it('stringX("xx") -> "xx"', () => {
    expect(stringX('xx')).toBe('xx')
  })

  it('stringX("x") -> "x"', () => {
    expect(stringX('x')).toBe('x')
  })

  it('stringX("") -> ""', () => {
    expect(stringX('')).toBe('')
  })
})
