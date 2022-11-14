# CodingBat Exercise Solution

## WarmUP Array

[arrayFront9](../spec/arrayFront9.spec.js)
```js
const arrayFront9 = (nums) => {
  return nums.slice(0, 4).includes(9)
}
```
[array123](../spec/array123.spec.js)
```js
const array123 = (nums) => {
// write code here
  const f = (v, i, a) => [a[i - 2], a[i - 1], v].join('')
  return nums.map(f).includes('123', 2)
}
```

[stringSplosion](../spec/stringSplosion.spec.js)
```js
const stringSplosion = (str) => {
  const f = (v, i, a) => a.slice(0, i + 1).join('')
  return Array.from(str).map(f).join('')
}
```

[noTriples](../spec/noTriples.spec.js)
```js
const noTriples = (nums) => {
  // write code here
  const mf = (v, i, a) => [a[i - 2], a[i - 1], v]
  const sf = ([head, ...rest]) => rest.every(v => v === head)
  return !nums.map(mf).slice(2).some(sf)
}
```

[arrayCount9](../spec/arrayCount9.spec.js)
```js
const arrayCount9 = (nums) => {
// write code here
  const f = v => /9/.test(v)
  return nums.filter(f).length
}
```
[stringBits](../spec/stringBits.spec.js)
```js
const stringBits = (str) => {
// write code here
  const f = (v, i) => i % 2 === 0
  return Array.from(str).filter(f).join('')
}
```

[countXX](../spec/countXX.spec.js)
```js
const countXX = (str) => {
  const mf = (v, i, a) => [a[i - 1], v].join('')
  const ff = v => /xx/.test(v)
  return Array.from(str).map(mf).slice(1).filter(ff).length
}
```

[last2](../spec/last2.spec.js)
```js
const last2 = (str) => {
  const mf = (v, i, a) => [a[i - 1], v].join('')
  const ff = (regix => v => regix.test(v))(new RegExp(str.slice(-2))
  return str.length !== 0
    ? Array.from(str).map(mf).filter(ff).length - 1
    : 0
}
```

[array667](../spec/array667.spec.js)
```js
const array667 = (nums) => {
  // write code here
  const mf = (v, i, a) => [a[i - 1], v].join('')
  const ff = v => /6[67]/.test(v)
  return nums.map(mf).slice(1).filter(ff).length
}
```

[has271](../spec/has271.spec.js)
```js
const has271 = (nums) => {
// write code here
  const f = (v, i, a) => 
    v + 5 === a[i + 1] && Math.abs((v - 1) - a[i + 2]) <= 2

  return nums.some(f)
}
```

[altPairs](../spec/altPairs.spec.js)
```js
const altPairs = (str) => {
  const f = (buf, v, i, a) => (i % 4 === 0)
    ? [buf, v, a[i + 1]].join('')
    : buf
  
  return Array.from(str).reduce(f, '')
}
```

[stringMatch](../spec/stringMatch.spec.js)
```js
const zip = (...args) => {
  const size = Math.min(...Array.from(args, arg => arg.length))
  return Array.from(Array(size), (v, i) => args.map(arg => arg[i]))
}

const stringMatch = (a, b) => {
  const mf = (v, i, a) => [a[i - 1], v].join('')
  const f = a => Array.from(a).map(mf).slice(1)
  const eq = ([a, b]) => a === b
  
  return zip(f(a), f(b)).filter(eq).length
}
```