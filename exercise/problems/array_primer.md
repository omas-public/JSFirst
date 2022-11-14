# [配列メニュー](https://paiza.jp/works/mondai/array_primer/problem_index?language_uid=javascript)


標準入力は以下を使用

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// const cols = stream.split(' ')
// const lines = stream.split('\n')
// const matrix = stream.split('\n').map(line => line.split(' '))
```

## 【次元配列の入出力】i番目の出力 Boss

### [STEP: 1 要素数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_output_step1/edit?language_uid=javascript)

- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = '5 1 3 4 5 12 6 8 1 3'
const cols = stream.split(' ')

console.log(cols.length)
```
### [STEP: 2 全要素の出力](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_output_step2/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '5 1 3 4 5 12 6 8 1 3'
const cols = stream.split(' ')

console.log(cols.join('\n'))
```

### [STEP: 3 i 番目の出力](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_output_step3/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = '5 1 3 4 5 12 6 8 1 3'
const cols = stream.split(' ')

console.log(cols[4 - 1]) // cols.at(4 - 1)
```

### [STEP: 4 配列の入力 1](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_input_step1/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '8 1 3 3 8 1 1 3 8 8'
const cols = stream.split(' ')

console.log(cols.join('\n'))
```

### [STEP: 5 配列の入力 2](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_input_step2/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')

console.log(cols.join('\n'))
```

### [STEP: 6 配列の入力 3](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_input_step3/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, A] = stream.split('\n')
const AS = A.split(' ')

console.log(AS.join('\n'))
```

### [STEP: 7 i番目の出力 1](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_i-thoutput_step1/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const K = parseInt(stream)
const cols = '1 3 5 4 6 2 1 7 1 5'.split(' ')

console.log(cols[K - 1]) //cols.at(K - 1)
```

### [STEP: 8 i番目の出力 2](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_i-thoutput_step2/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [K, A] = stream.split('\n')
const AS = A.split(' ')

console.log(AS[parseInt(K) - 1]) // AS.at(parseInt(K) - 1)
```

### [final 次元配列の入出力】i番目の出力 Boss](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_i-thoutput_boss/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [NK, A] = stream.split('\n')
const [N, K] = NK.map(v => v.split(' ').map(Number))

const AS = A.map(v => v.split(' ').map(Number))
console.log(AS[K - 1]) // AS.at(parseInt(K) - 1)
```

Matrixにして処理
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

console.log(AS[K - 1])
```

## 【二次元配列の入出力】i番目の出力 Boss

### [STEP: 1 要素数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step1/edit?language_uid=javascript)

- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.flat()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

```js
const stream = '1 2 3 4 5 6\n8 1 3 3 1 8'
const lines = stream.split('\n')
const matrix = lines.map(line => line.split(' '))

const result = matrix.flat()
console.log(result.length)
```

### [STEP: 2 全要素の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '6 5 4 3 2 1\n3 1 8 8 1 3'
const lines = stream.split('\n')
const matrix = lines.map(line => line.split(' '))

const result = matrix.map(v => v.join(' ')).join('\n')
console.log(result)
```

### [STEP: 3 行数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = '1 2 3\n4 5 6\n8 1 3'
const lines = stream.split('\n')
const matrix = lines.map(line => line.split(' '))

console.log(matrix.length)
```

### [STEP: 4 列数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step4/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = '1 2 3 4\n6 5 4 3\n3 1 8 1'
const lines = stream.split('\n')
const matrix = lines.map(line => line.split(' '))

const result = matrix[0].length // matrix.at(0).length
console.log(result)
```

### [STEP: 5 各行の要素数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step5/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '1\n2 3\n4 5 6'
const lines = stream.split('\n')
const matrix = lines.map(line => line.split(' '))

const result = matrix.map(cols => cols.length)
console.log(result.join('\n'))
```
### [STEP: 6 i 行目 j 列目の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step6/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = '1 2 3\n8 1 3\n10 100 1'
const lines = stream.split('\n')
const matrix = lines.map(line => line.split(' '))

const result = matrix[2 - 1][3 - 1] // matrix.at(2 - 1).at(3 - 1)
console.log(result)
```

### [STEP: 7 二次元配列の入力 1](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_input_step1/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '1 3 5 7\n8 1 3 8'
const matrix = stream.split('\n').map(line => line.split(' '))

const result = matrix.map(cols => cols.join(' ')).join('\n')
console.log(result)
```

### [STEP: 8 二次元配列の入力 2](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_input_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[M], ...matrix] = stream.split('\n').map(line => line.split(' '))

const result = matrix.map(cols => cols.join(' ')).join('\n')
console.log(result)
```

### [STEP: 9 二次元配列の入力 3](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_input_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], ...matrix] = stream.split('\n').map(line => line.split(' '))

