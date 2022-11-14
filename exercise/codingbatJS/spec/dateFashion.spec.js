/* eslint-env jest */
/* question

You and your date are trying to get a table at a restaurant. The parameter "you" is the stylishness of your clothes, in the range 0..10, and "date" is the stylishness of your date's clothes. The result getting the table is encoded as an int value with 0=no, 1=maybe, 2=yes. If either of you is very stylish, 8 or more, then the result is 2 (yes). With the exception that if either of you has style of 2 or less, then the result is 0 (no). Otherwise the result is 1 (maybe).

dateFashion(5, 10) → 2
dateFashion(5, 2) → 0
dateFashion(5, 5) → 1
*/


const dateFashion = (you, date) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('dateFashion(you, date)', () => {

  it('dateFashion(5, 10) -> 2', () => {
    expect(dateFashion(5, 10)).toBe(2)
  })

  it('dateFashion(5, 2) -> 0', () => {
    expect(dateFashion(5, 2)).toBe(0)
  })

  it('dateFashion(5, 5) -> 1', () => {
    expect(dateFashion(5, 5)).toBe(1)
  })

  it('dateFashion(3, 3) -> 1', () => {
    expect(dateFashion(3, 3)).toBe(1)
  })

  it('dateFashion(10, 2) -> 0', () => {
    expect(dateFashion(10, 2)).toBe(0)
  })

  it('dateFashion(2, 9) -> 0', () => {
    expect(dateFashion(2, 9)).toBe(0)
  })

  it('dateFashion(9, 9) -> 2', () => {
    expect(dateFashion(9, 9)).toBe(2)
  })

  it('dateFashion(10, 5) -> 2', () => {
    expect(dateFashion(10, 5)).toBe(2)
  })

  it('dateFashion(2, 2) -> 0', () => {
    expect(dateFashion(2, 2)).toBe(0)
  })

  it('dateFashion(3, 7) -> 1', () => {
    expect(dateFashion(3, 7)).toBe(1)
  })

  it('dateFashion(2, 7) -> 0', () => {
    expect(dateFashion(2, 7)).toBe(0)
  })

  it('dateFashion(6, 2) -> 0', () => {
    expect(dateFashion(6, 2)).toBe(0)
  })

})
