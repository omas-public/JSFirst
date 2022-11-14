# CodingBat Exercise Solution

## WarmUP String

### 文字列の切り取り，繰り返し，大文字/小文字

- String.length
- String.charAt(n)
- String.slice(n, m)
- String.repeat(n)
- String.toUpperCase() / String.toLowerCase()

[front22](../spec/front22.spec.js)
```js
const front22 = (str) => {
  const front = str.slice(0, 2)
  return [front, str, front].join('')
}
```

[backAround](../spec/backAround.spec.js)
```js
const backAround = (str) => {
  const back = str.slice(-1)
  return [back, str, back].join('')
}
```
[missingChar](../spec/missingChar.spec.js)
```js
const missingChar = (str, n) => {
  return [str.slice(0, n), str.slice(n + 1)].join('')
}
```
[frontBack](../spec/frontBack.spec.js)
```js
const frontBack = (str) => {
  const [first, middle, last] = [str[0], str.slice(1, -1), str.slice(-1)]
  return str.length > 1
    ? [last, middle, first].join('')
    : str
}
```
[stringTimes](../spec/frontBack.spec.js)
```js
const stringTimes = (str, n) => {
  return str.repeat(n)
}
```
[front3](../spec/front3.spec.js)
```js
const front3 = (str) => {
  return str.slice(0, 3).repeat(3)
}
```
[frontTimes](../spec/frontTimes.spec.js)
```js
const frontTimes = (str, n) => {
  return str.slice(0, 3).repeat(n)
}
```

[endUp](../spec/endUp.spec.js)
```js
const endUp = (str) => {
  return [
    str.slice(0, -3),
    str.slice(-3).toUpperCase()
  ].join('')
}
```
[startOz](../spec/startOz.spec.js)
```js
const startOz = (str) => {
  const f = str => (index, c) => str.charAt(index) === c ? c : ''
  
  return [
    f(str)(0, 'o'),
    f(str)(1, 'z')
  ].join('')
}
```

### 文字列の検索，置換

- RegExp.test(s)
- String.match()
- String.indexOf(s)
- String.includes(s)
- String.startsWith / String.endsWith
- String.replace(old, new) / String.replaceAll(old, new)

[doubleX](../spec/doubleX.spec.js)
```js
const doubleX = (str) => {
  const search = str.indexOf('x') + 1
  return str.charAt(search) === 'x'
}
```

[mixStart](../spec/mixStart.spec.js)
```js
const mixStart = (start) => {
  return /^.ix.*$/.test(start)
}
```

[stringE](../spec/stringE.spec.js)
```js
const stringE = (str) => {
  const f = (a, b) => c => a <= c && c <= b
  const count = (str.match(/e/g) ?? []).length
  return f(1, 3)(count)
}
```

[startHi](../spec/startHi.spec.js)
```js
const startHi = (str) => {
  return str.startsWith('hi')
}
```
[notString](../spec/notString.spec.js)
```js
const notString = (str) => {
  return str.startsWith('not')
    ? str
    : `not ${str}`
}
```

[stringYak](../spec/stringYak.spec.js)
```js
const stringYak = (str) => {
  return str.replace(/yak/g, '')
}
```

[delDel](../spec/delDel.spec.js)
```js
const delDel = (str) => {
  return str.startsWith('del', 1)
    ? str.replace(/del/, '')
    : str
}
```

[stringX](../spec/stringX.spec.js)
```js
const stringX = (str) => {
  const [first, middle, last] = [str.charAt(0), str.slice(1, -1), str.slice(-1)]
  if (str.length <= 1) return str
  return [
    first,
    middle.replace(/x/g, ''),
    last
  ].join('')
}
```
[everyNth](../spec/everyNth)
```js
const everyNth = (str, n) => {
  const f = n => (_, i) => i % n === 0
  return str.split('').filter(f(n)).join('')
}
```


