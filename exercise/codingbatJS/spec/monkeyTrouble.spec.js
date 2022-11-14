/* eslint-env jest */
/* question

We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

2匹の猿(a, b)を飼っている，引数 aSmileとbSmileは彼らが笑っているかを指し示している。私達は彼らが両方笑っている時，または両方笑っていない時にトラブルに巻き込まれる。トラブルかどうか返せ

monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false
*/

const monkeyTrouble = (aSmile, bSmile) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('monkeyTrouble(aSmile, bSmile)', () => {
  it('monkeyTrouble(true, true) -> true', () => {
    expect(monkeyTrouble(true, true)).toBe(true)
  })

  it('monkeyTrouble(false, false) -> true', () => {
    expect(monkeyTrouble(false, false)).toBe(true)
  })

  it('monkeyTrouble(true, false) -> false', () => {
    expect(monkeyTrouble(true, false)).toBe(false)
  })

  it('monkeyTrouble(false, true) -> false', () => {
    expect(monkeyTrouble(false, true)).toBe(false)
  })
})
