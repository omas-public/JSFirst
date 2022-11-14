/* eslint-env jest */
/* question

Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation  then on weekdays it should be "10:00" and weekends it should be "off".

alarmClock(1, false) → "7:00"
alarmClock(5, false) → "7:00"
alarmClock(0, false) → "10:00"
*/


const alarmClock = (day, vacation) => {
// write code here


}

/* -- test code ----------------------------------------*/
describe('alarmClock(day, vacation)', () => {

  it('alarmClock(1, false) -> "7:00"', () => {
    expect(alarmClock(1, false)).toBe("7:00")
  })

  it('alarmClock(5, false) -> "7:00"', () => {
    expect(alarmClock(5, false)).toBe("7:00")
  })

  it('alarmClock(0, false) -> "10:00"', () => {
    expect(alarmClock(0, false)).toBe("10:00")
  })

  it('alarmClock(6, false) -> "10:00"', () => {
    expect(alarmClock(6, false)).toBe("10:00")
  })

  it('alarmClock(0, true) -> "off"', () => {
    expect(alarmClock(0, true)).toBe("off")
  })

  it('alarmClock(6, true) -> "off"', () => {
    expect(alarmClock(6, true)).toBe("off")
  })

  it('alarmClock(1, true) -> "10:00"', () => {
    expect(alarmClock(1, true)).toBe("10:00")
  })

  it('alarmClock(3, true) -> "10:00"', () => {
    expect(alarmClock(3, true)).toBe("10:00")
  })

  it('alarmClock(5, true) -> "10:00"', () => {
    expect(alarmClock(5, true)).toBe("10:00")
  })

})
