/* eslint-env jest */
/* question

Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

文字列が与えられる。インデックスが 0,1, 4,5, 8,9 ...で合成された "kittens" -> "kien" のような文字列を返せ

altPairs("kitten") → "kien"
altPairs("Chocolate") → "Chole"
altPairs("CodingHorror") → "Congrr"
*/

const altPairs = (str) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('altPairs(str)', () => {
  it('altPairs("kitten") -> "kien"', () => {
    expect(altPairs('kitten')).toBe('kien')
  })

  it('altPairs("Chocolate") -> "Chole"', () => {
    expect(altPairs('Chocolate')).toBe('Chole')
  })

  it('altPairs("CodingHorror") -> "Congrr"', () => {
    expect(altPairs('CodingHorror')).toBe('Congrr')
  })

  it('altPairs("yak") -> "ya"', () => {
    expect(altPairs('yak')).toBe('ya')
  })

  it('altPairs("ya") -> "ya"', () => {
    expect(altPairs('ya')).toBe('ya')
  })

  it('altPairs("y") -> "y"', () => {
    expect(altPairs('y')).toBe('y')
  })

  it('altPairs("") -> ""', () => {
    expect(altPairs('')).toBe('')
  })

  it('altPairs("ThisThatTheOther") -> "ThThThth"', () => {
    expect(altPairs('ThisThatTheOther')).toBe('ThThThth')
  })
})