const result = matrix.map(cols => cols.join(' ')).join('\n')
console.log(result)
```
### [STEP: 10 二次元配列の入力 4](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_input_step4/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], ...matrix] = stream.split('\n').map(line => line.split(' '))

const result = matrix.map(cols => cols.join(' ')).join('\n')
console.log(result)

```

### [STEP: 11 i番目の出力 1](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_i-thoutput_step1/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- Array[ROW_INDEX][COL_INDEX]

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [K, L] = stream.split(' ').map(Number)
const a = '1 2 3 4\n10 100 0 5\n8 1 3 8\n15 34 94 25'
const matrix = a.split('\n').map(line => line.split(' '))

const result = matrix[K - 1][L -1] // matrix.at(K - 1).at(L - 1)
console.log(result)
```

### [STEP: 12 i番目の出力 2](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_i-thoutput_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- Array[ROW_INDEX][COL_INDEX]

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[K, L], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = matrix[K - 1][L - 1] // matrix.at(K - 1).at(L - 1)
console.log(result)
```

### [final 二次元配列の入出力】i番目の出力 Boss](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_i-thoutput_boss/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- Array[ROW_INDEX][COL_INDEX]

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M, K, L], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = matrix[K - 1][L - 1] // matrix.at(K - 1).at(L - 1)
console.log(result)
```

## 【配列の検索】何個ある? Boss

### [STEP: 1 配列に含まれている? 1](https://paiza.jp/works/mondai/array_primer/array_primer__search_include_step1/edit?language_uid=javascript)

- [Array.prototype.includes(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const stream = '10 13 21 1 6 51 10 8 15 6'
const cols = stream.split(' ')

const result = cols.includes('6')
console.log(result ? 'Yes' : 'No')
```

### [STEP: 2 配列に含まれている? 2](https://paiza.jp/works/mondai/array_primer/array_primer__search_include_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.includes(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const cols = '5 12 6 84 14 25 44 3 7 20'.split(' ').map(Number)

const result = cols.includes(N)
console.log(result ? 'Yes' : 'No')
```
### [STEP: 3 配列に含まれている? 3](https://paiza.jp/works/mondai/array_primer/array_primer__search_include_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.includes(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n').map(line => line.split(' ').map(Number))
const result = AS.includes(M)
console.log(result ? 'Yes' : 'No')
```

### [STEP: 4 何番目にある? 1](https://paiza.jp/works/mondai/array_primer/array_primer__search_i-th_step1/edit?language_uid=javascript)

