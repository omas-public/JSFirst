/* eslint-env jest */
/* question

Return the sum of two 6-sided dice rolls, each in the range 1..6. However, if noDoubles is true, if the two dice show the same value, increment one die to the next value, wrapping around to 1 if its value was 6.

withoutDoubles(2, 3, true) → 5
withoutDoubles(3, 3, true) → 7
withoutDoubles(3, 3, false) → 6
*/


const withoutDoubles = (die1, die2, noDoubles) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('withoutDoubles(die1, die2, noDoubles)', () => {

  it('withoutDoubles(2, 3, true) -> 5', () => {
    expect(withoutDoubles(2, 3, true)).toBe(5)
  })

  it('withoutDoubles(3, 3, true) -> 7', () => {
    expect(withoutDoubles(3, 3, true)).toBe(7)
  })

  it('withoutDoubles(3, 3, false) -> 6', () => {
    expect(withoutDoubles(3, 3, false)).toBe(6)
  })

  it('withoutDoubles(2, 3, false) -> 5', () => {
    expect(withoutDoubles(2, 3, false)).toBe(5)
  })

  it('withoutDoubles(5, 4, true) -> 9', () => {
    expect(withoutDoubles(5, 4, true)).toBe(9)
  })

  it('withoutDoubles(5, 4, false) -> 9', () => {
    expect(withoutDoubles(5, 4, false)).toBe(9)
  })

  it('withoutDoubles(5, 5, true) -> 11', () => {
    expect(withoutDoubles(5, 5, true)).toBe(11)
  })

  it('withoutDoubles(5, 5, false) -> 10', () => {
    expect(withoutDoubles(5, 5, false)).toBe(10)
  })

  it('withoutDoubles(6, 6, true) -> 7', () => {
    expect(withoutDoubles(6, 6, true)).toBe(7)
  })

  it('withoutDoubles(6, 6, false) -> 12', () => {
    expect(withoutDoubles(6, 6, false)).toBe(12)
  })

  it('withoutDoubles(1, 6, true) -> 7', () => {
    expect(withoutDoubles(1, 6, true)).toBe(7)
  })

  it('withoutDoubles(6, 1, false) -> 7', () => {
    expect(withoutDoubles(6, 1, false)).toBe(7)
  })

})
