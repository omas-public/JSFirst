/* eslint-env jest */
/* question

When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.

cigarParty(30, false) → false
cigarParty(50, false) → true
cigarParty(70, true) → true
*/


const cigarParty = (cigars, isWeekend) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('cigarParty(cigars, isWeekend)', () => {

  it('cigarParty(30, false) -> false true', () => {
    expect(cigarParty(30, false)).toBe(false true)
  })

  it('cigarParty(50, false) -> true  true', () => {
    expect(cigarParty(50, false)).toBe(true  true)
  })

  it('cigarParty(70, true) -> true true', () => {
    expect(cigarParty(70, true)).toBe(true true)
  })

  it('cigarParty(30, true) -> false  true', () => {
    expect(cigarParty(30, true)).toBe(false  true)
  })

  it('cigarParty(50, true) -> true true', () => {
    expect(cigarParty(50, true)).toBe(true true)
  })

  it('cigarParty(60, false) -> true  true', () => {
    expect(cigarParty(60, false)).toBe(true  true)
  })

  it('cigarParty(61, false) -> false true', () => {
    expect(cigarParty(61, false)).toBe(false true)
  })

  it('cigarParty(40, false) -> true  true', () => {
    expect(cigarParty(40, false)).toBe(true  true)
  })

  it('cigarParty(39, false) -> false true', () => {
    expect(cigarParty(39, false)).toBe(false true)
  })

  it('cigarParty(40, true) -> true true', () => {
    expect(cigarParty(40, true)).toBe(true true)
  })

  it('cigarParty(39, true) -> false  true', () => {
    expect(cigarParty(39, true)).toBe(false  true)
  })

})
