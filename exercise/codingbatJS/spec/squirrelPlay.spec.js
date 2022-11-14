/* eslint-env jest */
/* question

The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.

squirrelPlay(70, false) → true
squirrelPlay(95, false) → false
squirrelPlay(95, true) → true
*/


const squirrelPlay = (temp, isSummer) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('squirrelPlay(temp, isSummer)', () => {

  it('squirrelPlay(70, false) -> true', () => {
    expect(squirrelPlay(70, false)).toBe(true)
  })

  it('squirrelPlay(95, false) -> false', () => {
    expect(squirrelPlay(95, false)).toBe(false)
  })

  it('squirrelPlay(95, true) -> true', () => {
    expect(squirrelPlay(95, true)).toBe(true)
  })

  it('squirrelPlay(90, false) -> true', () => {
    expect(squirrelPlay(90, false)).toBe(true)
  })

  it('squirrelPlay(90, true) -> true', () => {
    expect(squirrelPlay(90, true)).toBe(true)
  })

  it('squirrelPlay(50, false) -> false', () => {
    expect(squirrelPlay(50, false)).toBe(false)
  })

  it('squirrelPlay(50, true) -> false', () => {
    expect(squirrelPlay(50, true)).toBe(false)
  })

  it('squirrelPlay(100, false) -> false', () => {
    expect(squirrelPlay(100, false)).toBe(false)
  })

  it('squirrelPlay(100, true) -> true', () => {
    expect(squirrelPlay(100, true)).toBe(true)
  })

  it('squirrelPlay(105, true) -> false', () => {
    expect(squirrelPlay(105, true)).toBe(false)
  })

  it('squirrelPlay(59, false) -> false', () => {
    expect(squirrelPlay(59, false)).toBe(false)
  })

  it('squirrelPlay(59, true) -> false', () => {
    expect(squirrelPlay(59, true)).toBe(false)
  })

  it('squirrelPlay(60, false) -> true', () => {
    expect(squirrelPlay(60, false)).toBe(true)
  })

})