- [Array.prototype.indexOf(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const stream = '1 10 2 9 3 8 4 7 5 6'
const cols = stream.split(' ')

const result = cols.indexOf('8') + 1
console.log(result)
```
### [STEP: 5 何番目にある? 2](https://paiza.jp/works/mondai/array_primer/array_primer__search_i-th_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.indexOf(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const cols = '1 5 9 7 3 2 4 8 6 10'.split(' ').map(Number)

const result = cols.indexOf(N) + 1
console.log(result)
```

### [STEP: 6 何番目にある? 3](https://paiza.jp/works/mondai/array_primer/array_primer__search_i-th_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.indexOf(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n').map(line => line.split(' ').map(Number))
const result = AS.indexOf(N) + 1
console.log(result)
```

### [STEP: 7 何個ある? 1](https://paiza.jp/works/mondai/array_primer/array_primer__search_count_step1/edit?language_uid=javascript)

- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = '1 2 2 1 2 1 2 1 1 1'
const cols = stream.split(' ')

const result = cols.filter(v => v === '1').length
console.log(result)
//  別解
//  const result = stream.split('1').length - 1
//  const result = stream.match(/1/g).length
```
### [STEP: 8 何個ある? 2](https://paiza.jp/works/mondai/array_primer/array_primer__search_count_step2/edit?language_uid=javascript)

- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const cols = '1 2 5 1 4 3 2 5 1 4'.split(' ').map(Number)

const result = cols.filter(v => v === N).length
console.log(result)
```

### [final【配列の検索】何個ある? Boss](https://paiza.jp/works/mondai/array_primer/array_primer__search_count_boss/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], A] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = A.filter(v => v === N).length
console.log(result)
```

## 【文字列の配列】辞書順に出力 Boss

### [STEP: 1 配列の書き換え](https://paiza.jp/works/mondai/array_primer/array_primer__elm_rewrite/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[A, B, N], AS] = stream.split('\n').map(line => line.split(' '))

const result = AS.map(v => v === A ? B : v)
console.log(result.join('\n'))
```

### [STEP: 2 2 変数の入れ替え](https://paiza.jp/works/mondai/array_primer/array_primer__elm_change/edit?language_uid=javascript)

- [Array.prototype.reverse()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ')

const result = [A, B].reverse()
console.log(result.join(' '))
```

### [STEP: 3 配列の要素の入れ替え](https://paiza.jp/works/mondai/array_primer/array_primer__array_elm_change/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js

const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[A, B, N], AS] = stream.split('\n').map(line => line.split(' ').map(Number))
{
  [AS[A - 1], AS[B - 1]] = [AS[B - 1], AS[A - 1]] // swap
}
console.log(AS.join('\n'))
```

### [STEP: 4 部分配列](https://paiza.jp/works/mondai/array_primer/array_primer__partical_array/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.slice(BIGIN, END)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js

const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[A, B, N], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = AS.slice(A - 1, B)
console.log(result.join('\n'))
```

### [STEP: 5 配列の連結](https://paiza.jp/works/mondai/array_primer/array_primer__array_join/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.concat()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS, BS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = [...AS, ...BS] // AS.concat(BS)
console.log(result.join('\n'))
```


### [STEP: 6 配列のソート](https://paiza.jp/works/mondai/array_primer/array_primer__array_sort/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = [...AS].sort((a, b) => a - b)
console.log(result.join('\n'))
```

### [STEP: 7 配列の反転](https://paiza.jp/works/mondai/array_primer/array_primer__array_reverse/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.reverse()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = [...AS].reverse()
console.log(result.join('\n'))
```
### [STEP: 8 要素のカウント](https://paiza.jp/works/mondai/array_primer/array_primer__elm_count/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = AS.filter(v => v === M).length
console.log(result)
```

### [STEP: 9 配列末尾への追加](https://paiza.jp/works/mondai/array_primer/array_primer__push_back/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.push(VALUE)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = [...AS, M]
console.log(result.join('\n'))
```

破壊的メソッド(push)を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

AS.push(M)
console.log(AS.join('\n'))
```

### [STEP: 10 要素の削除](https://paiza.jp/works/mondai/array_primer/array_primer__elm_erase/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.slice(BIGIN, END)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.flat(LEVEL)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [Array.prototype.splice(START, DELETE_COUNT, ...[ITEM,])](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result  = [AS.slice(0, M - 1), AS.slice(M)].flat()
console.log(result.join('\n'))
```

破壊的メソッド(splice)を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

AS.splice(M - 1, 1)
console.log(AS.join('\n'))
```

### [STEP: 11 要素の挿入](https://paiza.jp/works/mondai/array_primer/array_primer__elm_insert/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.slice(BIGIN, END)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.flat(LEVEL)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)
- [Array.prototype.splice(START, DELETE_COUNT, ...[ITEM,])](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M, K], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = [AS.slice(0, M - 1), K, AS.slice(M - 1)].flat()
console.log(result.join('\n'))
```

破壊的メソッド(splice)を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M, K], AS] = stream.split('\n').map(line => line.split(' ').map(Number))
AS.splice(M - 1, 0, K)
console.log(AS.join('\n'))
```

### [STEP: 12 要素数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__string_output_step1/edit?language_uid=javascript)

- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = 'Hello\npaiza\n1234\npa13'
const lines = stream.split('\n')

const result = lines.length
console.log(result)
```


### [STEP: 13 全要素の出力](https://paiza.jp/works/mondai/array_primer/array_primer__string_output_step2/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js

const stream = 'good\nmorning\npaiza\n813\npa13'
const lines = stream.split('\n')

console.log(lines.join('\n'))
```


### [STEP: 14 i 番目の出力](https://paiza.jp/works/mondai/array_primer/array_primer__string_output_step3/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = 'good\nmorning\npaiza\n813\npa13'
const lines = stream.split('\n')

const result = lines[3 - 1] // lines.at(3 - 1)
console.log(result)
```

### [STEP: 15 文字列の配列の入力 1](https://paiza.jp/works/mondai/array_primer/array_primer__string_input_step1/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = 'eight\none\nthree\npaiza\npa13\n813'
const lines = stream.split('\n')

console.log(lines.join('\n'))
```

### [STEP: 16 文字列の配列の入力 2](https://paiza.jp/works/mondai/array_primer/array_primer__string_input_step2/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')

console.log(cols.join('\n'))
```

### [STEP: 17 文字列の配列の入力 3](https://paiza.jp/works/mondai/array_primer/array_primer__string_input_step3/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], SS] = stream.split('\n').map(line => line.split(' '))

console.log(SS.join('\n'))
```
### [STEP: 18 i 番目の出力 1](https://paiza.jp/works/mondai/array_primer/array_primer__string_i-thinput_step1/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const words = 'good\nmorning\npaiza\n813\npa13'.split('\n')

const result = words[N - 1] // words.at(N - 1)
console.log(result)
```


### [STEP: 19 i 番目の出力 2](https://paiza.jp/works/mondai/array_primer/array_primer__string_i-thinput_step2/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], SS] = stream.split('\n').map(line => line.split(' '))

const result = SS[parseInt(N) - 1] // SS.at(parseInt(N) - 1)
console.log(result)
```


### [STEP: 20 i 番目の出力 3](https://paiza.jp/works/mondai/array_primer/array_primer__string_i-thinput_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], SS] = stream.split('\n').map(line => line.split(' '))

const result = SS[parseInt(N) - 1] // SS.at(parseInt(N) - 1)
console.log(result)

```


### [STEP: 21 i 番目の出力 4](https://paiza.jp/works/mondai/array_primer/array_primer__string_i-thinput_step4/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M, L], SS] = stream.split('\n').map(line => line.split(' '))

const result =  SS[parseInt(N) - 1][parseInt(L) - 1] // SS.at(parseInt(N) - 1).at(parseInt(L) - 1)
console.log(result)
```

- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


### [STEP: 22 辞書順に出力 1](https://paiza.jp/works/mondai/array_primer/array_primer__string_dictionary_step1/edit?language_uid=javascript)

- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = 'zaipa izapa paiza'
const lines = stream.split(' ')

const result = [...lines].sort()
console.log(result.join('\n'))
```

### [STEP: 23 辞書順に出力 2](https://paiza.jp/works/mondai/array_primer/array_primer__string_dictionary_step2/edit?language_uid=javascript)

- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')

const result = [...cols].sort()
console.log(result.join('\n'))
```


### [STEP: 24 辞書順に出力 3](https://paiza.jp/works/mondai/array_primer/array_primer__string_dictionary_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], SS] = stream.split('\n').map(line => line.split(' '))

const result = [...SS].sort()
console.log(result.join('\n'))
```

### [final 文字列の配列】辞書順に出力 Boss](https://paiza.jp/works/mondai/array_primer/array_primer__string_dictionary_boss/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], SS] = stream.split('\n').map(line => line.split(' '))

const result = [...SS].sort()[parseInt(K) - 1] // [...SS].sort().at(parseInt(K) - 1)
console.log(result)
```

## フィボナッチ数

### [STEP: 1 重複の削除](https://paiza.jp/works/mondai/array_primer/array_primer__deduplication/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '1 3 5 1 2 3 6 6 5 1 4'
const cols = stream.split(' ').map(Number)

const hashset = new Set(cols)
const result = [...hashset].sort()
console.log(result.join('\n'))
```

### [STEP: 2 配列の最大最小](https://paiza.jp/works/mondai/array_primer/array_primer__array_minmax/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- Math.prototype.max(...[item1, item2])
- Math.prototype.min(...[item1, item2])
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = [Math.max(...AS), Math.min(...AS)]
console.log(result.join(' '))
```

### [STEP: 3 ある数以上以下の要素の列挙 1](https://paiza.jp/works/mondai/array_primer/array_primer__array_ave_step1/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = AS.filter(v => v >= 5)
console.log(result.join('\n')))
```
### [STEP: 4 ある数以上以下の要素の列挙 2](https://paiza.jp/works/mondai/array_primer/array_primer__array_ave_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = AS.filter(v => v >= K)
console.log(result.join('\n')))
```

