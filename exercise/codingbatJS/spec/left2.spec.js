/* eslint-env jest */
/* question

Given a string, return a "rotated left 2" version where the first 2 chars are moved to the end. The string length will be at least 2.

left2("Hello") → "lloHe"
left2("java") → "vaja"
left2("Hi") → "Hi"
*/


const left2 = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('left2(str)', () => {

  it('left2("Hello") -> "lloHe"', () => {
    expect(left2("Hello")).toBe("lloHe")
  })

  it('left2("java") -> "vaja"', () => {
    expect(left2("java")).toBe("vaja")
  })

  it('left2("Hi") -> "Hi"', () => {
    expect(left2("Hi")).toBe("Hi")
  })

  it('left2("code") -> "deco"', () => {
    expect(left2("code")).toBe("deco")
  })

  it('left2("cat") -> "tca"', () => {
    expect(left2("cat")).toBe("tca")
  })

  it('left2("12345") -> "34512"', () => {
    expect(left2("12345")).toBe("34512")
  })

  it('left2("Chocolate") -> "ocolateCh"', () => {
    expect(left2("Chocolate")).toBe("ocolateCh")
  })

  it('left2("bricks") -> "icksbr"', () => {
    expect(left2("bricks")).toBe("icksbr")
  })

})
