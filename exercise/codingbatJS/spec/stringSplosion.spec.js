/* eslint-env jest */
/* question

Given a non-empty string like "Code" return a string like "CCoCodCode".

"Code" のような空ではない文字が与えられる，"CCoCodCode" のようにして返せ

stringSplosion("Code") → "CCoCodCode"
stringSplosion("abc") → "aababc"
stringSplosion("ab") → "aab"
*/

const stringSplosion = (str) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('stringSplosion(str)', () => {
  it('stringSplosion("Code") -> "CCoCodCode"', () => {
    expect(stringSplosion('Code')).toBe('CCoCodCode')
  })

  it('stringSplosion("abc") -> "aababc"', () => {
    expect(stringSplosion('abc')).toBe('aababc')
  })

  it('stringSplosion("ab") -> "aab"', () => {
    expect(stringSplosion('ab')).toBe('aab')
  })

  it('stringSplosion("x") -> "x"', () => {
    expect(stringSplosion('x')).toBe('x')
  })

  it('stringSplosion("fade") -> "ffafadfade"', () => {
    expect(stringSplosion('fade')).toBe('ffafadfade')
  })

  it('stringSplosion("There") -> "TThTheTherThere"', () => {
    expect(stringSplosion('There')).toBe('TThTheTherThere')
  })

  it('stringSplosion("Kitten") -> "KKiKitKittKitteKitten"', () => {
    expect(stringSplosion('Kitten')).toBe('KKiKitKittKitteKitten')
  })

  it('stringSplosion("Bye") -> "BByBye"', () => {
    expect(stringSplosion('Bye')).toBe('BByBye')
  })

  it('stringSplosion("Good") -> "GGoGooGood"', () => {
    expect(stringSplosion('Good')).toBe('GGoGooGood')
  })

  it('stringSplosion("Bad") -> "BBaBad"', () => {
    expect(stringSplosion('Bad')).toBe('BBaBad')
  })
})
