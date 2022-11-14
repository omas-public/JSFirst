/* eslint-env jest */
/* question

Given a string, return a "rotated right 2" version where the last 2 chars are moved to the start. The string length will be at least 2.

right2("Hello") → "loHel"
right2("java") → "vaja"
right2("Hi") → "Hi"
*/


const right2 = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('right2(str)', () => {

  it('right2("Hello") -> "loHel"', () => {
    expect(right2("Hello")).toBe("loHel")
  })

  it('right2("java") -> "vaja"', () => {
    expect(right2("java")).toBe("vaja")
  })

  it('right2("Hi") -> "Hi"', () => {
    expect(right2("Hi")).toBe("Hi")
  })

  it('right2("code") -> "deco"', () => {
    expect(right2("code")).toBe("deco")
  })

  it('right2("cat") -> "atc"', () => {
    expect(right2("cat")).toBe("atc")
  })

  it('right2("12345") -> "45123"', () => {
    expect(right2("12345")).toBe("45123")
  })

})
