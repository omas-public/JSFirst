/* eslint-env jest */
/* question

Given two strings, a and b, return the result of putting them together in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".

makeAbba("Hi", "Bye") → "HiByeByeHi"
makeAbba("Yo", "Alice") → "YoAliceAliceYo"
makeAbba("What", "Up") → "WhatUpUpWhat"
*/


const makeAbba = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('makeAbba(a, b)', () => {

  it('makeAbba("Hi", "Bye") -> "HiByeByeHi"', () => {
    expect(makeAbba("Hi", "Bye")).toBe("HiByeByeHi")
  })

  it('makeAbba("Yo", "Alice") -> "YoAliceAliceYo"', () => {
    expect(makeAbba("Yo", "Alice")).toBe("YoAliceAliceYo")
  })

  it('makeAbba("What", "Up") -> "WhatUpUpWhat"', () => {
    expect(makeAbba("What", "Up")).toBe("WhatUpUpWhat")
  })

  it('makeAbba("aaa", "bbb") -> "aaabbbbbbaaa"', () => {
    expect(makeAbba("aaa", "bbb")).toBe("aaabbbbbbaaa")
  })

  it('makeAbba("x", "y") -> "xyyx"', () => {
    expect(makeAbba("x", "y")).toBe("xyyx")
  })

  it('makeAbba("x", "") -> "xx"', () => {
    expect(makeAbba("x", "")).toBe("xx")
  })

  it('makeAbba("", "y") -> "yy"', () => {
    expect(makeAbba("", "y")).toBe("yy")
  })

  it('makeAbba("Bo", "Ya") -> "BoYaYaBo"', () => {
    expect(makeAbba("Bo", "Ya")).toBe("BoYaYaBo")
  })

  it('makeAbba("Ya", "Ya") -> "YaYaYaYa"', () => {
    expect(makeAbba("Ya", "Ya")).toBe("YaYaYaYa")
  })

})
