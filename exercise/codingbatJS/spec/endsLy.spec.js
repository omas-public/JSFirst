/* eslint-env jest */
/* question

Given a string, return true if it ends in "ly".

endsLy("oddly") → true
endsLy("y") → false
endsLy("oddy") → false
*/


const endsLy = (str) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('endsLy(str)', () => {

  it('endsLy("oddly") -> true', () => {
    expect(endsLy("oddly")).toBe(true)
  })

  it('endsLy("y") -> false', () => {
    expect(endsLy("y")).toBe(false)
  })

  it('endsLy("oddy") -> false', () => {
    expect(endsLy("oddy")).toBe(false)
  })

  it('endsLy("oddl") -> false', () => {
    expect(endsLy("oddl")).toBe(false)
  })

  it('endsLy("olydd") -> false', () => {
    expect(endsLy("olydd")).toBe(false)
  })

  it('endsLy("ly") -> true', () => {
    expect(endsLy("ly")).toBe(true)
  })

  it('endsLy("") -> false', () => {
    expect(endsLy("")).toBe(false)
  })

  it('endsLy("falsey") -> false', () => {
    expect(endsLy("falsey")).toBe(false)
  })

  it('endsLy("evenly") -> true', () => {
    expect(endsLy("evenly")).toBe(true)
  })

})
