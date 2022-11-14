/* eslint-env jest */
/* question

Given a string, return a string length 1 from its front, unless front is false, in which case return a string length 1 from its back. The string will be non-empty.

theEnd("Hello", true) → "H"
theEnd("Hello", false) → "o"
theEnd("oh", true) → "o"
*/


const theEnd = (str, front) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('theEnd(str, front)', () => {

  it('theEnd("Hello", true) -> "H"', () => {
    expect(theEnd("Hello", true)).toBe("H")
  })

  it('theEnd("Hello", false) -> "o"', () => {
    expect(theEnd("Hello", false)).toBe("o")
  })

  it('theEnd("oh", true) -> "o"', () => {
    expect(theEnd("oh", true)).toBe("o")
  })

  it('theEnd("oh", false) -> "h"', () => {
    expect(theEnd("oh", false)).toBe("h")
  })

  it('theEnd("x", true) -> "x"', () => {
    expect(theEnd("x", true)).toBe("x")
  })

  it('theEnd("x", false) -> "x"', () => {
    expect(theEnd("x", false)).toBe("x")
  })

  it('theEnd("java", true) -> "j"', () => {
    expect(theEnd("java", true)).toBe("j")
  })

  it('theEnd("chocolate", false) -> "e"', () => {
    expect(theEnd("chocolate", false)).toBe("e")
  })

  it('theEnd("1234", true) -> "1"', () => {
    expect(theEnd("1234", true)).toBe("1")
  })

  it('theEnd("code", false) -> "e"', () => {
    expect(theEnd("code", false)).toBe("e")
  })

})
