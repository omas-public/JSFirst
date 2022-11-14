/* eslint-env jest */
/* question

Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

lastTwo("coding") → "codign"
lastTwo("cat") → "cta"
lastTwo("ab") → "ba"
*/


const lastTwo = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('lastTwo(str)', () => {

  it('lastTwo("coding") -> "codign"', () => {
    expect(lastTwo("coding")).toBe("codign")
  })

  it('lastTwo("cat") -> "cta"', () => {
    expect(lastTwo("cat")).toBe("cta")
  })

  it('lastTwo("ab") -> "ba"', () => {
    expect(lastTwo("ab")).toBe("ba")
  })

  it('lastTwo("a") -> "a"', () => {
    expect(lastTwo("a")).toBe("a")
  })

  it('lastTwo("") -> ""', () => {
    expect(lastTwo("")).toBe("")
  })

})
