# [配列活用メニュー](https://paiza.jp/works/mondai/array_utilization_primer/problem_index?language_uid=javascript)

標準入力は以下を使用

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
const lines = stream.split('\n')
const matrix = stream.split('\n').map(line => line.split(' '))
```

## 【配列を参照する操作】全ての要素に対する操作

### [STEP: 1 指定の要素のカウント](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__count/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const fun = a => b => a === b
const result = rest.flat().filter(fun(K)).length

console.log(result)
```


### [STEP: 2 全ての要素の和](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__sum/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const fun = (a, b) => a + b
const result = rest.flat().reduce(fun)

console.log(result)
```

### [STEP: 3 配列の最大値](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__max/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...rest] = stream.split('\n').map(Number)

const result = Math.max(...rest)

console.log(result)
```

### [STEP: 4 配列の最小値](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__min?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...rest] = stream.split('\n').map(Number)

const result = Math.min(...rest)

console.log(result)
```

### [STEP: 5 指定要素があるかの判定](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__exist/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = rest.flat().includes(K) 
  ? 'Yes'
  : 'No'

console.log(result)
```
### [STEP: 6 指定要素の先頭位置](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__find/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const result = rest.flat().includes(K) 
  ? rest.flat().indexOf(K) + 1 
  : -1

console.log(result)
```

### [STEP: 7 要素の種類数](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__kind/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...rest] = stream.split('\n').map(Number)

const result = [...new Set(rest)].length

console.log(result)
```

### [final【配列を参照する操作】全ての要素に対する操作 ](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__map?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const fun = a => b => a + b
const result = rest.flat().map(fun(K))

console.log(result)

```

## 【配列への副作用を伴う操作】条件を満たす要素のみの配列作成

### [STEP: 1 配列の順序の反転](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__reverse/edit?language_uid=javascript)

```js

const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [n, ...rest] = stream.split('\n').map(Number)

const result = [...rest.reverse()].join('\n')

console.log(result)

```

### [STEP: 2 変数の入れ替え](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__excange/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const array = stream.split(' ').map(Number)

const result = [...array.reverse()].join(' ')

console.log(result)
```

### [STEP: 3 指定要素の入れ替え](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__push_back/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))
const A = matrix.slice(0, -1).flat()
const [X, Y] = matrix.at(-1)

;[A[X - 1], A[Y - 1]] = [A[Y - 1], A[X - 1]]
const result = A.join('\n')

console.log(result)
```

### [STEP: 4 末尾への要素の追加](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__push_back/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...rest] = stream.split('\n').map(Number)
const [A, B] = [rest.slice(0, N), rest.slice(N)]

const result = [...A, ...B].join('\n')

console.log(result)
```

### [STEP: 5 指定位置への要素の追加](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__insert/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))
const A = matrix.slice(0, -1).flat()
const [n, B] = matrix.at(-1)

const [head, tail] = [A.slice(0, n), A.slice(n)]
const result = [...head, B, ...tail].join('\n')

console.log(result)
```

#### 破壊的メソッド(pop, splice)を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...A] = stream.split('\n').map(line => line.split(' ').map(Number))
const [n, B] = A.pop()
A.splice(n, 0, B)
const result = A.flat().join('\n')
console.log(result)
```

### [STEP: 6 指定要素の削除](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__delete/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))
const A = matrix.slice(0, -1).flat()
const [n] = matrix.at(-1)
const head = A.slice(0, n - 1)
const tail = A.slice(n)
const result = [...head, ...tail].join('\n')

console.log(result)
```

#### 破壊的メソッドを使用(pop, splice)
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))

const [n] = matrix.pop()
A.splice(n - 1, 1)
const result = A.flat().join('\n')
console.log(result)
```

### [STEP: 7 九九表](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__reduse_easy/edit?language_uid=javascript)

```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const NINE = 9

const matrix = seq(NINE).map(m => seq(NINE).map(n) => m * n)
const result = matrix.map(cols => cols.join(' ')).join('\n')
```

#### 関数にまとめる
```js
const seq = n => [...Array(n)].map((v, i) => i + 1)
const fun = m => n => seq(m).map(v => v * n)
const NINE = 9
const matrix = seq(NINE).map(fun(NINE))
const result = matrix.map(cols => cols.join(' ')).join('\n')

console.log(result)
```

