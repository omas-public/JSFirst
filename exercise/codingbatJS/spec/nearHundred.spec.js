/* eslint-env jest */
/* question

Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

整数 n が与えられる，n と100または200の差分が10以内である場合 true を返せ

nearHundred(93) → true
nearHundred(90) → true
nearHundred(89) → false
*/

const nearHundred = (n) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('nearHundred(n)', () => {
  it('nearHundred(93) -> true', () => {
    expect(nearHundred(93)).toBe(true)
  })

  it('nearHundred(90) -> true', () => {
    expect(nearHundred(90)).toBe(true)
  })

  it('nearHundred(89) -> false', () => {
    expect(nearHundred(89)).toBe(false)
  })

  it('nearHundred(110) -> true', () => {
    expect(nearHundred(110)).toBe(true)
  })

  it('nearHundred(111) -> false', () => {
    expect(nearHundred(111)).toBe(false)
  })

  it('nearHundred(121) -> false', () => {
    expect(nearHundred(121)).toBe(false)
  })

  it('nearHundred(-101) -> false', () => {
    expect(nearHundred(-101)).toBe(false)
  })

  it('nearHundred(-209) -> false', () => {
    expect(nearHundred(-209)).toBe(false)
  })

  it('nearHundred(190) -> true', () => {
    expect(nearHundred(190)).toBe(true)
  })

  it('nearHundred(209) -> true', () => {
    expect(nearHundred(209)).toBe(true)
  })

  it('nearHundred(0) -> false', () => {
    expect(nearHundred(0)).toBe(false)
  })

  it('nearHundred(5) -> false', () => {
    expect(nearHundred(5)).toBe(false)
  })

  it('nearHundred(-50) -> false', () => {
    expect(nearHundred(-50)).toBe(false)
  })

  it('nearHundred(191) -> true', () => {
    expect(nearHundred(191)).toBe(true)
  })

  it('nearHundred(189) -> false', () => {
    expect(nearHundred(189)).toBe(false)
  })

  it('nearHundred(200) -> true', () => {
    expect(nearHundred(200)).toBe(true)
  })

  it('nearHundred(210) -> true', () => {
    expect(nearHundred(210)).toBe(true)
  })

  it('nearHundred(211) -> false', () => {
    expect(nearHundred(211)).toBe(false)
  })

  it('nearHundred(290) -> false', () => {
    expect(nearHundred(290)).toBe(false)
  })
})
