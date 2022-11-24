author: Omas Naohiko
create: 2022-10-12
update: 2022-11-24

# [算術・代入演算メニュー](https://paiza.jp/works/mondai/arithmetic_substitution_op/problem_index?language_uid=javascript) 


## 累乗 2

### [STEP: 1 足し算](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__arithmetic_step1/edit?language_uid=javascript)

```js

const N = 1231 + 5178
console.log(N)

```

### [STEP: 2 引き算・掛け算](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__arithmetic_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const [A, B] = stream.split(' ').map(Number)
const D = A - B
const P = A * B

console.log(D, P)
```

### [STEP: 3 割り算](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__arithmetic_step3/edit?language_uid=javascript)

```js
const stream = '437326 9085'
const [A, B] = stream.split(' ').map(Number)
const X = A / B
const Y = A % B

console.log(X, Y)
```

### [STEP: 4 掛け算 2](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__arithmetic_step4/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const [A, B, C] = stream.split(' ').map(Number)
const X = A * A
const Y = B * B + C * C

console.log(X, Y)
```

### [STEP: 5 累乗](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__arithmetic_step5/edit?language_uid=javascript)

```js
const stream = '202 134 107'
const [A, B, C] = stream.split(' ').map(Number)
const N = ((A + B) * C) ** 2

console.log(N)
```

### [FINAL問題 累乗 2](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__arithmetic_step6/edit?language_uid=javascript)


```js
const stream = require('fs').readFileSync(, 'utf8').trim()

const [a, b, c, d] = stream.split(' ').map(Number)
console.log(((a + b) * c) ** 2 % d)
```

## 代入演算

### [代入演算 1 ](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__substitution_step1/edit?language_uid=javascript)

```js
let N = 0
N += 3286
N *= 4736
N %= 12312
// ((N + 3286) * 4736) % 12312
console.log(N)
```

### [代入演算 2](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__substitution_step2/edit?language_uid=javascript) 

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const [A, B, C] = stream.split(' ').map(Number)
let N = 0
N += A
N *= B
N %= C
// (((N + A) * B) % C)
console.log(N)
```

### [代入演算 3](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__substitution_step3/edit?language_uid=javascript)

```js
let N = 10000
N = Math.trunc(N / 361)
N %= 28

console.log(N)
```

### [代入演算 4](https://paiza.jp/works/mondai/arithmetic_substitution_op/arithmetic_substitution_op__substitution_step4/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const [a, b] = stream.split(' ').map(Number)
let N = 10000
N /= a
N = Math.trunc(N) % b

console.log(N)
```