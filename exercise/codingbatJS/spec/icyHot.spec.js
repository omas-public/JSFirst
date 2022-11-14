/* eslint-env jest */
/* question

Given two temperatures, return true if one is less than 0 and the other is greater than 100.

2つの温度が与えられる，片方が0未満もう片方が100を超えるときはtrueを返せ

icyHot(120, -1) → true
icyHot(-1, 120) → true
icyHot(2, 120) → false
*/

const icyHot = (temp1, temp2) => {
// use Math.min and Math.max or Array.sort
// write code here

}

/* -- test code ---------------------------------------- */
describe('icyHot(temp1, temp2)', () => {
  it('icyHot(120, -1) -> true', () => {
    expect(icyHot(120, -1)).toBe(true)
  })

  it('icyHot(-1, 120) -> true', () => {
    expect(icyHot(-1, 120)).toBe(true)
  })

  it('icyHot(2, 120) -> false', () => {
    expect(icyHot(2, 120)).toBe(false)
  })

  it('icyHot(-1, 100) -> false', () => {
    expect(icyHot(-1, 100)).toBe(false)
  })

  it('icyHot(-2, -2) -> false', () => {
    expect(icyHot(-2, -2)).toBe(false)
  })

  it('icyHot(120, 120) -> false', () => {
    expect(icyHot(120, 120)).toBe(false)
  })
})
