/* eslint-env jest */
/* question

Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

middleThree("Candy") → "and"
middleThree("and") → "and"
middleThree("solving") → "lvi"
*/


const middleThree = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('middleThree(str)', () => {

  it('middleThree("Candy") -> "and"', () => {
    expect(middleThree("Candy")).toBe("and")
  })

  it('middleThree("and") -> "and"', () => {
    expect(middleThree("and")).toBe("and")
  })

  it('middleThree("solving") -> "lvi"', () => {
    expect(middleThree("solving")).toBe("lvi")
  })

  it('middleThree("Hi yet Hi") -> "yet"', () => {
    expect(middleThree("Hi yet Hi")).toBe("yet")
  })

  it('middleThree("java yet java") -> "yet"', () => {
    expect(middleThree("java yet java")).toBe("yet")
  })

  it('middleThree("Chocolate") -> "col"', () => {
    expect(middleThree("Chocolate")).toBe("col")
  })

  it('middleThree("XabcxyzabcX") -> "xyz"', () => {
    expect(middleThree("XabcxyzabcX")).toBe("xyz")
  })

})