### [STEP: 8 全ての要素を用いた処理](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__reduce/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('./data', 'utf8').trim()
const [N, ...array] = stream.split('\n').map(Number)
const seq = n => [...Array(n)].map((v, i) => i + 1)

const combi2 = n => seq(n - 1).flatMap(a => seq(a).map(b => [a, b - 1]))
const fun = array => ([a, b]) => array[a] * array[b]
const result = combi2(N).map(fun(array)).join('\n')

console.log(result)

```

### [STEP: 9 配列のサイズの変更](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__resize/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, n], ...matrix] = stream.split('\n').map(line => line.split(' ').map(Number))

const array = (N > n)
  ? matrix.slice(0, n).flat()
  : [...matrix.flat(), ...Array(n - N).fill(0)]

const result = array.join('\n')
console.log(result)
```

### [STEP: 10 重複要素の削除](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__unique/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...rest] = stream.split('\n').map(Number)

const result = [...new Set(rest)].join('\n')

console.log(result)
```

### [final 配列への副作用を伴う操作】条件を満たす要素のみの配列作成](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__filter?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K], ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const fun = a => b => a <= b
const result = rest.flat().filter(fun(K)).join('\n')

console.log(result)
```

## 【配列に対しての複雑な処理】集団行動

### [STEP: 1 傾斜配点](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__exam/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], M, ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const sum = array => array.reduce((a, b) => a + b)
const zip = (...args) => {
  const size = Math.min(...Array.from(args, arg => arg.length))
  return Array.from(Array(size), (v, i) => args.map(arg => arg[i]))
}
const fun = a => b => zip(a, b).map(([c, d]) => c * d)
const result = Math.max(...Array.from(rest, fun(M)).map(sum))

console.log(result)
```

### [STEP: 2 内定](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__offer/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N, K, M], ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const fun = m => n => n >= m
const passNum = rest.filter(fun(K)).length
const result = passNum >= M ? passNum - M : 0

console.log(result)
```

### [STEP: 3 queue (9) 係](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__queue/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], ...rest] = stream.split('\n').map(line => line.split(' '))

const fun = (acc, [s, n]) => s === 'in' ? [...acc, s] : [...acc.slice(1)]
const result = rest.reduce(fun, []).join('\n')

console.log(result)
```

### [STEP: 4 二人三脚](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__find_pair/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[N], ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const combination2 = array => array.flatMap(
  (v, i) => Array.from(array.slice(i + 1), a => [v, a].flat()))
const fun = ([a, b], [c, d]) => Math.abs((a - b) - (c - d))
const array = combination2(rest).sort(fun).at(0)
const result = array.sort((a, b) => a - b).join('\n')

console.log(result)
```

### [STEP: 5 場所取り](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__line_up/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('data', 'utf8').trim()
const [[N, K, F], ...rest] = stream.split('\n').map(line => line.split(' ').map(Number))

const seq = n => [...Array(n)].map((v, i) => i + 1)
const result = [...new Set(rest.flat().slice(F))].join('\n')

console.log(result)
```

### [STEP: 6 ボウリング](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__bowling/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const matrix = stream.split('\n').map(line => line.split(' ').map(Number))

const fun = array => [
  10 - array.lastIndexOf(1)
  , array.filter(v => v === 1).length
]
const result = fun(matrix.flat()).join('\n')

console.log(result)
```


### [Final 【配列に対しての複雑な処理】集団行動](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__group_move/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('./data', 'utf8').trim()
const [[N, Q], ...S] = stream.split('\n').map(line => line.split(' '))

const seq = n => [...Array(n)].map((v, i) => i + 1)
const fun = (acc, [command, a, b]) => {
  const reverse = ([...clone]) => clone.reverse()
  const resize = array => n => array.slice(0, n)
  const swap = ([...clone]) => (a, b) => {
    [clone[a], clone[b]] = [clone[b], clone[a]]
    return clone
  }
  return {
    'swap': swap(acc)(parseInt(a) - 1, parseInt(b) - 1),
    'resize': resize(acc)(parseInt(a)),
    'reverse': reverse(acc)
  }[command]
}

const result = S.reduce(fun, seq(parseInt(N))).join('\n')
console.log(result)

```