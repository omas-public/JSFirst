/* eslint-env jest */
/* question

Given a string, return the count of the number of times that a substring length 2 appears in the string and also as the last 2 chars of the string, so "hixxxhi" yields 1 (we won't count the end substring).

文字列が与えられる，最後の2文字が何回現れるかカウントして返せ。 但し最後の2文字はカウントしないこと

last2("hixxhi") → 1
last2("xaxxaxaxx") → 1
last2("axxxaaxx") → 2
*/

const last2 = (str) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('last2(str)', () => {
  it('last2("hixxhi") -> 1', () => {
    expect(last2('hixxhi')).toBe(1)
  })

  it('last2("xaxxaxaxx") -> 1', () => {
    expect(last2('xaxxaxaxx')).toBe(1)
  })

  it('last2("axxxaaxx") -> 2', () => {
    expect(last2('axxxaaxx')).toBe(2)
  })

  it('last2("xxaxxaxxaxx") -> 3', () => {
    expect(last2('xxaxxaxxaxx')).toBe(3)
  })

  it('last2("xaxaxaxx") -> 0', () => {
    expect(last2('xaxaxaxx')).toBe(0)
  })

  it('last2("xxxx") -> 2', () => {
    expect(last2('xxxx')).toBe(2)
  })

  it('last2("13121312") -> 1', () => {
    expect(last2('13121312')).toBe(1)
  })

  it('last2("11212") -> 1', () => {
    expect(last2('11212')).toBe(1)
  })

  it('last2("13121311") -> 0', () => {
    expect(last2('13121311')).toBe(0)
  })

  it('last2("1717171") -> 2', () => {
    expect(last2('1717171')).toBe(2)
  })

  it('last2("hi") -> 0', () => {
    expect(last2('hi')).toBe(0)
  })

  it('last2("h") -> 0', () => {
    expect(last2('h')).toBe(0)
  })

  it('last2("") -> 0', () => {
    expect(last2('')).toBe(0)
  })
})
