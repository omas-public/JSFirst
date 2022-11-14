/* eslint-env jest */
/* question

Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.

teenSum(3, 4) → 7
teenSum(10, 13) → 19
teenSum(13, 2) → 19
*/


const teenSum = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('teenSum(a, b)', () => {

  it('teenSum(3, 4) -> 7', () => {
    expect(teenSum(3, 4)).toBe(7)
  })

  it('teenSum(10, 13) -> 19', () => {
    expect(teenSum(10, 13)).toBe(19)
  })

  it('teenSum(13, 2) -> 19', () => {
    expect(teenSum(13, 2)).toBe(19)
  })

  it('teenSum(3, 19) -> 19', () => {
    expect(teenSum(3, 19)).toBe(19)
  })

  it('teenSum(13, 13) -> 19', () => {
    expect(teenSum(13, 13)).toBe(19)
  })

  it('teenSum(10, 10) -> 20', () => {
    expect(teenSum(10, 10)).toBe(20)
  })

  it('teenSum(6, 14) -> 19', () => {
    expect(teenSum(6, 14)).toBe(19)
  })

  it('teenSum(15, 2) -> 19', () => {
    expect(teenSum(15, 2)).toBe(19)
  })

  it('teenSum(19, 19) -> 19', () => {
    expect(teenSum(19, 19)).toBe(19)
  })

  it('teenSum(19, 20) -> 19', () => {
    expect(teenSum(19, 20)).toBe(19)
  })

  it('teenSum(2, 18) -> 19', () => {
    expect(teenSum(2, 18)).toBe(19)
  })

  it('teenSum(12, 4) -> 16', () => {
    expect(teenSum(12, 4)).toBe(16)
  })

  it('teenSum(2, 20) -> 22', () => {
    expect(teenSum(2, 20)).toBe(22)
  })

  it('teenSum(2, 17) -> 19', () => {
    expect(teenSum(2, 17)).toBe(19)
  })

  it('teenSum(2, 16) -> 19', () => {
    expect(teenSum(2, 16)).toBe(19)
  })

  it('teenSum(6, 7) -> 13', () => {
    expect(teenSum(6, 7)).toBe(13)
  })

})
