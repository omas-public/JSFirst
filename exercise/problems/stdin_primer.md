Author: Omas Naohiko
create: 2022-10-12
update: 2022-11-24

# [標準入力メニュー](https://paiza.jp/works/mondai/stdin_primer/problem_index?language_uid=javascript)

このexerciseは,[paiza.code-snippets](../../paiza_snippet/snippets/paiza.code-snippets)
を使用する前提で行う，解答例は下記メソッドを省略しMain関数のみ記載する

## 使用メソッド

- inputs().readStream([Number])  // stream([数字に変換])でデータを取得
- inputs().readRows([Number])    // 1列複数行([数字に変換])を配列としてデータを取得
- inputs().readCols([Number])    // 1行複数列([数字に変換])を配列としてデータを取得
- inputs().readMatrix([Number])  // 複数行複数列([数字に変換])を2重配列としてデータを取得
- identity(VALUE)                // VALUEを返す
- outputs(VALUE).toXXX()         // VALUEに関数を適用して表示する

## 【行入力】

### [Final 【行入力】1,000 行の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__read_line_boss/edit?language_uid=javascript)

```js
(() => {

  const fn = (list) => {
    return list
  }
  const list = inputs().readRows()
  const result = fn(list)
  outputs(result).toRows()

})()
```


### [STEP: 1 1 行の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__read_line_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (s) => {
    return s
  }
  const s = inputs().readStream()
  const result = fn(s)
  outputs(result).toLine()

})()
```

### [STEP: 2 2 行の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__read_line_step2/edit?language_uid=javascript)

```js
(() => {

  const fn = (s, t) => {
    return [s, t]
  }
  const [s, t] = inputs().readRows()
  const result = fn(s, t)
  outputs(result).toRows()

})()
```

### [STEP: 3 3 行の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__read_line_step3/edit?language_uid=javascript)

```js
(() => {

  const fn = (s, t, u) => {
    return [s, t, u]
  }
  const [s, t, u] = inputs().readRows()
  const result = fn(s, t, u)
  outputs(result).toRows()

})()
```

### [STEP: 4 10 行の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__read_line_step4/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const array = inputs().readRows()
  const result = fn(array)
  outputs(result).toRows()

})()
```

## 【半角スペース区切りでの文字列の分割】

### [Final【半角スペース区切りでの文字列の分割】5 つの文字列の半角スペース区切りでの分割](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_string_boss/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const array = split(' ')('one two three four five')
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [2 つの文字列の半角スペース区切りでの分割](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_string_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (a, b) => {
    return [a, b]
  }
  const [a, b] = 'Hello paiza'.split(' ')
  const result = fn(a, b)
  outputs(result).toRows()

})()
```

### [3 つの文字列の半角スペース区切りでの分割](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_string_step2/edit?language_uid=javascript)

```js
(() => {

  const fn = (...args) => {
    return args
  }
  const [a, b, c] = split(' ')('He likes paiza')
  const result = fn(a, b, c)
  outputs(result).toRows()

})()
```


## 【半角スペース区切りの入力】

### [Final【半角スペース区切りの入力】半角スペース区切りの 1,000 個の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_input_boss/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const array = inputs().readCols()
  const result = fn(array)
  outputs(result).toRows()

})()
```


### [1 つの入力 ](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_input_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (s) => {
    return s
  }
  const s = inputs().readStream()
  const result = fn(s)
  outputs(result).toLine()

})()

```

### [半角スペース区切りの 2 つの入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_input_step2/edit?language_uid=javascript) 

```js
(() => {

  const fn = (s1, s2) => {
    return [s1, s2]
  }
  const [s1, s2] = inputs().readCols()
  const result = fn(s1, s2)
  outputs(result).toRows()

})()
```

### [半角スペース区切りの 3 つの入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_input_step3/edit?language_uid=javascript)

```js
(() => {

  const fn = (...args) => {
    return args
  }
  const [s1, s2, s3] = inputs().readCols()
  const result = fn(s1, s2, s3)
  outputs(result).toRows()

})()
```

### [半角スペース区切りの 10 個の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__split_input_step4/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const array = inputs().readCols()
  const result = fn(array)
  outputs(result).toRows()

})()
```

