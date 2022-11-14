/* eslint-env jest */
/* question

Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back, so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.

文字列が与えられる，最初の2文字を取り元の文字列の最初と最後に付け加えた文字列を返せ。例えば "kitten" -> "kikittenki"。 文字列が2文字未満の場合はそのままの文字列を返せ

front22("kitten") → "kikittenki"
front22("Ha") → "HaHaHa"
front22("abc") → "ababcab"
*/

const front22 = (str) => {
// use String.slice()
// write code here

}

/* -- test code ---------------------------------------- */
describe('front22(str)', () => {
  it('front22("kitten") -> "kikittenki"', () => {
    expect(front22('kitten')).toBe('kikittenki')
  })

  it('front22("Ha") -> "HaHaHa"', () => {
    expect(front22('Ha')).toBe('HaHaHa')
  })

  it('front22("abc") -> "ababcab"', () => {
    expect(front22('abc')).toBe('ababcab')
  })

  it('front22("ab") -> "ababab"', () => {
    expect(front22('ab')).toBe('ababab')
  })

  it('front22("a") -> "aaa"', () => {
    expect(front22('a')).toBe('aaa')
  })

  it('front22("") -> ""', () => {
    expect(front22('')).toBe('')
  })

  it('front22("Logic") -> "LoLogicLo"', () => {
    expect(front22('Logic')).toBe('LoLogicLo')
  })
})
