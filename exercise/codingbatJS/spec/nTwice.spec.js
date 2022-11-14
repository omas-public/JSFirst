/* eslint-env jest */
/* question

Given a string and an int n, return a string made of the first and last n chars from the string. The string length will be at least n.

nTwice("Hello", 2) → "Helo"
nTwice("Chocolate", 3) → "Choate"
nTwice("Chocolate", 1) → "Ce"
*/


const nTwice = (str, n) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('nTwice(str, n)', () => {

  it('nTwice("Hello", 2) -> "Helo"', () => {
    expect(nTwice("Hello", 2)).toBe("Helo")
  })

  it('nTwice("Chocolate", 3) -> "Choate"', () => {
    expect(nTwice("Chocolate", 3)).toBe("Choate")
  })

  it('nTwice("Chocolate", 1) -> "Ce"', () => {
    expect(nTwice("Chocolate", 1)).toBe("Ce")
  })

  it('nTwice("Chocolate", 0) -> ""', () => {
    expect(nTwice("Chocolate", 0)).toBe("")
  })

  it('nTwice("Hello", 4) -> "Hellello"', () => {
    expect(nTwice("Hello", 4)).toBe("Hellello")
  })

  it('nTwice("Code", 4) -> "CodeCode"', () => {
    expect(nTwice("Code", 4)).toBe("CodeCode")
  })

  it('nTwice("Code", 2) -> "Code"', () => {
    expect(nTwice("Code", 2)).toBe("Code")
  })

})
