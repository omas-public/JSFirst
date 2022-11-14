# [文字列処理メニュー](https://paiza.jp/works/mondai/string_primer/problem_index?language_uid=javascript)


入力は以下を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// const cols = stream.split(' ')
// const lines = stream.split('\n')
// const matrix = stream.split('\n').map(line => line.split(' '))
```

## [文字列の出力](https://paiza.jp/works/mondai/string_primer/basic_step1/edit?language_uid=javascript)

```js

const stream = 'paiza'

console.log(stream)
```

## [文字列の受け取り](https://paiza.jp/works/mondai/string_primer/basic_step2/edit?language_uid=javascript)

- String.prototype.trim()

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

console.log(stream)
```

## [i 文字目の出力](https://paiza.jp/works/mondai/string_primer/basic_step3/edit?language_uid=javascript)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, i] = stream.split('\n')

const result = S.charAt(parseInt(i) - 1)
console.log(result)
```

## [文字列の条件判定](https://paiza.jp/works/mondai/string_primer/basic_step4/edit?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = (S === 'paiza') ? 'YES' : 'NO'
console.log(result)
```

## [文字列の文字数](https://paiza.jp/works/mondai/string_primer/basic_step5/edit?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = S.length
console.log(result)
```

## [文字の検索](https://paiza.jp/works/mondai/string_primer/basic_step6/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, c] = stream.split('\n')

const result = S.indexOf(c) + 1
console.log(result)
```

## [文字列の連結](https://paiza.jp/works/mondai/string_primer/basic_step7/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...rest] = stream.split('\n')

const result = rest.join('')
console.log(result)
```

## [部分文字列](https://paiza.jp/works/mondai/string_primer/normal_step1/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[S], [i, j]] = stream.split('\n').map(line => line.split(' '))

const result = S.slice(parseInt(i) - 1, parseInt(j) - 1) // (...[i, j].map(Number).map(v => v - 1))
console.log(result)
```

## [文字列の挿入](https://paiza.jp/works/mondai/string_primer/normal_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, T, N] = stream.split('\n')

const [front, back] = [S.slice(0, parseInt(N), S.slice(parseInt(N)))]
const result = [front, T, back].join('')
console.log(result)
```

## [文字列の書き換え](https://paiza.jp/works/mondai/string_primer/normal_step3?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[S], [i, c]] = stream.split('\n').map(line => line.split(' '))

const [front, back] = [S.slice(0, parseInt(i) - 1), S.slice(parseInt(i))]
const result = [front, c, back].join('')

console.log(result)

```

## [文字列から数値への変換](https://paiza.jp/works/mondai/string_primer/normal_step4?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const S = parseInt(stream)

const result = S - 813
console.log(result)
```

## [数値から文字列への変換](https://paiza.jp/works/mondai/string_primer/normal_step5?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [X, Y, N] = stream.split('\n').map(Number)

const result = (X + Y).toString().charAt(N - 1)
console.log(result)

```

## [大文字から小文字への変換](https://paiza.jp/works/mondai/string_primer/normal_step6?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = S.toLowerCase()
console.log(result)
```

## [小文字から大文字への変換](https://paiza.jp/works/mondai/string_primer/normal_step7?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = S.toUpperCase()
console.log(result)
```

## [大文字小文字の反転](https://paiza.jp/works/mondai/string_primer/normal_step8?language_uid=javascript)

```js
const f = c => /[A-Z]/.test(c) ? c.toLowerCase() : c.toUpperCase() 
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = S.replace(/[A-Z]/ig, f)
console.log(result)
```

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const a_code = 'a'.charCodeAt(0)
const array = Array.from(S, c => c.charCodeAt(0) < a_code ? c.toUpperCase() : c.toLowerCase())
const result = array.join('')
console.log(result)
```

## [文字列の検索 ](https://paiza.jp/works/mondai/string_primer/normal_step9?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, T] = stream.split('\n')

const result = S.includes(T) ? 'YES' : 'NO'
console.log(result)
```

## [文字列の反転](https://paiza.jp/works/mondai/string_primer/normal_step10/edit?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = Array.from(S).reverse().join('')
console.log(result)
```

## [回文判定](https://paiza.jp/works/mondai/string_primer/normal_step11?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = S === Array.from(S).reverse().join('')
  ? 'YES'
  : 'NO'

console.log(result)
```

## [文字列の分割](https://paiza.jp/works/mondai/string_primer/advance_step1?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = S.split(',')
console.log(result)
```

## [日時データの変換その1](https://paiza.jp/works/mondai/string_primer/advance_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const [yyyy, MM, dd, hhmm] = stream.split('/')
const [hh, mm] = hhmm.split(':')
const result =[yyyy, MM, dd, hh, mm].join('\n')
console.log(result)
```

