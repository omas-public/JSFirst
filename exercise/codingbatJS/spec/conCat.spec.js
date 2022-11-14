/* eslint-env jest */
/* question

Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

conCat("abc", "cat") → "abcat"
conCat("dog", "cat") → "dogcat"
conCat("abc", "") → "abc"
*/


const conCat = (a, b) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('conCat(a, b)', () => {

  it('conCat("abc", "cat") -> "abcat"', () => {
    expect(conCat("abc", "cat")).toBe("abcat")
  })

  it('conCat("dog", "cat") -> "dogcat"', () => {
    expect(conCat("dog", "cat")).toBe("dogcat")
  })

  it('conCat("abc", "") -> "abc"', () => {
    expect(conCat("abc", "")).toBe("abc")
  })

  it('conCat("", "cat") -> "cat"', () => {
    expect(conCat("", "cat")).toBe("cat")
  })

  it('conCat("pig", "g") -> "pig"', () => {
    expect(conCat("pig", "g")).toBe("pig")
  })

  it('conCat("pig", "doggy") -> "pigdoggy"', () => {
    expect(conCat("pig", "doggy")).toBe("pigdoggy")
  })

})
