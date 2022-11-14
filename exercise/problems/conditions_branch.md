# [条件分岐メニュー](https://paiza.jp/works/mondai/conditions_branch/problem_index?language_uid=javascript)

入力処理は以下を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
const lines = stream.split('\n')
const matrix = stream.split('\n').map(line => line.split(' '))
```


## 0 が含まれていないか判定


### [final 0 が含まれていないか判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__simple_boss/edit?language_uid=javascript)

- [Array.protorype.includes](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...rest] = stream.split('\n').map(Number)

const result = rest.includes(0) ? 'NO' : 'YES'
console.log(result)
```


### [STEP: 1 単純な条件分岐](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__simple_step1/edit?language_uid=javascript)

- [3項演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = S === 'paiza' ? 'YES' : 'NO'
console.log(result)

```

### [STEP: 2 数値の分岐](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__simple_step2/edit?language_uid=javascript)

- [3項演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream) 

const result = N <= 100  ? 'YES' : 'NO'
console.log(result)

```

### [STEP: 3 数値演算結果で分岐](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__simple_step3/edit?language_uid=javascript)

- [3項演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B, C] = stream.split(' ').map(Number)

const result = (A * B <= C) ? 'YES' : 'NO'
console.log(result)

```

### [STEP: 4 ゼロ以外](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__simple_step4/edit?language_uid=javascript)

- [3項演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const result = (N !== 0) ? 'YES' : 'NO'
console.log(result)

```

### [final AND+OR](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__bool_boss/edit?language_uid=javascript)

#### and/or オペレータを使う方法

- [3項演算子](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [X, Y, Z] = stream.split(' ').map(Number)

const result = ((Z >= 10) || (X >= 10 && Y >= 10)) ? 'YES' : 'NO'
console.log(result)
```

#### Arrayのメソッドを使う方法

- [Array.prototype.some()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- [Array.prototype.every()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [X, Y, Z] = stream.split(' ').map(Number)

const overN = base => n => n >= base
const result = [overN(10)(Z), [X, Y].every(overN(10))].some(pred => pred) ? 'YES' : 'NO'
console.log(result)

```

### [STEP: 1 AND](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__bool_step1/edit?language_uid=javascript)

- And(&&)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ').map(Number)

const result = (A >= 10 && B >= 10) ? 'YES' : 'NO'
console.log(result)

```

- [Array.prototype.every](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ').map(Number)

const greaterEqualN = N => n => n >= N
const result = [A, B].every(greaterEqualN(10)) ? 'YES' : 'NO'
console.log(result)

```

### [STEP: 2 大文字判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__bool_step2/edit?language_uid=javascript)

- [RegExp.prototype.test()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)

```js
const C = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = (/^[A-Z]$/.test(C)) ? 'YES' : 'NO'
console.log(result)

```

- [String.prototype.charCodeAt()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)

```js
const C = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cp = C.charCodeAt(0)
const result = (cp >= 0x41 && cp <= 0x5A) ? 'YES' : 'NO'
console.log(result)
```

### [STEP: 3 OR](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__bool_step3/edit?language_uid=javascript)

- Or(||)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ').map(Number)

const result = (A >= 10 || B >= 10) ? 'YES' : 'NO'
console.log(result)

```

- [Array.prototype.some()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ').map(Number)

const greaterOrEqualN = N => n => n >= N
const result = [A, B].some(greaterOrEqualN(10)) ? 'YES' : 'NO'
console.log(result)

```
### [STEP: 4 NOT](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__bool_step4/edit?language_uid=javascript)

- NOT(!)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const X = parseInt(stream)

const result = !(X >= 10) ? 'YES' : 'NO'
console.log(result)
```

### [STEP: 5 AND+NOT](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__bool_step5/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ').map(Number)

const result = (A >= 10 && !(B >= 10)) ? 'YES' : 'NO'
console.log(result)
```

- Array.prototype.every

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ').map(Number)

const gteN = N => n => n >= N
const gte10 = gteN(10)
const result = [gte10(A), !gte10(B)].every(pred => pred) ? 'YES' : 'NO'
console.log(result)
```


## FizzBuzz

### [Final FizzBuzz](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__mod_boss/edit?language_uid=javascript&t=082b6f654111a6f8cab278b2fb9fd459)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const fun = n => ([key, value]) => n % key === 0 ? value : null
const matrix = [[3, 'Fizz'], [5, 'Buzz']]

const result = matrix.map(fun(N)).join('') ?? N
console.log(result)

```

### [STEP: 1 3 の倍数判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__mod_step1/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const fun = m => n => n % m === 0 
const result = fun(3)(N) ? 'YES' : 'NO'

console.log(result)
```

### [STEP: 2 2 つの倍数判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__mod_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const fun = m => n => n % m === 0 
const result = fun(3)(N) && fun(5)(N) ? 'YES' : 'NO'
console.log(result)

```

### [STEP: 3 偶奇の判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__mod_step3/edit?language_uid=javascript)

- [Array.prototype.filter](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AN] = stream.split('\n').map(line => line.split(' '))

const E = AN.filter(n => n % 2 === 0).length
const O = AN.filter(n => n % 2 === 1).length

console.log([E, O].join(' '))

```

- [Array.prototype.reduce](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AN] = stream.split('\n').map(line => line.split(' '))

const fun = (acc, n) => (n % 2 === 0) ? [acc[0] + 1, acc[1]] : [acc[0], acc[1] + 1]
const [O, E] = AN.reduce(fun, [0, 0])

console.log([O, E].join(' '))

```

### [STEP: 4 曜日の判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__mod_step4/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const X = parseInt(stream)

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const fun = m => n => n % m
const result = DAYS[fun(7)(X -1)]
console.log(result)

```


## 積の最小化

### [Final 積の最小化](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_boss/edit?language_uid=javascript)

- [Math.prototype.min()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/min)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ').map(Number)

const fun = (a, b) => [a * b, a ** 2, b ** 2]
const result = parseInt(Math.min(...fun(A, B)))
console.log(result)
```

### [STEP: 1 けた数の測定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step1/edit?language_uid=javascript)

- [Number.prototype.toString()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const result = N.toString().length
console.log(result)
```

### [STEP: 2 足したり引いたり](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, A, B] = stream.split(' ').map(Number)
const fun = (a, b) => [a + b, -a + b, a - b, -a - b]

const result = fun(A, B).includes(N) ? 'YES' : 'NO'
console.log(result)
```

### [STEP: 3 同値判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step3?language_uid=javascript)

- [Array.prototype.filter()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, A, B] = stream.split('\n').map(line => line.split(' '))
const equal = ([a, b]) => a === b
const array = A.map((v, i) => [v, B.at(i)]).filter(equal)

const result = array.length
console.log(result)
```
### [STEP: 4 終了判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step4?language_uid=javascript)

- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.slice()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.findIndex()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n').map(line => line.split(' ').map(Number))

const isOdd = n => n % 2 === 1
const sum = (...args) => args.reduce((a, b) => a + b)
const array = A.slice(0, A.findIndex(isOdd))
const result = sum(...array)
console.log(result)
```

### [STEP: 5 終了判定 2](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step5?language_uid=javascript)

- [Math.prototype.log2()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/log2)
- [Math.prototype.ceil()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, K] = stream.split(' ').map(Number)

const baseLog = (a, b) => Math.log2(b / a)
const result = Math.ceil(baseLog(N, K))
console.log(result)
```

- [Generator](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Generator)

Generatorを使用した例
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, K] = stream.split(' ').map(Number)

const gen = function* (n, k) {
  while (n < k)  yield n *= 2 
}
const g = gen(N, K)
const result = [...g].length
console.log(result)
```

### [STEP: 6  池の周回](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step6?language_uid=javascript)

- 3項演算子

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, K, T] = stream.split(' ').map(Number)

const result = K * T % N === 0 ? 'YES' : 'NO'
console.log(result)
```

### [STEP: 7 崖に落ちるか判定](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step7/edit?language_uid=javascript)

- 3項演算子

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, K, T] = stream.split(' ').map(Number)

const result = (K * N >= T) ? 'YES' : 'NO'
console.log(result)
```

### [STEP: 8 タイルの敷き詰め](https://paiza.jp/works/mondai/conditions_branch/conditions_branch__complex_step8?language_uid=javascript)

- [Array.prototype.every()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [H, W] = stream.split(' ').map(Number)

const fun = v => v % 2 === 0 && v !== 0
const result = [H, W].every(fun) ? 'YES' : 'NO'
console.log(result)
```