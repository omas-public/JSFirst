/* eslint-env jest */
/* question

Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged. (See also: FizzBuzz Code)

fizzString("fig") → "Fizz"
fizzString("dib") → "Buzz"
fizzString("fib") → "FizzBuzz"
*/


const fizzString = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('fizzString(str)', () => {

  it('fizzString("fig") -> "Fizz"', () => {
    expect(fizzString("fig")).toBe("Fizz")
  })

  it('fizzString("dib") -> "Buzz"', () => {
    expect(fizzString("dib")).toBe("Buzz")
  })

  it('fizzString("fib") -> "FizzBuzz"', () => {
    expect(fizzString("fib")).toBe("FizzBuzz")
  })

  it('fizzString("abc") -> "abc"', () => {
    expect(fizzString("abc")).toBe("abc")
  })

  it('fizzString("fooo") -> "Fizz"', () => {
    expect(fizzString("fooo")).toBe("Fizz")
  })

  it('fizzString("booo") -> "booo"', () => {
    expect(fizzString("booo")).toBe("booo")
  })

  it('fizzString("ooob") -> "Buzz"', () => {
    expect(fizzString("ooob")).toBe("Buzz")
  })

  it('fizzString("fooob") -> "FizzBuzz"', () => {
    expect(fizzString("fooob")).toBe("FizzBuzz")
  })

  it('fizzString("f") -> "Fizz"', () => {
    expect(fizzString("f")).toBe("Fizz")
  })

  it('fizzString("b") -> "Buzz"', () => {
    expect(fizzString("b")).toBe("Buzz")
  })

  it('fizzString("abcb") -> "Buzz"', () => {
    expect(fizzString("abcb")).toBe("Buzz")
  })

  it('fizzString("Hello") -> "Hello"', () => {
    expect(fizzString("Hello")).toBe("Hello")
  })

  it('fizzString("Hellob") -> "Buzz"', () => {
    expect(fizzString("Hellob")).toBe("Buzz")
  })

  it('fizzString("af") -> "af"', () => {
    expect(fizzString("af")).toBe("af")
  })

  it('fizzString("bf") -> "bf"', () => {
    expect(fizzString("bf")).toBe("bf")
  })

  it('fizzString("fb") -> "FizzBuzz"', () => {
    expect(fizzString("fb")).toBe("FizzBuzz")
  })

})
