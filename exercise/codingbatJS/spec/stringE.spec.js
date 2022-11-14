/* eslint-env jest */
/* question

Return true if the given string contains between 1 and 3 'e' chars.

文字列が与えられる，1文字目から3文字目までに'e' が含まれていればtrueを返せ

stringE("Hello") → true
stringE("Heelle") → true
stringE("Heelele") → false
*/

const stringE = (str) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('stringE(str)', () => {
  it('stringE("Hello") -> true', () => {
    expect(stringE('Hello')).toBe(true)
  })

  it('stringE("Heelle") -> true', () => {
    expect(stringE('Heelle')).toBe(true)
  })

  it('stringE("Heelele") -> false', () => {
    expect(stringE('Heelele')).toBe(false)
  })

  it('stringE("Hll") -> false', () => {
    expect(stringE('Hll')).toBe(false)
  })

  it('stringE("e") -> true', () => {
    expect(stringE('e')).toBe(true)
  })

  it('stringE("") -> false', () => {
    expect(stringE('')).toBe(false)
  })
})
