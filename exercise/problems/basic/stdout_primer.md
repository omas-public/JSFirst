# [標準出力メニュー](https://paiza.jp/works/mondai/stdout_primer/problem_index?language_uid=javascript)


## 【改行あり出力】1,000 行の出力

入力は以下のテンプレートを使用する

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split('\n')
```

### [Final 改行あり出力】1,000 行の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__newline_digit_boss/edit?language_uid=javascript)

#### Arrayを使う方法
```js
const lines = [...Array(1000)].map((v, i) => i + 1)
console.log(lines.join('\n'))
```

#### forを使う方法
```js
const lines = []
for (let i = 0; i < 1000; i += 1) {
  lines.push(i + 1)
}
console.log(lines.join('\n'))
```


### [STEP: 1 1 行の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__newline_digit_step1/edit?language_uid=javascript)

```js
const stream = 813
console.log(stream)
```

### [STEP: 2 2 行の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__newline_digit_step2/edit?language_uid=javascript)

```js
const lines = [8, 13]
console.log(lines.join('\n'))
```

### [STEP: 3 3 行の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__newline_digit_step3/edit?language_uid=javascript)

```js
const lines = [8, 1, 3]
console.log(lines.join('\n'))

```

### [STEP: 4 10 行の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__newline_digit_step4/edit?language_uid=javascript)

```js
const lines = [813, 1, 2, 923874, 23648, 782356, 3256, 2342, 24324, 112]
console.log(lines.join('\n'))
```

## 【半角スペース区切りの出力】1,000 個の数値を出力


### [FINAL問題 【半角スペース区切りの出力】1,000 個の数値を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_boss/edit?language_uid=javascript)

#### Arrayを使う方法
```js
const lines = [...Array(1000)].map((v, i) => i + 1)
console.log(lines.join(' '))
```

#### forを使う方法
```js
const lines = []
for (let i = 0; i < 1000; i += 1) {
  lines.push(i + 1)
}
console.log(lines.join(' '))
```


### [STEP: 1 2 つの数値を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_step1/edit?language_uid=javascript)
```js
const stream = '1 1'
const lines = stream.split(' ')
console.log(lines.join(' '))
```

### [STEP: 2 3 つの数値を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_step2/edit?language_uid=javascript)
```js
const stream = '8 1 3'
const lines = stream.split(' ')
console.log(lines.join(' '))
```

### [STEP: 3 10 個の数値を出力 (末尾に半角スペース有)](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_step3/edit?language_uid=javascript)

```js
const stream = '1 2 3 4 5 6 7 8 9 10 '
const lines = stream.split(' ')
console.log(lines.join(' '))
```

### [STEP: 4 10 個の数値を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__space_oneline_step4/edit?language_uid=javascript)
```js
const stream = '1 2 3 4 5 6 7 8 9 10'
const lines = stream.split(' ')
console.log(lines.join(' '))

```

## 【文字列の出力】入力された 10 個の文字列を出力

### [Final 【文字列の出力】入力された 10 個の文字列を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_boss/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split(' ')
console.log(lines.join('\n'))

```

### [STEP: 1 1 つの文字列を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_step1/edit?language_uid=javascript)
```js
const stream = 'paiza'
console.log(stream)
```

### [STEP: 2 2 つの文字列を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_step2/edit?language_uid=javascript)
```js
const stream = 'paiza learning'
const lines = stream.split(' ')
console.log(lines.join(' '))

```

### [STEP: 3 入力された 2 つの文字列を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_step3/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, T] = stream.split('\n')
console.log([S, T].join('\n'))
```

### [STEP: 4 入力された 10 個の文字列を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__string_output_step4/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split('\n')
console.log(lines.join(' '))

```

## 【n 行の出力】1,000 行以内の出力

### [Final【n 行の出力】1,000 行以内の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__n_line_boss/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const lines = [...Array(N)].map((v, i) => i + 1)
console.log(lines.join('\n'))

```

### [STEP: 1 1 行または 2 行の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__n_line_step1/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const lines = [...Array(N)].map((v, i) => i + 1)
console.log(lines.join('\n'))
```

### [STEP: 2 数行の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__n_line_step2/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const lines = [...Array(N)].map((v, i) => i + 1)
console.log(lines.join('\n'))
```

### [STEP: 3 10 行以内の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__n_line_step3/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const lines = [...Array(N)].map((v, i) => i + 1)
console.log(lines.join('\n'))
```

## 【特定の文字で区切り 1 行で出力】大きな数値を 3 けたごとにカンマ区切りで出力 2

### [【特定の文字で区切り 1 行で出力】大きな数値を 3 けたごとにカンマ区切りで出力 2](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_split_step6/edit?language_uid=javascript)

