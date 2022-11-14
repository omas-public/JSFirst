# [二重ループメニュー](https://paiza.jp/works/mondai/double_roop_problems/problem_index?language_uid=javascript)

入力は以下を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
const lines = stream.split('\n')
const matrix = stream.split('\n').map(line => line.split(' '))
```

## 二重ループ：基本編　積の最大

### [STEP: 1 指定された数字までの出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_column_new/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const seq = n => [...Array(n)].map((v, i) => i + 1)
const result = seq(N).join(' ')
console.log(result)

```

### [STEP: 2 指定された数字までの出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_num_new/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const seq = n => [...Array(n)].map((v, i) => i + 1)
const result = seq(n).join('\n')
console.log(result)
```

### [STEP: 3 指定された行数の数字の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_column/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const seq = n => [...Array(n)].map((v, i) => i + 1)
const contents = seq(5).join(' ')
const result = Array(N).fill(contents).join('\n')
console.log(result)

```


### [STEP: 4 指定された範囲・行数の数字の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_range/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, K] = stream.split(' ').map(Number)

const seq = n => [...Array(n)].map((v, i) => i + 1)
const contents = seq(N).join(' ')
const result = Array(K).fill(contents).join('\n')
console.log(result)
```

### [STEP: 5 二次元配列の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_map/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = matrix.map(cols => cols.join(' ')).join('\n')
console.log(result)
```

### [STEP: 6 二次元配列での要素の検索](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__search/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))

const divmod = (a, b) => [Math.trunc(a / b), a % b]
const index = matrix.flat().indexOf(1)
const result = divmod(index, K).map(v => v + 1).join(' ')
console.log(result)

```

### [STEP: 7 二次元配列の最大の要素](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__search_max/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = Math.max(...matrix.flat())
console.log(result)

```

### [STEP: 8 二次元配列の行ごとの和](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__row_sum/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))

const sum = array => array.reduce((a, b) => a + b, 0)
const result = matrix.map(sum).join('\n')
console.log(result)
```

### [STEP: 9 さまざまな長さの配列の和](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__various_row_sum/edit?language_uid=javascript)


テスト2 ゴミデータ(空白スペース)有り trim or slice が必要
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))

const sum = array => array.reduce((a, b) => a + b, 0)
const result = matrix.map(array => array.slice(1)).map(sum).join('\n')
console.log(result)

```


### [STEP: 10 階段の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__stairs/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const seq = n => [...Array(n)].map((v, i) => i + 1)
const result = seq(N).map(seq).map(v => v.join(' ')).join('\n')
console.log(result)
```


### [Final 二重ループ：基本編　積の最大](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__multi_max/edit?language_uid=javascript)


map pattern
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], A, B] = stream.split('\n')
  .map(line => line.split(' ').map(Number))

const fun = (A, B) => A.map(a => B.map(b => [a, b])).flat()
const result = Math.max(...fun(A, B).map(([a, b]) => a * b))
console.log(result)
```
product pattern
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], A, B] = stream.split('\n')
  .map(line => line.split(' ').map(Number))

const product = (...iters) => iters.reduce(
  (a, b) => a.flatMap(d => b.map(e => [d, e].flat())))
const result = Math.max(...product(A, B).map(([a, b]) => a * b).flat())
console.log(result)

```

## 二重ループ：活用編 三角形の探索



### [二重ループ：活用編 三角形の探索](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__triangle/edit?language_uid=javascript&t=4b67bee5bbc71630a462e0475d6ebbd0)

```js
const fun = (...args) => {
  const f = (a, b, c) = a ** 2 - b ** 2 - c ** 2 === 0
  const N = toInt(args[0])
  for (let a = 1; a < N - 1; a += 1) {
    for (let b = 1; a + b < N; b += 1) {
      let c = N - (a + b)
      if (f(a, b, c)) {
        return 'YES'
      }
    }
  }
  return 'NO'
}
```

爆発でtime out
```js
const fun = (...args) => {
  const product = (...iters) => 
    iters.reduce((a, b) => a.flatMap(d => b.map(e => [d, e].flat())))
  const f1 = n => ([a, b, c]) => a + b + c === n
  const f2 = ([a, b, c]) => a ** 2 - b ** 2 - c ** 2 === 0

  const N = toInt(args[0])
  const list = range(1, N)
  return product(list, list, list).filter(f1(N)).some(f2)
    ? 'YES'
    : 'NO'
}
```