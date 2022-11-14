/* eslint-env jest */
/* question

Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".

与えられた文字列から "xx" をカウントして返せ，オーバーラッピングは許されるので 例えば "xxx" は2つとカウントする

countXX("abcxx") → 1
countXX("xxx") → 2
countXX("xxxx") → 3
*/

const countXX = (str) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('countXX(str)', () => {
  it('countXX("abcxx") -> 1', () => {
    expect(countXX('abcxx')).toBe(1)
  })

  it('countXX("xxx") -> 2', () => {
    expect(countXX('xxx')).toBe(2)
  })

  it('countXX("xxxx") -> 3', () => {
    expect(countXX('xxxx')).toBe(3)
  })

  it('countXX("abc") -> 0', () => {
    expect(countXX('abc')).toBe(0)
  })

  it('countXX("Hello there") -> 0', () => {
    expect(countXX('Hello there')).toBe(0)
  })

  it('countXX("Hexxo thxxe") -> 2', () => {
    expect(countXX('Hexxo thxxe')).toBe(2)
  })

  it('countXX("") -> 0', () => {
    expect(countXX('')).toBe(0)
  })

  it('countXX("Kittens") -> 0', () => {
    expect(countXX('Kittens')).toBe(0)
  })

  it('countXX("Kittensxxx") -> 2', () => {
    expect(countXX('Kittensxxx')).toBe(2)
  })
})
