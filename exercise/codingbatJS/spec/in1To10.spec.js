/* eslint-env jest */
/* question

Given a number n, return true if n is in the range 1..10, inclusive. Unless outsideMode is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

in1To10(5, false) → true
in1To10(11, false) → false
in1To10(11, true) → true
*/


const in1To10 = (n, outsideMode) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('in1To10(n, outsideMode)', () => {

  it('in1To10(5, false) -> true', () => {
    expect(in1To10(5, false)).toBe(true)
  })

  it('in1To10(11, false) -> false', () => {
    expect(in1To10(11, false)).toBe(false)
  })

  it('in1To10(11, true) -> true', () => {
    expect(in1To10(11, true)).toBe(true)
  })

  it('in1To10(10, false) -> true', () => {
    expect(in1To10(10, false)).toBe(true)
  })

  it('in1To10(10, true) -> true', () => {
    expect(in1To10(10, true)).toBe(true)
  })

  it('in1To10(9, false) -> true', () => {
    expect(in1To10(9, false)).toBe(true)
  })

  it('in1To10(9, true) -> false', () => {
    expect(in1To10(9, true)).toBe(false)
  })

  it('in1To10(1, false) -> true', () => {
    expect(in1To10(1, false)).toBe(true)
  })

  it('in1To10(1, true) -> true', () => {
    expect(in1To10(1, true)).toBe(true)
  })

  it('in1To10(0, false) -> false', () => {
    expect(in1To10(0, false)).toBe(false)
  })

  it('in1To10(0, true) -> true', () => {
    expect(in1To10(0, true)).toBe(true)
  })

  it('in1To10(-1, false) -> false', () => {
    expect(in1To10(-1, false)).toBe(false)
  })

  it('in1To10(-1, true) -> true', () => {
    expect(in1To10(-1, true)).toBe(true)
  })

  it('in1To10(99, false) -> false', () => {
    expect(in1To10(99, false)).toBe(false)
  })

  it('in1To10(-99, true) -> true', () => {
    expect(in1To10(-99, true)).toBe(true)
  })

})