## 【整数の行入力】

### [Final 整数の行入力】1,000行の整数の入力 ](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_row_boss/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const array = inputs().readRows(Number)
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [1 行の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_row_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (a) => {
    return a
  }
  const a = inputs().readStream(Number)
  const result = fn(a)
  outputs(result).toLine()

})()
```

### [2 行の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_row_step2/edit?language_uid=javascript)

```js
(() => {

  const fn = (a, b) => {
    return [a, b]
  }
  const [a, b] = inputs().readRows(Number)
  const result = fn(a, b)
  outputs(result).toRows()

})()
```

### [5 行の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_row_step3/edit?language_uid=javascript)

```js
(() => {

  const fn = (...args) => {
    return args
  }
  const [a1, a2, a3, a4, a5] = inputs().readRows(Number)
  const result = fn(a1, a2, a3, a4, a5)
  outputs(result).toRows()

})()
```

### [10 個の整数の半角スペース区切りの入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_space_step4/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const array = inputs().readRows(Number)
  const result = fn(array)
  outputs(result).toRows()

})()
```

## 【整数の半角スペース区切りの入力】

### [Final 【整数の半角スペース区切りの入力】1,000個の整数の半角スペース区切りの入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_space_boss/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const array = inputs().readCols(Number)
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [STEP: 1 1 つの整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_space_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (a) => {
    return a
  }
  const a = inputs().readStream(Number)
  const result = fn(a)
  outputs(result).toLine()

})()
```

### [2 つの整数の半角スペース区切りの入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_space_step2/edit?language_uid=javascript)

```js
(() => {

  const fn = (a, b) => {
    return [a, b]
  }
  const [a, b] = inputs().readCols(Number)
  const result = fn(a, b)
  outputs(result).toRows()

})()

```

### [5 つの整数の半角スペース区切りの入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_space_step3/edit?language_uid=javascript)

```js
(() => {

  const fn = (...args) => {
    return args
  }
  const [a1, a2, a3, a4, a5] = inputs.readCols(Number)
  const result = fn(a1, a2, a3, a4, a5)
  outputs(result).toRows()

})()
```

### [10 個の整数の半角スペース区切りの入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_space_step4/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const array = inputs.readCols(Number)
  const result = fn(array)
  outputs(result).toRows()

})()
```

## 【N 個の整数の入力】

### [Final【N 個の整数の入力】1 行目で与えられる N 個の整数の入力 (large) ](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_number_boss/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readCols(Number)
  const result = fn(array)
  outputs(result).toRows()

})()

```

### [STEP: 1 改行区切りでの N 個の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_number_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readRows(Number)
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [STEP: 2 2 行目で与えられる N 個の整数の入力 ](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_number_step2/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix.flat())
  outputs(result).toRows()

})()
```

### [STEP: 3 1 行目で与えられる N 個の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_number_step3/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readCols(Number)
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [STEP: 4 2 行目で与えられる N 個の整数の入力 (large)](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__integer_number_step4/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix.flat())
  outputs(result).toRows()

})()
```

## 【N個の文字列の入力】

### [Final【N個の文字列の入力】1 行目で与えられる N 個の文字列の入力 (large) ](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__string_number_boss/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readCols()
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [STEP: 1 改行区切りでの N 個の文字列の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__string_number_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readRows()
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [STEP: 2 2 行目で与えられる N 個の文字列の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__string_number_step2/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readRows()
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [STEP: 3 1 行目で与えられる N 個の文字列の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__string_number_step3/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readCols()
  const result = fn(array)
  outputs(result).toRows()

})()
```

