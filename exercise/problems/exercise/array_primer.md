author: Omas Naohiko
create: 2022-11-12
update: 2022-11-24

# [配列メニュー](https://paiza.jp/works/mondai/array_primer/problem_index?language_uid=javascript)


標準入力は以下を使用

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
const lines = stream.split('\n')
const matrix = stream.split('\n').map(line => line.split(' '))
```

## 【次元配列の入出力】i番目の出力 Boss

### [STEP: 1 要素数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_output_step1/edit?language_uid=javascript)

- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)


```js
const stream = '5 1 3 4 5 12 6 8 1 3'
const cols = stream.split(' ')
// write code here


console.log(result)
```
### [STEP: 2 全要素の出力](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_output_step2/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


```js
const stream = '5 1 3 4 5 12 6 8 1 3'
const cols = stream.split(' ')
// write code here


console.log(result)
```

### [STEP: 3 i 番目の出力](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_output_step3/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)


```js
const stream = '5 1 3 4 5 12 6 8 1 3'
const cols = stream.split(' ')
// write code here


console.log(result)
```

### [STEP: 4 配列の入力 1](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_input_step1/edit?language_uid=javascript)

- Array.prototype.join(SEP)

```js
const stream = '8 1 3 3 8 1 1 3 8 8'
const cols = stream.split(' ')
// write code here


console.log(result)
```

### [STEP: 5 配列の入力 2](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_input_step2/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
// write code here


console.log(result)
```

### [STEP: 6 配列の入力 3](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_input_step3/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, A] = stream.split('\n')
// write code here


console.log(result)
```

### [STEP: 7 i番目の出力 1](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_i-thoutput_step1/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const K = parseInt(stream)
const cols = '1 3 5 4 6 2 1 7 1 5'.split(' ')
// write code here


console.log(result)
```

### [STEP: 8 i番目の出力 2](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_i-thoutput_step2/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [K, A] = stream.split('\n')
// write code here


console.log(result)
```

### [final 次元配列の入出力】i番目の出力 Boss](https://paiza.jp/works/mondai/array_primer/array_primer__1dmatrix_i-thoutput_boss/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [NK, A] = stream.split('\n')
// write code here


console.log(result)
```

#### Matrixにして処理
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], AS] = stream.split('\n').map(line => line.split(' ').map(Number))
// write code here


console.log(result)
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
// write code here


console.log(result)
```

### [STEP: 2 全要素の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '6 5 4 3 2 1\n3 1 8 8 1 3'
const lines = stream.split('\n')
const matrix = lines.map(line => line.split(' '))
// write code here


console.log(result)
```

### [STEP: 3 行数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = '1 2 3\n4 5 6\n8 1 3'
const lines = stream.split('\n')
// write code here


console.log(result)
```

### [STEP: 4 列数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step4/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)


```js
const stream = '1 2 3 4\n6 5 4 3\n3 1 8 1'
const lines = stream.split('\n')
// write code here


console.log(result)
```

### [STEP: 5 各行の要素数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step5/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '1\n2 3\n4 5 6'
const lines = stream.split('\n')
// write code here


console.log(result)
```
### [STEP: 6 i 行目 j 列目の出力](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_output_step6/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
```js
const stream = '1 2 3\n8 1 3\n10 100 1'
const lines = stream.split('\n')
// write code here


console.log(result)
```

### [STEP: 7 二次元配列の入力 1](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_input_step1/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '1 3 5 7\n8 1 3 8'
// write code here


console.log(result)
```

### [STEP: 8 二次元配列の入力 2](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_input_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


console.log(result)
```

### [STEP: 9 二次元配列の入力 3](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_input_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


console.log(result)
```
### [STEP: 10 二次元配列の入力 4](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_input_step4/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


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
// write code here


console.log(result)
```

### [STEP: 12 i番目の出力 2](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_i-thoutput_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- Array[ROW_INDEX][COL_INDEX]

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


console.log(result)
```

### [final 二次元配列の入出力】i番目の出力 Boss](https://paiza.jp/works/mondai/array_primer/array_primer__2dmatrix_i-thoutput_boss/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)
- Array[ROW_INDEX][COL_INDEX]

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


console.log(result)
```

## 【配列の検索】何個ある? Boss

### [STEP: 1 配列に含まれている? 1](https://paiza.jp/works/mondai/array_primer/array_primer__search_include_step1/edit?language_uid=javascript)

