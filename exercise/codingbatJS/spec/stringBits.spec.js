/* eslint-env jest */
/* question

Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

文字列が与えられる，インデックス0から初めて偶数番目の文字で合成した "Hello" -> "Hlo" のような文字列を返せ。

stringBits("Hello") → "Hlo"
stringBits("Hi") → "H"
stringBits("Heeololeo") → "Hello"
*/

const stringBits = (str) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('stringBits(str)', () => {
  it('stringBits("Hello") -> "Hlo"', () => {
    expect(stringBits('Hello')).toBe('Hlo')
  })

  it('stringBits("Hi") -> "H"', () => {
    expect(stringBits('Hi')).toBe('H')
  })

  it('stringBits("Heeololeo") -> "Hello"', () => {
    expect(stringBits('Heeololeo')).toBe('Hello')
  })

  it('stringBits("HiHiHi") -> "HHH"', () => {
    expect(stringBits('HiHiHi')).toBe('HHH')
  })

  it('stringBits("") -> ""', () => {
    expect(stringBits('')).toBe('')
  })

  it('stringBits("Greetings") -> "Getns"', () => {
    expect(stringBits('Greetings')).toBe('Getns')
  })

  it('stringBits("Chocoate") -> "Coot"', () => {
    expect(stringBits('Chocoate')).toBe('Coot')
  })

  it('stringBits("pi") -> "p"', () => {
    expect(stringBits('pi')).toBe('p')
  })

  it('stringBits("Hello Kitten") -> "HloKte"', () => {
    expect(stringBits('Hello Kitten')).toBe('HloKte')
  })

  it('stringBits("hxaxpxpxy") -> "happy"', () => {
    expect(stringBits('hxaxpxpxy')).toBe('happy')
  })
})
