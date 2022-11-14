/* eslint-env jest */
/* question

Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.

整数 n が与えられる， n と 21 との間の絶対差を返せ，ただし n が21よりも大きい場合は差の2倍を返せ

diff21(19) → 2
diff21(10) → 11
diff21(21) → 0
*/

const diff21 = (n) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('diff21(n)', () => {
  it('diff21(19) -> 2', () => {
    expect(diff21(19)).toBe(2)
  })

  it('diff21(10) -> 11', () => {
    expect(diff21(10)).toBe(11)
  })

  it('diff21(21) -> 0', () => {
    expect(diff21(21)).toBe(0)
  })

  it('diff21(22) -> 2', () => {
    expect(diff21(22)).toBe(2)
  })

  it('diff21(25) -> 8', () => {
    expect(diff21(25)).toBe(8)
  })

  it('diff21(30) -> 18', () => {
    expect(diff21(30)).toBe(18)
  })

  it('diff21(0) -> 21', () => {
    expect(diff21(0)).toBe(21)
  })

  it('diff21(1) -> 20', () => {
    expect(diff21(1)).toBe(20)
  })

  it('diff21(2) -> 19', () => {
    expect(diff21(2)).toBe(19)
  })

  it('diff21(-1) -> 22', () => {
    expect(diff21(-1)).toBe(22)
  })

  it('diff21(-2) -> 23', () => {
    expect(diff21(-2)).toBe(23)
  })

  it('diff21(50) -> 58', () => {
    expect(diff21(50)).toBe(58)
  })
})
