/* eslint-env jest */
/* question

Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

2つの整数 a,b のうち値が10に近い方を返せ，ただし値が等しい場合は0を返せ

close10(8, 13) → 8
close10(13, 8) → 8
close10(13, 7) → 0
*/

const close10 = (a, b) => {
// use Math.abs
// write code here

}

/* -- test code ---------------------------------------- */
describe('close10(a, b)', () => {
  it('close10(8, 13) -> 8', () => {
    expect(close10(8, 13)).toBe(8)
  })

  it('close10(13, 8) -> 8', () => {
    expect(close10(13, 8)).toBe(8)
  })

  it('close10(13, 7) -> 0', () => {
    expect(close10(13, 7)).toBe(0)
  })

  it('close10(7, 13) -> 0', () => {
    expect(close10(7, 13)).toBe(0)
  })

  it('close10(9, 13) -> 9', () => {
    expect(close10(9, 13)).toBe(9)
  })

  it('close10(13, 8) -> 8', () => {
    expect(close10(13, 8)).toBe(8)
  })

  it('close10(10, 12) -> 10', () => {
    expect(close10(10, 12)).toBe(10)
  })

  it('close10(11, 10) -> 10', () => {
    expect(close10(11, 10)).toBe(10)
  })

  it('close10(5, 21) -> 5', () => {
    expect(close10(5, 21)).toBe(5)
  })

  it('close10(0, 20) -> 0', () => {
    expect(close10(0, 20)).toBe(0)
  })

  it('close10(10, 10) -> 0', () => {
    expect(close10(10, 10)).toBe(0)
  })
})
