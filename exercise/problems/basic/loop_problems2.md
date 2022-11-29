# [ループメニュー2](https://paiza.jp/works/mondai/loop_problems2/problem_index?language_uid=javascript)

入力は以下を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
const lines = stream.split('\n')
const matrix = stream.split('\n').map(line => line.split(' '))
```

## 偶奇の判定

### [Final 偶奇の判定](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__even_odd/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n')
  .map(line => line.split(' ').map(Number))

const fun = n => n % 2 === 0 ? 'even' : 'odd'
const result = A.map(fun).join('\n')

console.log(result)

```

### [STEP: 1 未知数個の数の受け取り](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__unknown_int/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ').map(Number)
const target = -1

const index = cols.indexOf(target)
const result = cols.slice(0, index + 1).join('\n')

console.log(result)
```

### [STEP: 2 未知数個の文字列の受け取り](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__unknown_string/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
const target = 'EOF'

const index = cols.indexOf(target)
const result = cols.slice(0, index + 1).join('\n')

console.log(result)
```
### [STEP: 3 奇数だけ出力](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__even_output/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
  
const fun = n => n % 2 === 1
const result = A.filter(fun).join('\n')

console.log(result)
```
### [STEP: 4 割り切れる数だけ出力](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__div_output/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n')
  .map(line => line.split(' ').map(Number))


const fun = n => n % 3 === 0
const result = A.filter(fun).join('\n')

console.log(result)
```

## 約数の列挙

### [Final 約数の列挙]()

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const seq = n => [...Array(n)].map((v, i) => i + 1)

const result = seq(Math.trunc(Math.sqrt(N)))
  .filter(v => N % v === 0)
  .map(v => [...new Set([v, N / v])])
  .flat()
  .sort((a, b) => a - b)
  .join('\n')
  
console.log(result)

```
### [STEP: 1 各桁の和](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__digit_sum/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const fun = (a, b) => a + b
const result = Array.from(N.toString(), Number).reduce(fun)

console.log(result)
```
### [STEP: 2 カウント変数を使った計算](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__index_multi/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], M] = stream.split('\n')
  .map(line => line.split(' ').map(Number))

const result = M.map((v, i) => v * (i + 1)).join('\n')

console.log(result)
```

### [STEP: 3 2 で何回割れる？](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__div_two/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const seq = n => [...Array(n)].map((v, i) => i + 1)

const result = seq(Math.trunc(Math.log2(N)))
  .map(v => N / (2 ** (v - 1)))
  .filter(v => v % 2 === 0)
  .length

console.log(result)
```

### [STEP: 4 任意の数で何回割れる?](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__div_m/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, M] = stream.split(' ').map(Number)
const seq = n => [...Array(n)].map((v, i) => i + 1)

const result = seq(Math.trunc(Math.log(N) / Math.log(M)))
  .map(v => N / (M ** (v - 1)))
  .filter(v =>  v % M === 0)
  .length

console.log(result)
```

### [STEP: 5 10 進数から 2 進数に変換](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__conv_binary/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const radix = 2
const result = N.toString(radix)

console.log(result)
```

### [STEP: 6 10 進数から M 進数に変換](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__conv_nbase/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, M] = stream.split(' ').map(Number)
const result = N.toString(M)

console.log(result)

```

### [STEP: 7 N が M ずつ増えたときにいつ K を越える？](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__inc_m/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, M, K] = stream.split(' ').map(Number)

const result = Math.max(0, Math.trunc((K - N) / M))
console.log(result)
```

### [STEP: 8 毎日増加するお金](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__inc_percent/edit?language_uid=javascript)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ').map(Number)
const rate = 0.1

const gen = function* (A, B, rate) {
  while (A <= B) {
    A = parseInt(A * rate)
    yield A
  }
}

const g = gen(A, B, rate)

console.log([...g].length)
```

### [STEP: 9 階乗の計算](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__factorial/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const seq = n => [...Array(n)].map((v, i) => i + 1)

const result = seq(N).reduce((a, b) => a * b, 1)
console.log(result)
```

### [STEP: 10 階乗の末尾に 0 はいくつ付く？](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__factorial_zero/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const base = 5
const seq = n => [...Array(n)].map((v, i) => i + 1)

const result = seq(4) // 5 ** 4 -> 625 < 1000 < 5 * 5 -> 3125
  .map(m => seq(N).filter(n => n % (base ** m) === 0).length)
  .reduce((a, b) => a+ b, 0)

console.log(result)
```

### [STEP: 11 加算された数列の最大値](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__add_maxseq/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = Math.max(...A.map((v, i) => v + i)) + 1

console.log(result)
```

### [STEP: 12 加算された数列の最小値](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__add_minseq/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = Math.min(...A.map((v, i) => v + i)) + 1

console.log(result)

```

### [STEP: 13 1 はどこにある？](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__seq_one/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], A] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = A.map((v, i) => [v, i])
  .filter(([v, i]) => v === 1)
  .map(([v, i]) => i + 1)
  .join('\n')
  
console.log(result)
```

### [STEP: 14 約数の個数](https://paiza.jp/works/mondai/loop_problems2/loop_problems2__divsor_count/edit?language_uid=javascript)
```js

const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const seq = n => [...Array(n)].map((v, i) => i + 1)

const result = seq(Math.trunc(Math.sqrt(N))).filter(v => N % v === 0)
  .map(v => [...new Set([v, N / v])])
  .flat()
  .length
  
console.log(result)
```
