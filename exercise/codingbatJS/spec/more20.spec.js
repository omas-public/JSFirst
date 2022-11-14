/* eslint-env jest */
/* question

Return true if the given non-negative number is 1 or 2 more than a multiple of 20. See also: Introduction to Mod

more20(20) → false
more20(21) → true
more20(22) → true
*/


const more20 = (n) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('more20(n)', () => {

  it('more20(20) -> false', () => {
    expect(more20(20)).toBe(false)
  })

  it('more20(21) -> true', () => {
    expect(more20(21)).toBe(true)
  })

  it('more20(22) -> true', () => {
    expect(more20(22)).toBe(true)
  })

  it('more20(23) -> false', () => {
    expect(more20(23)).toBe(false)
  })

  it('more20(25) -> false', () => {
    expect(more20(25)).toBe(false)
  })

  it('more20(30) -> false', () => {
    expect(more20(30)).toBe(false)
  })

  it('more20(31) -> false', () => {
    expect(more20(31)).toBe(false)
  })

  it('more20(59) -> false', () => {
    expect(more20(59)).toBe(false)
  })

  it('more20(60) -> false', () => {
    expect(more20(60)).toBe(false)
  })

  it('more20(61) -> true', () => {
    expect(more20(61)).toBe(true)
  })

  it('more20(62) -> true', () => {
    expect(more20(62)).toBe(true)
  })

  it('more20(1020) -> false', () => {
    expect(more20(1020)).toBe(false)
  })

  it('more20(1021) -> true', () => {
    expect(more20(1021)).toBe(true)
  })

  it('more20(1000) -> false', () => {
    expect(more20(1000)).toBe(false)
  })

  it('more20(1001) -> true', () => {
    expect(more20(1001)).toBe(true)
  })

  it('more20(50) -> false', () => {
    expect(more20(50)).toBe(false)
  })

  it('more20(55) -> false', () => {
    expect(more20(55)).toBe(false)
  })

  it('more20(40) -> false', () => {
    expect(more20(40)).toBe(false)
  })

  it('more20(41) -> true', () => {
    expect(more20(41)).toBe(true)
  })

  it('more20(39) -> false', () => {
    expect(more20(39)).toBe(false)
  })

  it('more20(42) -> true', () => {
    expect(more20(42)).toBe(true)
  })

})
