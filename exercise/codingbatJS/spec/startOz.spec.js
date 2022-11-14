/* eslint-env jest */
/* question

Given a string, return a string made of the first 2 chars (if present), however include first char only if it is 'o' and include the second only if it is 'z', so "ozymandias" yields "oz".

startOz("ozymandias") → "oz"
startOz("bzoo") → "z"
startOz("oxx") → "o"
*/

const startOz = (str) => {
// use String.slice()
// write code here

}

/* -- test code ---------------------------------------- */
describe('startOz(str)', () => {
  it('startOz("ozymandias") -> "oz"', () => {
    expect(startOz('ozymandias')).toBe('oz')
  })

  it('startOz("bzoo") -> "z"', () => {
    expect(startOz('bzoo')).toBe('z')
  })

  it('startOz("oxx") -> "o"', () => {
    expect(startOz('oxx')).toBe('o')
  })

  it('startOz("oz") -> "oz"', () => {
    expect(startOz('oz')).toBe('oz')
  })

  it('startOz("ounce") -> "o"', () => {
    expect(startOz('ounce')).toBe('o')
  })

  it('startOz("o") -> "o"', () => {
    expect(startOz('o')).toBe('o')
  })

  it('startOz("abc") -> ""', () => {
    expect(startOz('abc')).toBe('')
  })

  it('startOz("") -> ""', () => {
    expect(startOz('')).toBe('')
  })

  it('startOz("zoo") -> ""', () => {
    expect(startOz('zoo')).toBe('')
  })

  it('startOz("aztec") -> "z"', () => {
    expect(startOz('aztec')).toBe('z')
  })

  it('startOz("zzzz") -> "z"', () => {
    expect(startOz('zzzz')).toBe('z')
  })

  it('startOz("oznic") -> "oz"', () => {
    expect(startOz('oznic')).toBe('oz')
  })
})
