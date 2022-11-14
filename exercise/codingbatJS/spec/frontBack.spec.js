/* eslint-env jest */
/* question

Given a string, return a new string where the first and last chars have been exchanged.

文字列が与えられる。最初と最後の文字を交換した文字列を返せ。

frontBack("code") → "eodc"
frontBack("a") → "a"
frontBack("ab") → "ba"
*/

const frontBack = (str) => {
// String.slice and String[index]
// write code here

}

/* -- test code ---------------------------------------- */
describe('frontBack(str)', () => {
  it('frontBack("code") -> "eodc"', () => {
    expect(frontBack('code')).toBe('eodc')
  })

  it('frontBack("a") -> "a"', () => {
    expect(frontBack('a')).toBe('a')
  })

  it('frontBack("ab") -> "ba"', () => {
    expect(frontBack('ab')).toBe('ba')
  })

  it('frontBack("abc") -> "cba"', () => {
    expect(frontBack('abc')).toBe('cba')
  })

  it('frontBack("") -> ""', () => {
    expect(frontBack('')).toBe('')
  })

  it('frontBack("Chocolate") -> "ehocolatC"', () => {
    expect(frontBack('Chocolate')).toBe('ehocolatC')
  })

  it('frontBack("aavJ") -> "Java"', () => {
    expect(frontBack('aavJ')).toBe('Java')
  })

  it('frontBack("hello") -> "oellh"', () => {
    expect(frontBack('hello')).toBe('oellh')
  })
})
