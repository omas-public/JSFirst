/* eslint-env jest */
/* question

Given 2 strings, a and b, return the number of the positions where they contain the same length 2 substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in the same place in both strings.

2つの文字列 a, b が与えられる，同じ場所にあり同じ値の2文字の部分文字をカウントして返せ

stringMatch("xxcaazz", "xxbaaz") → 3
stringMatch("abc", "abc") → 2
stringMatch("abc", "axc") → 0
*/

const stringMatch = (a, b) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('stringMatch(a, b)', () => {
  it('stringMatch("xxcaazz", "xxbaaz") -> 3', () => {
    expect(stringMatch('xxcaazz', 'xxbaaz')).toBe(3)
  })

  it('stringMatch("abc", "abc") -> 2', () => {
    expect(stringMatch('abc', 'abc')).toBe(2)
  })

  it('stringMatch("abc", "axc") -> 0', () => {
    expect(stringMatch('abc', 'axc')).toBe(0)
  })

  it('stringMatch("hello", "he") -> 1', () => {
    expect(stringMatch('hello', 'he')).toBe(1)
  })

  it('stringMatch("he", "hello") -> 1', () => {
    expect(stringMatch('he', 'hello')).toBe(1)
  })

  it('stringMatch("h", "hello") -> 0', () => {
    expect(stringMatch('h', 'hello')).toBe(0)
  })

  it('stringMatch("", "hello") -> 0', () => {
    expect(stringMatch('', 'hello')).toBe(0)
  })

  it('stringMatch("aabbccdd", "abbbxxd") -> 1', () => {
    expect(stringMatch('aabbccdd', 'abbbxxd')).toBe(1)
  })

  it('stringMatch("aaxxaaxx", "iaxxai") -> 3', () => {
    expect(stringMatch('aaxxaaxx', 'iaxxai')).toBe(3)
  })

  it('stringMatch("iaxxai", "aaxxaaxx") -> 3', () => {
    expect(stringMatch('iaxxai', 'aaxxaaxx')).toBe(3)
  })
})
