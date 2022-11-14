/* eslint-env jest */
/* question

Return true if the given non-negative number is 1 or 2 less than a multiple of 20. So for example 38 and 39 return true, but 40 returns false. See also: Introduction to Mod

less20(18) → true
less20(19) → true
less20(20) → false
*/


const less20 = (n) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('less20(n)', () => {

  it('less20(18) -> true', () => {
    expect(less20(18)).toBe(true)
  })

  it('less20(19) -> true', () => {
    expect(less20(19)).toBe(true)
  })

  it('less20(20) -> false', () => {
    expect(less20(20)).toBe(false)
  })

  it('less20(8) -> false', () => {
    expect(less20(8)).toBe(false)
  })

  it('less20(17) -> false', () => {
    expect(less20(17)).toBe(false)
  })

  it('less20(23) -> false', () => {
    expect(less20(23)).toBe(false)
  })

  it('less20(25) -> false', () => {
    expect(less20(25)).toBe(false)
  })

  it('less20(30) -> false', () => {
    expect(less20(30)).toBe(false)
  })

  it('less20(31) -> false', () => {
    expect(less20(31)).toBe(false)
  })

  it('less20(58) -> true', () => {
    expect(less20(58)).toBe(true)
  })

  it('less20(59) -> true', () => {
    expect(less20(59)).toBe(true)
  })

  it('less20(60) -> false', () => {
    expect(less20(60)).toBe(false)
  })

  it('less20(61) -> false', () => {
    expect(less20(61)).toBe(false)
  })

  it('less20(62) -> false', () => {
    expect(less20(62)).toBe(false)
  })

  it('less20(1017) -> false', () => {
    expect(less20(1017)).toBe(false)
  })

  it('less20(1018) -> true', () => {
    expect(less20(1018)).toBe(true)
  })

  it('less20(1019) -> true', () => {
    expect(less20(1019)).toBe(true)
  })

  it('less20(1020) -> false', () => {
    expect(less20(1020)).toBe(false)
  })

  it('less20(1021) -> false', () => {
    expect(less20(1021)).toBe(false)
  })

  it('less20(1022) -> false', () => {
    expect(less20(1022)).toBe(false)
  })

  it('less20(1023) -> false', () => {
    expect(less20(1023)).toBe(false)
  })

  it('less20(37) -> false', () => {
    expect(less20(37)).toBe(false)
  })

})
