/* eslint-env jest */
/* question

Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

extraFront("Hello") → "HeHeHe"
extraFront("ab") → "ababab"
extraFront("H") → "HHH"
*/


const extraFront = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('extraFront(str)', () => {

  it('extraFront("Hello") -> "HeHeHe"', () => {
    expect(extraFront("Hello")).toBe("HeHeHe")
  })

  it('extraFront("ab") -> "ababab"', () => {
    expect(extraFront("ab")).toBe("ababab")
  })

  it('extraFront("H") -> "HHH"', () => {
    expect(extraFront("H")).toBe("HHH")
  })

  it('extraFront("") -> ""', () => {
    expect(extraFront("")).toBe("")
  })

  it('extraFront("Candy") -> "CaCaCa"', () => {
    expect(extraFront("Candy")).toBe("CaCaCa")
  })

  it('extraFront("Code") -> "CoCoCo"', () => {
    expect(extraFront("Code")).toBe("CoCoCo")
  })

})
