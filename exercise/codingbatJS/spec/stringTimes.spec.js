/* eslint-env jest */
/* question

Given a string and a non-negative int n, return a larger string that is n copies of the original string.

文字列と正の整数が与えられる。元の文字列をn回コピーした新しい文字列を返せ。

stringTimes("Hi", 2) → "HiHi"
stringTimes("Hi", 3) → "HiHiHi"
stringTimes("Hi", 1) → "Hi"
*/

const stringTimes = (str, n) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('stringTimes(str, n)', () => {
  it('stringTimes("Hi", 2) -> "HiHi"', () => {
    expect(stringTimes('Hi', 2)).toBe('HiHi')
  })

  it('stringTimes("Hi", 3) -> "HiHiHi"', () => {
    expect(stringTimes('Hi', 3)).toBe('HiHiHi')
  })

  it('stringTimes("Hi", 1) -> "Hi"', () => {
    expect(stringTimes('Hi', 1)).toBe('Hi')
  })

  it('stringTimes("Hi", 0) -> ""', () => {
    expect(stringTimes('Hi', 0)).toBe('')
  })

  it('stringTimes("Hi", 5) -> "HiHiHiHiHi"', () => {
    expect(stringTimes('Hi', 5)).toBe('HiHiHiHiHi')
  })

  it('stringTimes("Oh Boy!", 2) -> "Oh Boy!Oh Boy!"', () => {
    expect(stringTimes('Oh Boy!', 2)).toBe('Oh Boy!Oh Boy!')
  })

  it('stringTimes("x", 4) -> "xxxx"', () => {
    expect(stringTimes('x', 4)).toBe('xxxx')
  })

  it('stringTimes("", 4) -> ""', () => {
    expect(stringTimes('', 4)).toBe('')
  })

  it('stringTimes("code", 2) -> "codecode"', () => {
    expect(stringTimes('code', 2)).toBe('codecode')
  })

  it('stringTimes("code", 3) -> "codecodecode"', () => {
    expect(stringTimes('code', 3)).toBe('codecodecode')
  })
})
