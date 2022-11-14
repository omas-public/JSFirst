/* eslint-env jest */
/* question

Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

seeColor("redxx") → "red"
seeColor("xxred") → ""
seeColor("blueTimes") → "blue"
*/


const seeColor = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('seeColor(str)', () => {

  it('seeColor("redxx") -> "red"', () => {
    expect(seeColor("redxx")).toBe("red")
  })

  it('seeColor("xxred") -> ""', () => {
    expect(seeColor("xxred")).toBe("")
  })

  it('seeColor("blueTimes") -> "blue"', () => {
    expect(seeColor("blueTimes")).toBe("blue")
  })

  it('seeColor("NoColor") -> ""', () => {
    expect(seeColor("NoColor")).toBe("")
  })

  it('seeColor("red") -> "red"', () => {
    expect(seeColor("red")).toBe("red")
  })

  it('seeColor("re") -> ""', () => {
    expect(seeColor("re")).toBe("")
  })

  it('seeColor("blu") -> ""', () => {
    expect(seeColor("blu")).toBe("")
  })

  it('seeColor("blue") -> "blue"', () => {
    expect(seeColor("blue")).toBe("blue")
  })

  it('seeColor("a") -> ""', () => {
    expect(seeColor("a")).toBe("")
  })

  it('seeColor("") -> ""', () => {
    expect(seeColor("")).toBe("")
  })

  it('seeColor("xyzred") -> ""', () => {
    expect(seeColor("xyzred")).toBe("")
  })

})
