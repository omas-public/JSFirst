/* eslint-env jest */
/* question

We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, if either tea or candy is less than 5, the party is always bad (0).

teaParty(6, 8) → 1
teaParty(3, 8) → 0
teaParty(20, 6) → 2
*/


const teaParty = (tea, candy) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('teaParty(tea, candy)', () => {

  it('teaParty(6, 8) -> 1', () => {
    expect(teaParty(6, 8)).toBe(1)
  })

  it('teaParty(3, 8) -> 0', () => {
    expect(teaParty(3, 8)).toBe(0)
  })

  it('teaParty(20, 6) -> 2', () => {
    expect(teaParty(20, 6)).toBe(2)
  })

  it('teaParty(12, 6) -> 2', () => {
    expect(teaParty(12, 6)).toBe(2)
  })

  it('teaParty(11, 6) -> 1', () => {
    expect(teaParty(11, 6)).toBe(1)
  })

  it('teaParty(11, 4) -> 0', () => {
    expect(teaParty(11, 4)).toBe(0)
  })

  it('teaParty(4, 5) -> 0', () => {
    expect(teaParty(4, 5)).toBe(0)
  })

  it('teaParty(5, 5) -> 1', () => {
    expect(teaParty(5, 5)).toBe(1)
  })

  it('teaParty(6, 6) -> 1', () => {
    expect(teaParty(6, 6)).toBe(1)
  })

  it('teaParty(5, 10) -> 2', () => {
    expect(teaParty(5, 10)).toBe(2)
  })

  it('teaParty(5, 9) -> 1', () => {
    expect(teaParty(5, 9)).toBe(1)
  })

  it('teaParty(10, 4) -> 0', () => {
    expect(teaParty(10, 4)).toBe(0)
  })

  it('teaParty(10, 20) -> 2', () => {
    expect(teaParty(10, 20)).toBe(2)
  })

})
