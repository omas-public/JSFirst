# CodingBat Exercise Solution

## WarmUP logic

### logical operator and Math methods

[monkeyTrouble](../spec/monkeyTrouble.spec.js)
```js
const monkeyTrouble = (aSmile, bSmile) => {
  return aSmile === bSmile
}
// or return !(aSmile ^ bSmile)
```

[sleepIn](../spec/sleepIn.spec.js)
```js
const sleepIn = (weekday, vacation) => {
  return !weekday || vacation
}
```

[sumDouble](../spec/sumDouble.spec.js)
```js
const sumDouble = (a, b) => {
  const sum = a + b
  return a === b ? sum * 2 : sum
}
```

[diff21](../spec/diff21.spec.js)
```js
const diff21 = (n) => {
  const f = n => Math.abs(21 - n)
  const diff = f(n)
  return n > 21 ? diff * 2 : diff
}
```

[close10](../spec/close10.spec.js)
```js
const close10 = (a, b) => {
  const f = n => Math.abs(10 - n)
  if (f(a) === f(b)) return 0
  return f(a) < f(b) ? a : b
}
```

### use function and Array methods

[makes10](../spec/makes10.spec.js)
```js
const makes10 = (a, b) => {
  return [a, b, a + b].includes(10)
}
```

[or35](../spec/or35.spec.js)
```js
const or35 = (n) => {
  const f = a => b => b % a === 0
  return [3, 5].some(f(n))
}
```

[nearHundred](../spec/nearHundred.spec.js)
```js
const nearHundred = (n) => {
  const f = a => b => c => Math.abs(b - c) <= a 
  const diff10 = f(10)(n)
  return [100, 200].some(diff10)
}
```

[icyHot](../spec/icyHot.spec.js)
```js
const icyHot = (temp1, temp2) => {
  const f = (a, b) => Math.min(a, b) < 0 && Math.max(a, b) > 100
  return f(temp1, temp2)
}
```

[intMax](../spec/intMax.spec.js)
```js
const intMax = (a, b, c) => {
  const f = (a, b) => a >= b ? a : b
  return [a, b, c].reduce(f)
}
// or Math.max(a, b, c)
```

### use between function and Array methods

[parrotTrouble](../spec/parrotTrouble.spec.js)
```js
const parrotTrouble = (talking, hour) => {
  const f = (a, b) => n => a <= n && n <= b
  const dayTime = f(7, 20)
  return talking && !dayTime(hour)
}
```

[loneTeen](../spec/loneTeen.spec.js)
```js
const loneTeen = (a, b) => {
// write code here
  const f = (a, b) => n => a <= n && n <= b
  const isTeen = f(13, 19)
  return isTeen(a) !== isTeen(b)
}
```

[in1020](../spec/in1020.spec.js)
```js
const in1020 = (a, b) => {
  const f = (a, b) => n => a <= n && n <= b
  const _in1020 = f(10, 20)
  return _in1020(a) || _in1020(b)
}
// or return [a, b].some(in1020)
```

[hasTeen](../spec/hasTeen.spec.js)
```js
const hasTeen = (a, b, c) => {
  const f = (a, b) => n => a <= n && n <= b
  const isTeen = f(13, 19)
  return [a, b, c].some(isTeen)
}
// or return isTeen(a) || isTeen(b) || isTeen(c)
```

[in3050](../spec/in3050.spec.js)
```js
const in3050 = (a, b) => {
  const f = (a, b) => n => a <= n && n <= b
  const in3040 = f(30, 40)
  const in4050 = f(40, 50)
  return [a, b].every(in3040) || [a, b].every(in4050)
}
// or return (in3040(a) && in3040(b)) || (in4050(a) && in4050(a))
```

[max1020](../spec/max1020.spec.js)
```js
const max1020 = (a, b) => {
  const f = (a, b) => n => a <= n && n <= b
  const in1020 = f(10, 20)
  if (!in1020(a) && !in1020(b)) return 0
  return Math.max(...[a, b].filter(in1020))
}
```

[posNeg](../spec/posNeg.spec.js)
```js
const posNeg = (a, b, negative) => {
  const _negative = n => n < 0
  const _bothNeg = (...args) => args.every(_negative)
  const _posNeg = (a, b) => _negative(a * b)
  return (negative && _bothNeg(a, b)) || (!negative && _posNeg(a, b))
}
```