### [STEP: 5 ある数以上以下の要素の列挙 3](https://paiza.jp/works/mondai/array_primer/array_primer__array_ave_step3/edit?language_uid=javascript)

- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const average = AS.reduce((a, b) => a + b) / AS.length
const result = AS.filter(v => v >= average)
console.log(result.join('\n))  

```
### [STEP: 6 二点間の距離 1](https://paiza.jp/works/mondai/array_primer/array_primer__array_distance_step1/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Math.abs(NUMBER)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], ...AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = AS.map(([x, y]) => Math.abs(2 - x) + Math.abs(3 - y))
console.log(result.join('\n'))
```

### [STEP: 7 二点間の距離 2](https://paiza.jp/works/mondai/array_primer/array_primer__array_distance_step2/edit?language_uid=javascript)

- Array.prototype.map(FUN)
- [Math.abs(NUMBER)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
// const f = (x1, y1) => ([x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, A, B], ...AS] = stream.split('\n').map(line => line.split(' ').map(Number))

const [[x1, y1], [x2, y2]] = [AS[A -1], AS[B - 1]] 
const result = Math.abs(x1 - x2) + Math.abs(y1 - y2)
console.log(result)
```

### [final  フィボナッチ数](https://paiza.jp/works/mondai/array_primer/array_primer__fibo/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.reduce(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.slice(BIGIN, END)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const result = [...Array(N - 2)].reduce((acc, _) => {
  const [a, b] = acc.slice(-2)
  return [...acc, a + b]
}, [0, 1])

console.log(result.join('\n'))
```