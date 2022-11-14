/* eslint-env jest */
/* question

Given a string and an index, return a string length 2 starting at the given index. If the index is too big or too small to define a string length 2, use the first 2 chars. The string length will be at least 2.

twoChar("java", 0) → "ja"
twoChar("java", 2) → "va"
twoChar("java", 3) → "ja"
*/


const twoChar = (str, index) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('twoChar(str, index)', () => {

  it('twoChar("java", 0) -> "ja"', () => {
    expect(twoChar("java", 0)).toBe("ja")
  })

  it('twoChar("java", 2) -> "va"', () => {
    expect(twoChar("java", 2)).toBe("va")
  })

  it('twoChar("java", 3) -> "ja"', () => {
    expect(twoChar("java", 3)).toBe("ja")
  })

  it('twoChar("java", 4) -> "ja"', () => {
    expect(twoChar("java", 4)).toBe("ja")
  })

  it('twoChar("java", -1) -> "ja"', () => {
    expect(twoChar("java", -1)).toBe("ja")
  })

  it('twoChar("Hello", 0) -> "He"', () => {
    expect(twoChar("Hello", 0)).toBe("He")
  })

  it('twoChar("Hello", 1) -> "el"', () => {
    expect(twoChar("Hello", 1)).toBe("el")
  })

  it('twoChar("Hello", 99) -> "He"', () => {
    expect(twoChar("Hello", 99)).toBe("He")
  })

  it('twoChar("Hello", 3) -> "lo"', () => {
    expect(twoChar("Hello", 3)).toBe("lo")
  })

  it('twoChar("Hello", 4) -> "He"', () => {
    expect(twoChar("Hello", 4)).toBe("He")
  })

  it('twoChar("Hello", 5) -> "He"', () => {
    expect(twoChar("Hello", 5)).toBe("He")
  })

  it('twoChar("Hello", -7) -> "He"', () => {
    expect(twoChar("Hello", -7)).toBe("He")
  })

  it('twoChar("Hello", 6) -> "He"', () => {
    expect(twoChar("Hello", 6)).toBe("He")
  })

  it('twoChar("Hello", -1) -> "He"', () => {
    expect(twoChar("Hello", -1)).toBe("He")
  })

  it('twoChar("yay", 0) -> "ya"', () => {
    expect(twoChar("yay", 0)).toBe("ya")
  })

})
