/* eslint-env jest */
/* question

Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.

文字列が"mix"で始まる場合trueを返せ，但し'm'の部分はなんでも良い。例えば "pix", "9ix" .. すべてカウントする

mixStart("mix snacks") → true
mixStart("pix snacks") → true
mixStart("piz snacks") → false
*/

const mixStart = (start) => {
// use RegExp.test() or String.match()
// write code here

}

/* -- test code ---------------------------------------- */
describe('mixStart(start)', () => {
  it('mixStart("mix snacks") -> true', () => {
    expect(mixStart('mix snacks')).toBe(true)
  })

  it('mixStart("pix snacks") -> true', () => {
    expect(mixStart('pix snacks')).toBe(true)
  })

  it('mixStart("piz snacks") -> false', () => {
    expect(mixStart('piz snacks')).toBe(false)
  })

  it('mixStart("nix") -> true', () => {
    expect(mixStart('nix')).toBe(true)
  })

  it('mixStart("ni") -> false', () => {
    expect(mixStart('ni')).toBe(false)
  })

  it('mixStart("n") -> false', () => {
    expect(mixStart('n')).toBe(false)
  })

  it('mixStart("") -> false', () => {
    expect(mixStart('')).toBe(false)
  })
})
