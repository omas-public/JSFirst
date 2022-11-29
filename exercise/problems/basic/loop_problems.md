# [ループメニュー1](https://paiza.jp/works/mondai/loop_problems/problem_index?language_uid=javascript)

入力は以下を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
const lines = stream.split('\n')
const matrix = stream.split('\n').map(line => line.split(' '))
```

## a ~ z までを表示

### [Final a ~ z までを表示](https://paiza.jp/works/mondai/loop_problems/loop_problems__print_alpha/edit?language_uid=javascript)
```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const n = 26
const offset = 9
const result = seq(n).map(v => v + offset)
  .map(v => v.toString(36)).join('\n')

console.log(result)
```

### [STEP: 1 ある数字までの出力 1](https://paiza.jp/works/mondai/loop_problems/loop_problems__print_num_step1/edit?language_uid=javascript)

```js
const seq = n => [...Array(n)].map((v, i) => i + 1)

const result = seq(10).join('\n')
console.log(result)
```

### [STEP: 2 ある数字までの出力 2](https://paiza.jp/works/mondai/loop_problems/loop_problems__print_num_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const seq = n => [...Array(n)].map((v, i) => i + 1)
const result = seq(N).join('\n')

console.log(result)
```

### [STEP: 3 数字の受け取り 1](https://paiza.jp/works/mondai/loop_problems/loop_problems__input_num_step1/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ').map(Number)

const result = cols.join('\n')

console.log(result)
```

### [STEP: 4 数字の受け取り 2](https://paiza.jp/works/mondai/loop_problems/loop_problems__input_num_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], K] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = K.join('\n')

console.log(result)
```

### [STEP: 5 ある数をある回数表示 1](https://paiza.jp/works/mondai/loop_problems/loop_problems__rep_num_step1/edit?language_uid=javascript)

```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const n = 8
const e = 3

const result = seq(n).fill(e).join('\n')
console.log(result) 
```

### [STEP: 6 ある数をある回数表示 2](https://paiza.jp/works/mondai/loop_problems/loop_problems__rep_num_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, K] = stream.split(' ').map(Number)

const seq = n => [...Array(n)].map((v, i) => i + 1)
const result = seq(K).fill(N).join('\n')

console.log(result) 
```

### [Final FizzBuzz](https://paiza.jp/works/mondai/loop_problems/loop_problems__fizzbuzz/edit?language_uid=javascript)
```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const fun = n => [[3:'Fizz'], [5:'Buzz']]
  .map(([m, s]) => n % m === 0 ? s : '').join('') || n

const result = seq(100).map(fun).join('\n')
console.log(result)
```

### [STEP: 1 数列の反転](https://paiza.jp/works/mondai/loop_problems/loop_problems__seq_reverse/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n')
  .map(line => line.split(' ').map(Number))

const result = [...A].reverse().join('\n')

console.log(result)
```

### [STEP: 2 九九の表示 1](https://paiza.jp/works/mondai/loop_problems/loop_problems__kuku_step1/edit?language_uid=javascript)

```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const n = 8

const result = seq(9).map(v => v * n).join(' ')

console.log(result)
```

### [STEP: 3 九九の表示 2](https://paiza.jp/works/mondai/loop_problems/loop_problems__kuku_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const seq = n => [...Array(n)].map((v, i) => i + 1)
const fun = n => v => v * n

const result = seq(9).map(fun(N)).join(' ')  

console.log(result)
```

### [STEP: 4 2 の累乗を表示](https://paiza.jp/works/mondai/loop_problems/loop_problems__pow2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const seq = n => [...Array(n)].map((v, i) => i + 1)

const fun = n => 2 ** n
const result = seq(N).map(fun).join('\n')  

console.log(result)
```

## 数列の中に何個ある?

### [Final 数列の中に何個ある?](https://paiza.jp/works/mondai/loop_problems/loop_problems__seq_max/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
const target = 1

const result = A.filter(v => v === target).length

console.log(result)
```

### [STEP: 1 数列の最大値](https://paiza.jp/works/mondai/loop_problems/loop_problems__seq_max/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n')
  .map(line => line.split(' ').map(Number))

const result = Math.max(...A)

console.log(result)
```

### [STEP: 2 数列の最小値](https://paiza.jp/works/mondai/loop_problems/loop_problems__seq_min/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n')
  .map(line => line.split(' ').map(Number))

const result = Math.min(...A)

console.log(result)

```

### [STEP: 3 数列の何番目にある?](https://paiza.jp/works/mondai/loop_problems/loop_problems__seq_i-th/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
const target = 1

const result = A.indexOf(target) + 1

console.log(result)
```
