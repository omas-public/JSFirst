/* eslint-env jest */
/* question

Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

空ではない文字列と整数nが与えられる。インデックスnを削除した新しい文字列を返せ。nの値は文字列の正当なインデックスであるとする

missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"
*/

const missingChar = (str, n) => {
// use Array.splice()
// write code here

}

/* -- test code ---------------------------------------- */
describe('missingChar(str, n)', () => {
  it('missingChar("kitten", 1) -> "ktten"', () => {
    expect(missingChar('kitten', 1)).toBe('ktten')
  })

  it('missingChar("kitten", 0) -> "itten"', () => {
    expect(missingChar('kitten', 0)).toBe('itten')
  })

  it('missingChar("kitten", 4) -> "kittn"', () => {
    expect(missingChar('kitten', 4)).toBe('kittn')
  })

  it('missingChar("Hi", 0) -> "i"', () => {
    expect(missingChar('Hi', 0)).toBe('i')
  })

  it('missingChar("Hi", 1) -> "H"', () => {
    expect(missingChar('Hi', 1)).toBe('H')
  })

  it('missingChar("code", 0) -> "ode"', () => {
    expect(missingChar('code', 0)).toBe('ode')
  })

  it('missingChar("code", 1) -> "cde"', () => {
    expect(missingChar('code', 1)).toBe('cde')
  })

  it('missingChar("code", 2) -> "coe"', () => {
    expect(missingChar('code', 2)).toBe('coe')
  })

  it('missingChar("code", 3) -> "cod"', () => {
    expect(missingChar('code', 3)).toBe('cod')
  })

  it('missingChar("chocolate", 8) -> "chocolat"', () => {
    expect(missingChar('chocolate', 8)).toBe('chocolat')
  })
})