- [数字を3桁カンマ区切りにする、2つの方法](https://www.yoheim.net/blog.php?q=20190702)
- [BigInt 大きすぎて number プリミティブで表すことができない数を、表現したり操作](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = BigInt(stream)
console.log(N.toLocaleString())
```

### [STEP: 1 カンマ区切りで 2 つ出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_split_step1/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split(' ')
const [N, M] = lines.map(Number)
console.log([N, M].join(','))
```

### [STEP: 2 バーティカルライン区切りで 3 つの文字列を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_split_step2/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split('\n')
const [S1, S2, S3] = lines
console.log([S1, S2, S3].join('|')) // console.log(lines.join('|')) でも良い
```

### [STEP: 3 カンマ区切りで 10 個出力 1](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_split_step3/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split(' ')
console.log(lines.join(',') + ',')
```


### [STEP: 4 カンマ区切りで 10 個出力 2](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_split_step4/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split(' ')
console.log(lines.join(','))
```

### [STEP: 5 半角スペースとバーティカルライン区切りで 10 個出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_split_step5/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split('\n')
console.log(lines.join(' | '))
```

## 【n * n の 2 次元配列の表示】N * N の九九表の出力

### [Final【n * n の 2 次元配列の表示】N * N の九九表の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__2dim_array_boss/edit?language_uid=javascript)
```js
const multi = a => b => a * b
const multimap = seq => n => seq.map(multi(n))
const seq = n => [...Array(n)].map((v, i) => i + 1)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const matrix = seq(N).map(multimap(seq(N)))
console.log(matrix.map(v => v.join(' ')).join('\n'))

```

### [STEP: 1 2 * 2 の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__2dim_array_step1/edit?language_uid=javascript)
```js
const stream = '0,8\n1,3'
const lines = stream.split('\n')
const matrix = lines.map(line => line.split(',').map(Number))
console.log(lines.map(line => line.join(' ')).join('\n'))
```

### [STEP: 2 3 * 3 の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__2dim_array_step2/edit?language_uid=javascript)

#### 関数型アプローチ
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split(' ')
const ROW_NUM = 3
const COL_LEN = lines.length / ROW_NUM
const matrix = [...Array(ROW_NUM).keys()].map((v, index) => 
  lines.slice(index * ROW_NUM, index * ROW_NUM + COL_LEN))
  
console.log(matrix.map(line => line.join(' ')).join('\n'))
```

#### 手続き型アプローチ
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split(' ')
const ROW_NUM = 3
const COL_LEN = lines.length / ROW_NUM

const matrix = []
for (const [index, value] of lines.entries()) {
  const col_index = index % COL_LEN
  const row_index = Math.trunc(index / COL_LEN)
  if (col_index === 0) {
    matrix.push([value])
  }
  else {
    matrix[row_index].push(value)
  }
}
console.log(matrix.map(line => line.join(' ')).join('\n'))
```


### [STEP: 3 九九表の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__2dim_array_step3/edit?language_uid=javascript)

#### 関数型アプローチ

```js
const multimap = seq => n => seq.map(v => v * n)
const seq = n => [...Array(n)].map((v, i) => i + 1)
const N = 9
const matrix = seq(N).map(multimap(seq(N)))
console.log(matrix.map(v => v.join(' ')).join('\n'))
```

#### 手続き型アプローチ

```js
const matrix = []
const N = 9
for (let i = 0; i < N; i += 1) {
  const cols = []
  for (let j = 0; j < N; j += 1) {
    cols.push((i + 1) * (j + 1))
  }
  matrix.push(cols)
}

console.log(matrix.map(v => v.join(' ')).join('\n'))
```

## 【行によって長さが違う二次元配列の表示】すべての行の長さと値が不定な 2 次元配列の出力

### [Final【行によって長さが違う二次元配列の表示】すべての行の長さと値が不定な 2 次元配列の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__variable_array_boss)
```js
const fn = (A, B) => {
  const cumsum = array => [0, ...array.map((value, sum = 0) => sum += value)]
  const indexes = cumsum(B)
  return indexes
    .map((v, i, a) => A.slice(v, a[i + 1]))
    .slice(0, -1)
}
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split('\n')
const [[N, M], A, B] = lines.map(line => line.split(' ').map(Number))
const result = fn(A, B)

console.log(result.map(line => line.join(' ')).join('\n'))
```

### [STEP: 1 N 個の文字を半分ずつ出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__variable_array_step1/edit?language_uid=javascript)
```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const ROW_NUM = 2
const COL_NUM = N / ROW_NUM
const matrix = seq(ROW_NUM).map((v, col_index) => 
  seq(COL_NUM).map(v => col_index * COL_NUM + v))

console.log(matrix.map(cols => cols.join(' ')).join('\n'))  
```

### [STEP: 2 数値を異なる長さで 2 行出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__variable_array_step2/edit?language_uid=javascript)
```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, M] = stream.split(' ').map(Number)
const matrix = [
  seq(N), seq(M)
]

console.log(matrix.map(cols => cols.join(' ')).join('\n'))  
```

### [STEP: 3 直角三角形の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__variable_array_step3/edit?language_uid=javascript)
```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const matrix = seq(N).map(v => seq(v))

console.log(matrix.map(cols => cols.join(' ')).join('\n'))  

```

### [STEP: 4 すべての行の長さが不定な 2 次元配列の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__variable_array_step4/edit?language_uid=javascript)
```js

const seq = n => [...Array(n)].map((v, i) => i + 1)
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split('\n')
const cols = lines[1].split(' ').map(Number)
const matrix = cols.map(v => seq(v))

console.log(matrix.map(cols => cols.join(' ')).join('\n'))  
```

## 【実数をフォーマット指定して出力】複数の実数を出力

### [Final【実数をフォーマット指定して出力】複数の実数を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__format_real_number_boss/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split('\n')
const [Q, ...matrix] = lines.map(line => line.split(' ').map(Number))
const result = matrix.map(([N,M]) => N.toFixed(M))
console.log(result.join('\n'))
```

### [STEP: 1 1 つの実数を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__format_real_number_step1/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseFloat(stream)
console.log(N)
```

### [STEP: 2 1 つの実数を出力 2](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__format_real_number_step2/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseFloat(stream)
console.log(N)
```

### [STEP: 3 1 つの実数を出力 3](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__format_real_number_step3/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseFloat(stream)
console.log(N.toFixed(3))
```

### [STEP: 4 1 つの実数を出力 4](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__format_real_number_step4/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, M] = stream.split(' ').map(Number)
console.log(N.toFixed(M))
```

## 【出力幅を指定して出力】N 個の数値を M けた半角スペース埋めで出力

### [Final【出力幅を指定して出力】N 個の数値を M けた半角スペース埋めで出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__print_width_boss/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split('\n')
const [[N, M], ...A] = lines.map(line => line.split(' '))
const result = A.flat().map(v => v.padStart(M, ' ')) 
console.log(result.join('\n')

```

### [STEP: 1 数値を半角スペース埋めで出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__print_width_step1/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
console.log(stream.padStart(3, ' '))
```

### [STEP: 2 数値をゼロ埋めで出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__print_width_step2/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
console.log(stream.padStart(0, 3))
```

### [STEP: 3 複数の数値を半角スペース埋めで出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__print_width_step3/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const lines = stream.split('\n').slice(1)
const result = lines.map(line => line.padStart(3, ' '))
console.log(result.join('\n'))
```

### [STEP: 4 数値を M けた半角スペース埋めで出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__print_width_step4/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, M] = stream.split(' ')
console.log(N.padStart(M, ' '))
```

## 【出力形式を指定して出力】ペアの数値の入った表を罫線入りで出力 2

### [Final 【出力形式を指定して出力】ペアの数値の入った表を罫線入りで出力 2](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_step4/edit?language_uid=javascript)
```js
const decorate = (...array) => {
  const contents = array.map(v => v.toString()).join(', ')
  return `(${contents})`.padStart(6)
}

const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [H, W, A, B] = stream.split(' ').map(Number)
const line = Array(W).fill(decorate(A, B)).join(' | ')
const result = [...Array(H)]
  .map(_ => line)
  .join('\n' + '='.repeat(line.length) + '\n')

console.log(result)

```

### [STEP: 1 2 つの文字列を出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_step1/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, T] = stream.split('\n')
const result = `${S} + ${T} = ${S + T}`
console.log(result)
```

### [STEP: 2 文字列と N 個の整数の出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_step2/edit?language_uid=javascript)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, A, B] = stream.split(' ')
const result = [...Array(parseInt(N))].map(v => `(${A}, ${B})`)
console.log(result.join(', '))
```

### [STEP: 3 九九表を罫線入りで出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_step3/edit?language_uid=javascript)
```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const multiTable = seq(9).map(row => seq(9).map(col => row * col))
const decorateTable = multiTable
  .map(cols => cols.map(v => v.toString().padStart(2, ' ')))
  .map(cols => cols.join(' | '))
  .join('\n' + '='.repeat(42) + '\n')

console.log(decorateTable)

```

### [STEP: 4 ペアの数値の入った表を罫線入りで出力](https://paiza.jp/works/mondai/stdout_primer/stdout_primer__specific_format_step4/edit?language_uid=javascript)
```js
const decorate = (...array) => array
  .map(v => v.toString().padStart(9))
  .join(', ')
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [H, W, A, B] = stream.split(' ').map(Number)
const line = Array(W).fill(decorate(A, B)).join(' | ')
const result = [...Array(H)]
  .map(_ => line)
  .join('\n' + '='.repeat(line.length) + '\n')

console.log(result)
```