## [日時データの変換その2](https://paiza.jp/works/mondai/string_primer/advance_step3/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const [yyyyMMdd, hhmm] = stream.split(' ')
const [yyyy, MM, dd] = yyyyMMdd.split('/')
const [hh, mm] = hhmm.split(':')
const result = [yyyy, MM, dd, hh, mm].join('\n')
console.log(result)
```

## [数値判定](https://paiza.jp/works/mondai/string_primer/advance_step4/edit?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = isNaN(S) ? 'NO' : 'YES'
console.log(result)
```

正規表現
```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = /^\d*$/.test(S) ? 'YES' : 'NO'
console.log(result)
```


## [重複の削除](https://paiza.jp/works/mondai/string_primer/advance_step5?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const hashset = new Set(S)
const result = [...hashset].join()
console.log(result)
```

----------------------------------------------------------------------------------------------------
ここからは難易度が上がるのでTemplateを習ってからでよい

## [パスワード作成](https://paiza.jp/works/mondai/string_primer/advance_step6?language_uid=javascript)

```js
// 即時実行関数(main)
(() => {

  // define function
  const fn1 = (n, c) => matrix => {
    // ここに処理を書く
    const fun = m => c => (v, i) => m.has(String(i + 1)) ? m.get(String(i + 1)) : c
    const mapfun = fun(new Map(matrix))(c)
    return [...Array(n)].map(mapfun)
  }
  // 別解
  const fn2 = (N, C) => matrix => {
    const result = Array(N).fill(C)
    matrix.forEach(([n, c]) => result[parseInt(n)] = c)
    return result
  }

  const [[N], [Q], ...rest] = inputs('').readMatrix()
  const [C] = rest.at(-1)
  const matrix = rest.slice(0, -1)
  const result = fn(parseInt(N), C)(matrix)

  display(join(''))(result)
})()
```

## [表記の訂正](https://paiza.jp/works/mondai/string_primer/advance_step7/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (S) => {
    // ここに処理を書く
    const [head, ...rest] = S.split('.')
    return rest.length === 0
      ? S
      : `${BigInt(head)}.${rest.join('').replace(/0+$/, '')}`
  }

  const S = inputs().readStream()
  const result = fn(S)
  display()(result)

})()
```

## [数式の計算（1 桁）](https://paiza.jp/works/mondai/string_primer/advance_step8/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (S) => {
    return eval(S))
  }

  // 入力値を取得
  const S = inputs().readStream()
  const result = fn(S)
  display()(result)

})()
```

関数形式で
```js
(() => {

  // define function
  const fn = (initial, pairs) => {
    const m = new Map([['+', (a, b) => a + b], ['-', (a, b) => a - b]])
    const calc = m => (acc, [op, v]) => m.get(op)(acc, parseInt(v))
    return pairs.reduce(calc(m), initial)
  }

  // 入力値を取得
  const S = inputs('').readStream()
  const [initial, others] = [parseInt(S[0]), S.slice(1)]
  const pairs = others.match(/../g).map(split(''))
  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(initial, pairs)
  display()(result)

})()
```

## [数式の計算](https://paiza.jp/works/mondai/string_primer/advance_step9/edit?language_uid=javascript)

```js
(() => {
  // define function
  const fn = (initial, pairs) => {
    const m = new Map([['+', (a, b) => a + b], ['-', (a, b) => a - b]])
    const calc = m => (acc, [op, v]) => m.get(op)(acc, parseInt(v))
    return pairs.reduce(calc(m), parseInt(initial))
  }

  // 入力値を取得
  const S = inputs().readStream()
  const [initial, ...others] = S.match(/[+-]?\d+/g)
  const pairs = others.map(v => [v[0], v.slice(1)])

  const result = fn(initial, pairs)
  display()(result)

})()
```
## [巨大な数の足し算(繰り上がりなし)](https://paiza.jp/works/mondai/string_primer/advance_step10/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (S, T) => {
    return (BigInt(S) + BigInt(T)).toString()
  }

  // 入力値を取得
  const [S, T] = inputs().readRows()
  const result = fn(S, T)
  display()(result)

})()
```

## [巨大な数のかけ算](https://paiza.jp/works/mondai/string_primer/advance_step12/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (S, T) => {
    return (BigInt(S) * BigInt(T)).toString()
  }

  // 入力値を取得
  const [S, T] = inputs().readRows()
  const result = fn(S, T)
  display()(result)

})()
```