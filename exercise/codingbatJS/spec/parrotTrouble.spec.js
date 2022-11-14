/* eslint-env jest */
/* question

We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23. We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

私達はうるさくしゃべるオウムを飼っている，引数 "hour" は時刻を表し0から23の範囲である。オウムが7時前あるいは20時以降にしゃべると私達は困る。困っているときはtrueを返せ

parrotTrouble(true, 6) → true
parrotTrouble(true, 7) → false
parrotTrouble(false, 6) → false
*/

const parrotTrouble = (talking, hour) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('parrotTrouble(talking, hour)', () => {
  it('parrotTrouble(true, 6) -> true', () => {
    expect(parrotTrouble(true, 6)).toBe(true)
  })

  it('parrotTrouble(true, 7) -> false', () => {
    expect(parrotTrouble(true, 7)).toBe(false)
  })

  it('parrotTrouble(false, 6) -> false', () => {
    expect(parrotTrouble(false, 6)).toBe(false)
  })

  it('parrotTrouble(true, 21) -> true', () => {
    expect(parrotTrouble(true, 21)).toBe(true)
  })

  it('parrotTrouble(false, 21) -> false', () => {
    expect(parrotTrouble(false, 21)).toBe(false)
  })

  it('parrotTrouble(false, 20) -> false', () => {
    expect(parrotTrouble(false, 20)).toBe(false)
  })

  it('parrotTrouble(true, 23) -> true', () => {
    expect(parrotTrouble(true, 23)).toBe(true)
  })

  it('parrotTrouble(false, 23) -> false', () => {
    expect(parrotTrouble(false, 23)).toBe(false)
  })

  it('parrotTrouble(true, 20) -> false', () => {
    expect(parrotTrouble(true, 20)).toBe(false)
  })

  it('parrotTrouble(false, 12) -> false', () => {
    expect(parrotTrouble(false, 12)).toBe(false)
  })
})
