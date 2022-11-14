/* eslint-env jest */
/* question

The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

引数 weekdayがtrueの場合は平日を表し，引数 vacation がtrueの場合は休日を表す。平日でない場合あるいは休日の場合は寝ていたい。寝ていられるときは true を返せ

sleepIn(false, false) → true
sleepIn(true, false) → false
sleepIn(false, true) → true
*/

const sleepIn = (weekday, vacation) => {
// write code here

}

/* -- test code ---------------------------------------- */
describe('sleepIn(weekday, vacation)', () => {
  it('sleepIn(false, false) -> true', () => {
    expect(sleepIn(false, false)).toBe(true)
  })

  it('sleepIn(true, false) -> false', () => {
    expect(sleepIn(true, false)).toBe(false)
  })

  it('sleepIn(false, true) -> true', () => {
    expect(sleepIn(false, true)).toBe(true)
  })

  it('sleepIn(true, true) -> true', () => {
    expect(sleepIn(true, true)).toBe(true)
  })
})
