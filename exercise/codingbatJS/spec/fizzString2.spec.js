/* eslint-env jest */
/* question

Given an int n, return the string form of the number followed by "!". So the int 6 yields "6!". Except if the number is divisible by 3 use "Fizz" instead of the number, and if the number is divisible by 5 use "Buzz", and if divisible by both 3 and 5, use "FizzBuzz". Note: the % "mod" operator computes the remainder after division, so 23 % 10 yields 3. What will the remainder be when one number divides evenly into another? (See also: FizzBuzz Code and Introduction to Mod)

fizzString2(1) → "1!"
fizzString2(2) → "2!"
fizzString2(3) → "Fizz!"
*/


const fizzString2 = (n) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('fizzString2(n)', () => {

  it('fizzString2(1) -> "1!"', () => {
    expect(fizzString2(1)).toBe("1!")
  })

  it('fizzString2(2) -> "2!"', () => {
    expect(fizzString2(2)).toBe("2!")
  })

  it('fizzString2(3) -> "Fizz!"', () => {
    expect(fizzString2(3)).toBe("Fizz!")
  })

  it('fizzString2(4) -> "4!"', () => {
    expect(fizzString2(4)).toBe("4!")
  })

  it('fizzString2(5) -> "Buzz!"', () => {
    expect(fizzString2(5)).toBe("Buzz!")
  })

  it('fizzString2(6) -> "Fizz!"', () => {
    expect(fizzString2(6)).toBe("Fizz!")
  })

  it('fizzString2(7) -> "7!"', () => {
    expect(fizzString2(7)).toBe("7!")
  })

  it('fizzString2(8) -> "8!"', () => {
    expect(fizzString2(8)).toBe("8!")
  })

  it('fizzString2(9) -> "Fizz!"', () => {
    expect(fizzString2(9)).toBe("Fizz!")
  })

  it('fizzString2(15) -> "FizzBuzz!"', () => {
    expect(fizzString2(15)).toBe("FizzBuzz!")
  })

  it('fizzString2(16) -> "16!"', () => {
    expect(fizzString2(16)).toBe("16!")
  })

  it('fizzString2(18) -> "Fizz!"', () => {
    expect(fizzString2(18)).toBe("Fizz!")
  })

  it('fizzString2(19) -> "19!"', () => {
    expect(fizzString2(19)).toBe("19!")
  })

  it('fizzString2(21) -> "Fizz!"', () => {
    expect(fizzString2(21)).toBe("Fizz!")
  })

  it('fizzString2(44) -> "44!"', () => {
    expect(fizzString2(44)).toBe("44!")
  })

  it('fizzString2(45) -> "FizzBuzz!"', () => {
    expect(fizzString2(45)).toBe("FizzBuzz!")
  })

  it('fizzString2(100) -> "Buzz!"', () => {
    expect(fizzString2(100)).toBe("Buzz!")
  })

})