## 1 行目で与えられる N 個の実数の入力 (large)

### [Final 1 行目で与えられる N 個の実数の入力 (large)](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__real_number_boss/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readCols(Number)
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [STEP: 1 改行区切りでの N 個の実数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__real_number_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readRows(Number)
  const result = fn(array)
  outputs(result).toRows()

})()
```

### [STEP: 2 2 行目で与えられる N 個の実数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__real_number_step2/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix.flat())
  outputs(result).toRows()

})()
```

### [STEP: 3 1 行目で与えられる N 個の実数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__real_number_step3?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...array] = inputs().readRows(Number)
  const result = fn(array)
  outputs(result).toRows()

})()

```

### [STEP: 4 2 行目で与えられる N 個の実数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__real_number_step4?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix.flat())
  outputs(result).toRows()

})()

```

## 【組になったデータの入力】文字列と整数の組からの選択


### [Final【組になったデータの入力】文字列と整数の組からの選択]()

```js
(() => {

  const fn = (s, i) => {
    return [s, parseInt(i)]
  }
  const [N, ...matrix] = inputs().readMatrix()
  const result = fn(matrix[7])
  outputs(result).toCols()

})()
```



### [STEP: 1 1 つの整数の組の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__pair_data_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (a, b) => {
    return [a, b]
  }
  const [a, b] = inputs().readCols(Number)
  const result = fn(a, b)
  outputs(result).toCols()

})()

```

### [STEP: 2 N 組の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__pair_data_step2?language_uid=javascript)

```js
(() => {

  const fn = (matrix) => {
    return matrix
  }
  const [N, ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix)
  outputs(result).toMatrix()

})()

```


### [STEP: 3 整数の組からの選択](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__pair_data_step3/edit?language_uid=javascript)

```js
(() => {

  const fn = (array) => {
    return array
  }
  const [N, ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix[7])
  outputs(result).toCols()

})()

```

### [STEP: 4 文字列と整数の組の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__pair_data_step4/edit?language_uid=javascript)

```js
(() => {

  const fn = (matrix) => {
    return matrix.map([s, i] => [s, parseInt(i)])
  }
  const [N, ...matrix] = inputs().readMatrix()
  const result = fn(matrix)
  outputs(result).toMatrix()

})()

```

## 【N 行 M 列のデータの入力】行ごとに要素数の異なる整数列の入力

### [Final【N 行 M 列のデータの入力】行ごとに要素数の異なる整数列の入力]()

```js
(() => {

  const fn = (matrix) => {
    return matrix.map(([M, ...rest]) => rest)
  }

  const [N, ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix)
  outputs(result).toMatrix()

})()
```

### [STEP: 1 3 行 3 列の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__matrix_data_step1/edit?language_uid=javascript)

```js
(() => {

  const fn = (matrix) => {
    return matrix
  }

  const matrix = inputs().readMatrix(Number)
  const result = fn(matrix)
  outputs(result).toMatrix()

})()
```

### [STEP: 2 N 行 3 列の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__matrix_data_step2/edit?language_uid=javascript)

```js
(() => {

  const fn = (matrix) => {
    return matrix
  }

  const [N, ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix)
  outputs(result).toMatrix()

})()
```

### [STEP: 3 3 行 M 列の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__matrix_data_step3?language_uid=javascript)

```js
(() => {

  const fn = (matrix) => {
    return matrix
  }

  const [N, ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix)
  outputs(result).toMatrix()

})()

```

### [STEP: 4 N 行 M 列の整数の入力](https://paiza.jp/works/mondai/stdin_primer/stdin_primer__matrix_data_step4/edit?language_uid=javascript)

```js
(() => {

  const fn = (matrix) => {
    return matrix
  }

  const [[N, M], ...matrix] = inputs().readMatrix(Number)
  const result = fn(matrix)
  outputs(result).toMatrix()

})()
```