- [Array.prototype.includes(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const stream = '10 13 21 1 6 51 10 8 15 6'
const cols = stream.split(' ')
// write code here


console.log(result)
```

### [STEP: 2 配列に含まれている? 2](https://paiza.jp/works/mondai/array_primer/array_primer__search_include_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.includes(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const cols = '5 12 6 84 14 25 44 3 7 20'.split(' ').map(Number)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
// write code here


console.log(result)
```
### [STEP: 3 配列に含まれている? 3](https://paiza.jp/works/mondai/array_primer/array_primer__search_include_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.includes(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


console.log(result)
```

### [STEP: 4 何番目にある? 1](https://paiza.jp/works/mondai/array_primer/array_primer__search_i-th_step1/edit?language_uid=javascript)

- [Array.prototype.indexOf(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

```js
const stream = '1 10 2 9 3 8 4 7 5 6'
const cols = stream.split(' ')
// write code here


console.log(result)
```
### [STEP: 5 何番目にある? 2](https://paiza.jp/works/mondai/array_primer/array_primer__search_i-th_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.indexOf(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

```js
const cols = '1 5 9 7 3 2 4 8 6 10'.split(' ').map(Number)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
// write code here


console.log(result)
```

### [STEP: 6 何番目にある? 3](https://paiza.jp/works/mondai/array_primer/array_primer__search_i-th_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.indexOf(TARGET)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


console.log(result)
```

### [STEP: 7 何個ある? 1](https://paiza.jp/works/mondai/array_primer/array_primer__search_count_step1/edit?language_uid=javascript)

- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = '1 2 2 1 2 1 2 1 1 1'
const cols = stream.split(' ')
// write code here


console.log(result)
```
### [STEP: 8 何個ある? 2](https://paiza.jp/works/mondai/array_primer/array_primer__search_count_step2/edit?language_uid=javascript)

- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)


```js
const cols = '1 2 5 1 4 3 2 5 1 4'.split(' ').map(Number)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
// write code here


console.log(result)
```

### [final【配列の検索】何個ある? Boss](https://paiza.jp/works/mondai/array_primer/array_primer__search_count_boss/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


console.log(result)
```

## 【文字列の配列】辞書順に出力 Boss

### [STEP: 1 配列の書き換え](https://paiza.jp/works/mondai/array_primer/array_primer__elm_rewrite/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[A, B, N], AS] = stream.split('\n').map(line => line.split(' '))
// write code here


console.log(result)
```

### [STEP: 2 2 変数の入れ替え](https://paiza.jp/works/mondai/array_primer/array_primer__elm_change/edit?language_uid=javascript)

- [Array.prototype.reverse()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [A, B] = stream.split(' ')
// write code here


console.log(result)
```

### [STEP: 3 配列の要素の入れ替え](https://paiza.jp/works/mondai/array_primer/array_primer__array_elm_change/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js

const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[A, B, N], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 4 部分配列](https://paiza.jp/works/mondai/array_primer/array_primer__partical_array/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.slice(BIGIN, END)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js

const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[A, B, N], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 5 配列の連結](https://paiza.jp/works/mondai/array_primer/array_primer__array_join/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.concat()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS, BS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 6 配列のソート](https://paiza.jp/works/mondai/array_primer/array_primer__array_sort/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 7 配列の反転](https://paiza.jp/works/mondai/array_primer/array_primer__array_reverse/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.reverse()](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```
### [STEP: 8 要素のカウント](https://paiza.jp/works/mondai/array_primer/array_primer__elm_count/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 9 配列末尾への追加](https://paiza.jp/works/mondai/array_primer/array_primer__push_back/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.push(VALUE)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/push)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

#### 破壊的メソッド(push)を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))

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
const [[N, M], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

#### 破壊的メソッド(splice)を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))

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
const [[N, M, K], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

#### 破壊的メソッド(splice)を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M, K], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
AS.splice(M - 1, 0, K)
console.log(AS.join('\n'))
```

### [STEP: 12 要素数の出力](https://paiza.jp/works/mondai/array_primer/array_primer__string_output_step1/edit?language_uid=javascript)

- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)

```js
const stream = 'Hello\npaiza\n1234\npa13'
// write code here


console.log(result)
```


### [STEP: 13 全要素の出力](https://paiza.jp/works/mondai/array_primer/array_primer__string_output_step2/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = 'good\nmorning\npaiza\n813\npa13'
// write code here


console.log(result)
```


### [STEP: 14 i 番目の出力](https://paiza.jp/works/mondai/array_primer/array_primer__string_output_step3/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = 'good\nmorning\npaiza\n813\npa13'
// write code here


console.log(result)
```

### [STEP: 15 文字列の配列の入力 1](https://paiza.jp/works/mondai/array_primer/array_primer__string_input_step1/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = 'eight\none\nthree\npaiza\npa13\n813'
// write code here


console.log(result)
```

### [STEP: 16 文字列の配列の入力 2](https://paiza.jp/works/mondai/array_primer/array_primer__string_input_step2/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


console.log(result)
```

### [STEP: 17 文字列の配列の入力 3](https://paiza.jp/works/mondai/array_primer/array_primer__string_input_step3/edit?language_uid=javascript)

- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], SS] = stream.split('\n').map(line => line.split(' '))
// write code here


console.log(result)
```
### [STEP: 18 i 番目の出力 1](https://paiza.jp/works/mondai/array_primer/array_primer__string_i-thinput_step1/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const S = 'good\nmorning\npaiza\n813\npa13'
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
// write code here


console.log(result)
```

### [STEP: 19 i 番目の出力 2](https://paiza.jp/works/mondai/array_primer/array_primer__string_i-thinput_step2/edit?language_uid=javascript)

- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], SS] = stream.split('\n').map(line => line.split(' '))
// write code here


console.log(result)
```


### [STEP: 20 i 番目の出力 3](https://paiza.jp/works/mondai/array_primer/array_primer__string_i-thinput_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M], SS] = stream.split('\n').map(line => line.split(' '))
// write code here


console.log(result)
```

### [STEP: 21 i 番目の出力 4](https://paiza.jp/works/mondai/array_primer/array_primer__string_i-thinput_step4/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, M, L], SS] = stream.split('\n').map(line => line.split(' '))
// write code here


console.log(result)
```

- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)


### [STEP: 22 辞書順に出力 1](https://paiza.jp/works/mondai/array_primer/array_primer__string_dictionary_step1/edit?language_uid=javascript)

- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = 'zaipa izapa paiza'
// write code here


console.log(result)
```

### [STEP: 23 辞書順に出力 2](https://paiza.jp/works/mondai/array_primer/array_primer__string_dictionary_step2/edit?language_uid=javascript)

- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here


console.log(result)
```

### [STEP: 24 辞書順に出力 3](https://paiza.jp/works/mondai/array_primer/array_primer__string_dictionary_step3/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], SS] = stream.split('\n').map(line => line.split(' '))
// write code here


console.log(result)
```

### [final 文字列の配列】辞書順に出力 Boss](https://paiza.jp/works/mondai/array_primer/array_primer__string_dictionary_boss/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.at(INDEX)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/at)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], SS] = stream.split('\n').map(line => line.split(' '))
// write code here


console.log(result)
```

## フィボナッチ数

### [STEP: 1 重複の削除](https://paiza.jp/works/mondai/array_primer/array_primer__deduplication/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Set](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Array.prototype.sort(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = '1 3 5 1 2 3 6 6 5 1 4'
const cols = stream.split(' ').map(Number)


console.log(result)
```

### [STEP: 2 配列の最大最小](https://paiza.jp/works/mondai/array_primer/array_primer__array_minmax/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- Math.prototype.max(...[item1, item2])
- Math.prototype.min(...[item1, item2])
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 3 ある数以上以下の要素の列挙 1](https://paiza.jp/works/mondai/array_primer/array_primer__array_ave_step1/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```
### [STEP: 4 ある数以上以下の要素の列挙 2](https://paiza.jp/works/mondai/array_primer/array_primer__array_ave_step2/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 5 ある数以上以下の要素の列挙 3](https://paiza.jp/works/mondai/array_primer/array_primer__array_ave_step3/edit?language_uid=javascript)

- [Array.prototype.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Array.prototype.filter(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```
### [STEP: 6 二点間の距離 1](https://paiza.jp/works/mondai/array_primer/array_primer__array_distance_step1/edit?language_uid=javascript)

- [Array.prototype.map(FUN)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Math.abs(NUMBER)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], ...AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 7 二点間の距離 2](https://paiza.jp/works/mondai/array_primer/array_primer__array_distance_step2/edit?language_uid=javascript)

- Array.prototype.map(FUN)
- [Math.abs(NUMBER)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Math/abs)
- [Array.prototype.join(SEP)](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

```js
// const f = (x1, y1) => ([x2, y2]) => Math.abs(x1 - x2) + Math.abs(y1 - y2)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, A, B], ...AS] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


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