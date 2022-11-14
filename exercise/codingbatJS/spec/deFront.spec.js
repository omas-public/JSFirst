/* eslint-env jest */
/* question

Given a string, return a version without the first 2 chars. Except keep the first char if it is 'a' and keep the second char if it is 'b'. The string may be any length. Harder than it looks.

deFront("Hello") → "llo"
deFront("java") → "va"
deFront("away") → "aay"
*/


const deFront = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('deFront(str)', () => {

  it('deFront("Hello") -> "llo"', () => {
    expect(deFront("Hello")).toBe("llo")
  })

  it('deFront("java") -> "va"', () => {
    expect(deFront("java")).toBe("va")
  })

  it('deFront("away") -> "aay"', () => {
    expect(deFront("away")).toBe("aay")
  })

  it('deFront("axy") -> "ay"', () => {
    expect(deFront("axy")).toBe("ay")
  })

  it('deFront("abc") -> "abc"', () => {
    expect(deFront("abc")).toBe("abc")
  })

  it('deFront("xby") -> "by"', () => {
    expect(deFront("xby")).toBe("by")
  })

  it('deFront("ab") -> "ab"', () => {
    expect(deFront("ab")).toBe("ab")
  })

  it('deFront("ax") -> "a"', () => {
    expect(deFront("ax")).toBe("a")
  })

  it('deFront("axb") -> "ab"', () => {
    expect(deFront("axb")).toBe("ab")
  })

  it('deFront("aaa") -> "aa"', () => {
    expect(deFront("aaa")).toBe("aa")
  })

  it('deFront("xbc") -> "bc"', () => {
    expect(deFront("xbc")).toBe("bc")
  })

  it('deFront("bbb") -> "bb"', () => {
    expect(deFront("bbb")).toBe("bb")
  })

  it('deFront("bazz") -> "zz"', () => {
    expect(deFront("bazz")).toBe("zz")
  })

  it('deFront("ba") -> ""', () => {
    expect(deFront("ba")).toBe("")
  })

  it('deFront("abxyz") -> "abxyz"', () => {
    expect(deFront("abxyz")).toBe("abxyz")
  })

  it('deFront("hi") -> ""', () => {
    expect(deFront("hi")).toBe("")
  })

  it('deFront("his") -> "s"', () => {
    expect(deFront("his")).toBe("s")
  })

  it('deFront("xz") -> ""', () => {
    expect(deFront("xz")).toBe("")
  })

  it('deFront("zzz") -> "z"', () => {
    expect(deFront("zzz")).toBe("z")
  })

})
