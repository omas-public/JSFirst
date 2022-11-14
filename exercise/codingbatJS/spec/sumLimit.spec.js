/* eslint-env jest */
/* question

Given 2 non-negative ints, a and b, return their sum, so long as the sum has the same number of digits as a. If the sum has more digits than a, just return a without b. (Note: one way to compute the number of digits of a non-negative int n is to convert it to a string with String.valueOf(n) and then check the length of the string.)

sumLimit(2, 3) → 5
sumLimit(8, 3) → 8
sumLimit(8, 1) → 9
*/


const sumLimit = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('sumLimit(a, b)', () => {

  it('sumLimit(2, 3) -> 5', () => {
    expect(sumLimit(2, 3)).toBe(5)
  })

  it('sumLimit(8, 3) -> 8', () => {
    expect(sumLimit(8, 3)).toBe(8)
  })

  it('sumLimit(8, 1) -> 9', () => {
    expect(sumLimit(8, 1)).toBe(9)
  })

  it('sumLimit(11, 39) -> 50', () => {
    expect(sumLimit(11, 39)).toBe(50)
  })

  it('sumLimit(11, 99) -> 11', () => {
    expect(sumLimit(11, 99)).toBe(11)
  })

  it('sumLimit(0, 0) -> 0', () => {
    expect(sumLimit(0, 0)).toBe(0)
  })

  it('sumLimit(99, 0) -> 99', () => {
    expect(sumLimit(99, 0)).toBe(99)
  })

  it('sumLimit(99, 1) -> 99', () => {
    expect(sumLimit(99, 1)).toBe(99)
  })

  it('sumLimit(123, 1) -> 124', () => {
    expect(sumLimit(123, 1)).toBe(124)
  })

  it('sumLimit(1, 123) -> 1', () => {
    expect(sumLimit(1, 123)).toBe(1)
  })

  it('sumLimit(23, 60) -> 83', () => {
    expect(sumLimit(23, 60)).toBe(83)
  })

  it('sumLimit(23, 80) -> 23', () => {
    expect(sumLimit(23, 80)).toBe(23)
  })

  it('sumLimit(9000, 1) -> 9001', () => {
    expect(sumLimit(9000, 1)).toBe(9001)
  })

  it('sumLimit(90000000, 1) -> 90000001', () => {
    expect(sumLimit(90000000, 1)).toBe(90000001)
  })

  it('sumLimit(9000, 1000) -> 9000', () => {
    expect(sumLimit(9000, 1000)).toBe(9000)
  })

})
