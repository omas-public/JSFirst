/* eslint-env jest */
/* question

Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".

helloName("Bob") → "Hello Bob!"
helloName("Alice") → "Hello Alice!"
helloName("X") → "Hello X!"
*/


const helloName = (name) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('helloName(name)', () => {

  it('helloName("Bob") -> "Hello Bob!"', () => {
    expect(helloName("Bob")).toBe("Hello Bob!")
  })

  it('helloName("Alice") -> "Hello Alice!"', () => {
    expect(helloName("Alice")).toBe("Hello Alice!")
  })

  it('helloName("X") -> "Hello X!"', () => {
    expect(helloName("X")).toBe("Hello X!")
  })

  it('helloName("Dolly") -> "Hello Dolly!"', () => {
    expect(helloName("Dolly")).toBe("Hello Dolly!")
  })

  it('helloName("Alpha") -> "Hello Alpha!"', () => {
    expect(helloName("Alpha")).toBe("Hello Alpha!")
  })

  it('helloName("Omega") -> "Hello Omega!"', () => {
    expect(helloName("Omega")).toBe("Hello Omega!")
  })

  it('helloName("Goodbye") -> "Hello Goodbye!"', () => {
    expect(helloName("Goodbye")).toBe("Hello Goodbye!")
  })

  it('helloName("ho ho ho") -> "Hello ho ho ho!"', () => {
    expect(helloName("ho ho ho")).toBe("Hello ho ho ho!")
  })

  it('helloName("xyz!") -> "Hello xyz!!"', () => {
    expect(helloName("xyz!")).toBe("Hello xyz!!")
  })

  it('helloName("Hello") -> "Hello Hello!"', () => {
    expect(helloName("Hello")).toBe("Hello Hello!")
  })

})
