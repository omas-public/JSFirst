/* eslint-env jest */
/* question

Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator  see Introduction to Mod

負数ではない数が与えられた時，3の倍数または5の倍数だった場合は trueを返せ

or35(3) → true
or35(10) → true
or35(8) → false
*/

const or35 = (n) => {
// use mod(%) operator
// write code here

}

/* -- test code ---------------------------------------- */
describe('or35(n)', () => {
  it('or35(3) -> true', () => {
    expect(or35(3)).toBe(true)
  })

  it('or35(10) -> true', () => {
    expect(or35(10)).toBe(true)
  })

  it('or35(8) -> false', () => {
    expect(or35(8)).toBe(false)
  })

  it('or35(15) -> true', () => {
    expect(or35(15)).toBe(true)
  })

  it('or35(5) -> true', () => {
    expect(or35(5)).toBe(true)
  })

  it('or35(9) -> true', () => {
    expect(or35(9)).toBe(true)
  })

  it('or35(4) -> false', () => {
    expect(or35(4)).toBe(false)
  })

  it('or35(7) -> false', () => {
    expect(or35(7)).toBe(false)
  })

  it('or35(6) -> true', () => {
    expect(or35(6)).toBe(true)
  })

  it('or35(17) -> false', () => {
    expect(or35(17)).toBe(false)
  })

  it('or35(18) -> true', () => {
    expect(or35(18)).toBe(true)
  })

  it('or35(29) -> false', () => {
    expect(or35(29)).toBe(false)
  })

  it('or35(20) -> true', () => {
    expect(or35(20)).toBe(true)
  })

  it('or35(21) -> true', () => {
    expect(or35(21)).toBe(true)
  })

  it('or35(22) -> false', () => {
    expect(or35(22)).toBe(false)
  })

  it('or35(45) -> true', () => {
    expect(or35(45)).toBe(true)
  })

  it('or35(99) -> true', () => {
    expect(or35(99)).toBe(true)
  })

  it('or35(100) -> true', () => {
    expect(or35(100)).toBe(true)
  })

  it('or35(101) -> false', () => {
    expect(or35(101)).toBe(false)
  })

  it('or35(121) -> false', () => {
    expect(or35(121)).toBe(false)
  })

  it('or35(122) -> false', () => {
    expect(or35(122)).toBe(false)
  })

  it('or35(123) -> true', () => {
    expect(or35(123)).toBe(true)
  })
})
