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
// write code here


console.log(result)
```

### [STEP: 2 指定された数字までの出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_num_new/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
// write code here


console.log(result)
```

### [STEP: 3 指定された行数の数字の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_column/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
// write code here


console.log(result)
```


### [STEP: 4 指定された範囲・行数の数字の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_range/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, K] = stream.split(' ').map(Number)
// write code here


console.log(result)
```

### [STEP: 5 二次元配列の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__print_map/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 6 二次元配列での要素の検索](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__search/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 7 二次元配列の最大の要素](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__search_max/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 8 二次元配列の行ごとの和](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__row_sum/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```

### [STEP: 9 さまざまな長さの配列の和](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__various_row_sum/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))
const sum = array => array.reduce((a, b) => a + b, 0)
// write code here


console.log(result)
```


### [STEP: 10 階段の出力](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__stairs/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
// write code here


console.log(result)
```


### [Final 二重ループ：基本編　積の最大](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__multi_max/edit?language_uid=javascript)


map pattern
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], A, B] = stream.split('\n')
  .map(line => line.split(' ').map(Number))
// write code here


console.log(result)
```
#### product pattern

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

ここからは少々難しいので解答を示しておく

### [STEP: 1 行列の転置](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__transposition/edit?language_uid=javascript)
```js
const [[N, K], ...matrix] = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
  .split('\n').map(line => line.split(' ').map(Number))

const transpose = matrix => [...Array(matrix[0].length)]
  .map((_, index) => matrix.map(row => row[index]))
const result = transpose(matrix).map(cols => cols.join(' ')).join('\n')
console.log(result)

```

### [STEP: 2 かけ算表](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__multiplication/edit?language_uid=javascript)
```js
const [[N], AN] = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
  .split('\n').map(line => line.split(' ').map(Number))

const result = AN.map(col1 => AN.map(col2 => col1 * col2).join(' ')).join('\n')
console.log(result)
```

### [STEP: 3 素数の個数](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__prime_number_easy/edit?language_uid=javascript)


```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const seq = n => [...Array(n)].map((v, i) => i + 1)
const isPrime = n => (n < 2) ? false
  : seq(Math.trunc(Math.sqrt(n))).slice(1).every(v => n % v !== 0)
  
const result = seq(N).filter(isPrime).length
console.log(result)
```

### [STEP: 4 log2](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__log2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)
const seq = n => [...Array(n)].map((v, i) => i + 1)

const result = seq(Math.trunc(Math.log2(N)))
  .map(v => Math.trunc(N / (2 ** v)))
  .reduce((a, b) => a + b, 0)
  
console.log(result)
```

### [STEP: 5 スーパー鳩時計](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__cuckoo_clock/edit?language_uid=javascript)

```js
const seq0 = n => [...Array(n)].map((v, i) => i)
const product = (...iters) => iters.reduce(
  (a, b) => a.flatMap(d => b.map(e => [d, e].flat())))

const fizzbuzz = n => (n === 0) ? 'FIZZBUZZ'
  : [[3, 'FIZZ'], [5, 'BUZZ']]
    .map(([t, s]) => (n % t) === 0 ? s : '')
    .join('')

const result = product(seq0(24), seq0(60))
  .map(([x, y]) => x + y)
  .map(fizzbuzz)
  .join('\n')

console.log(result)
```

### [STEP: 6 格子点](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__grid_point/edit?language_uid=javascript)

```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const product = (...iters) => iters.reduce(
  (a, b) => a.flatMap(d => b.map(e => [d, e].flat())))
const MAX = 99 - 1
const array = product(seq(MAX), seq(MAX))
  .filter(([a, b]) => a + b < 100 && (a ** 3) + (b ** 3) < 100000)
  .map(([a, b]) => a * b)
const result = Math.max(...array)

console.log(result)
```

### [STEP: 7 お金の支払い](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__payment/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [X, Y, Z] = stream.split(' ').map(Number)
const fun = (money, ...coins) => coins.sort((a, b) => b - a)
  .reduce((acc, coin) => {
    const n = Math.trunc(acc.at(-1) / coin)
    const rest = acc.at(-1) - (coin * n)
    return [...acc.slice(0, -1), n, rest]
  }, [money])
  .reduce((a, b) => a + b, 0)

const result = Math.min(fun(Z, Math.min(X, Y)), fun(Z, X, Y))
console.log(result)
```

### [二重ループ：活用編 三角形の探索](https://paiza.jp/works/mondai/double_roop_problems/double_roop_problems__triangle/edit?language_uid=javascript&t=4b67bee5bbc71630a462e0475d6ebbd0)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const N = parseInt(stream)

const fun = N => {
  const f = (a, b, c) = a ** 2 - b ** 2 - c ** 2 === 0
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
console.log(fun(N))
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