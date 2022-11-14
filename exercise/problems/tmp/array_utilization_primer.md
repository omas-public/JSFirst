# [配列活用メニュー](https://paiza.jp/works/mondai/array_utilization_primer/problem_index?language_uid=javascript)

## 【配列を参照する操作】全ての要素に対する操作

### [STEP: 1 指定の要素のカウント](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__count/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = a => b => a === b
  const [[N, K], ...rest] = toList(split(' ', toInt))(args)
  return rest.flat().filter(f(K)).length
}
```


### [STEP: 2 全ての要素の和](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__sum/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = (a, b) => a + b
  const [N, ...rest] = toList(toInt)(args)
  return rest.reduce(f)
}
```

### [STEP: 3 配列の最大値](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__max/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, ...rest] = toList(toInt)(args)
  return Math.max(...rest)
}
```

### [STEP: 4 配列の最小値](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__min?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, ...rest] = toList(toInt)(args)
  return Math.min(...rest)
}
```

### [STEP: 5 指定要素があるかの判定](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__exist/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [[N, K], ...rest] = toList(split(' ', toInt))(args)
  return rest.flat().includes(K)
    ? 'Yes'
    : 'No'
}
```
### [STEP: 6 指定要素の先頭位置](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__find/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [[N, K], ...rest] = toList(split(' ', toInt))(args)
  return rest.flat().indexOf(K)
}
```

### [STEP: 7 要素の種類数](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__kind/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, ...rest] = toList(toInt)(args)
  return [...new Set(rest)].length
}
```

### [final【配列を参照する操作】全ての要素に対する操作 ](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__map?language_uid=javascript)

```js
const fun = (...args) => {
  const f = a => b => a + b
  const [[N, K], ...rest] = toList(split(' ', toInt))(args)
  return rest.flat().map(f(K))
}

print(join('\n'))(fun(...lines))
```

## 【配列への副作用を伴う操作】条件を満たす要素のみの配列作成

### [STEP: 1 配列の順序の反転](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__reverse/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [n, ...rest] = toList(toInt)(args)
  return rest.reverse()
}

print(join('\n'))(fun(...lines)) 
```

### [STEP: 2 変数の入れ替え](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__excange/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, ...rest] = (args)
  const AS = toList(toInt)(slice(0, -1)(rest))
  const [X, Y] = split(' ', toInt)(slice(-1)(rest))
  ;[AS[X - 1], AS[Y - 1]] = [AS[Y - 1], AS[X - 1]]
  return AS
}

print(join('\n'))(fun(...lines)) 
```

### [STEP: 3 指定要素の入れ替え](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__push_back/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, ...rest] = toList(toInt)(args)
  const AS = slice(0, N)(rest)
  const BS = slice(N)(rest)
  return [...AS, ...BS]
}
```

### [STEP: 4 末尾への要素の追加](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__push_back/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, ...rest] = toList(toInt)(args)
  const AS = slice(0, N)(rest)
  const BS = slice(N)(rest)
  return [...AS, ...BS]
}

print(join('\n'))(fun(...lines))
```

### [STEP: 5 指定位置への要素の追加](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__insert/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, ...AS] = toList(toInt)(slice(0, -1)(args))
  const [n, B] = split(' ', toInt)(slice(-1)(args)[0])
  AS.splice(n, 0, B)
  return AS
}

print(join('\n'))(fun(...lines))
```

### [STEP: 6 指定要素の削除](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__delete/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, ...AS] = toList(toInt)(slice(0, -1)(args))
  const n = toInt(slice(-1)(args)[0])
  AS.splice(n - 1, 1)
  return AS
}

print(join('\n'))(fun(...lines))
```

### [STEP: 7 九九表](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__reduse_easy/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = list => n => Array.from(list, v => v * n)
  const columns = range(1, 10)
  return Array.from(columns, f(columns)).map(join(' '))
}

const lines = []
print(join('\n'))(fun(...lines))

// 直積(product)を使う
// const fun = (...args) => {
//   const product = (...args) =>
//     args.reduce((a, b) => a.map(d => b.map(e => [d, e].flat())))
//   const f = v => Array.from(v, ([a, b]) => a * b)
//   const columns = range(1, 10)
//   return Array.from(product(columns, columns), f)
// }
```
### [STEP: 8 全ての要素を用いた処理](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__reduce/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const combination = array => array.flatMap(
    (v, i) => Array.from(array.slice(i + 1), a => [v, a]))
  const f = ([a, b]) => a * b
  const [N, ...rest] = toList(toInt)(args)
  return Array.from(combination(rest), f)
}
// TODO Wrong Answer 出力の順番が違う
// 組み合わせを作る際にそれぞれのインデックスとって並べ替えで行けるはず
```

### [STEP: 9 配列のサイズの変更](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__resize/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [[N, n], ...rest] = toList(split(' ', toInt))(args)
  return (N > n)
    ? slice(0, n)(rest)
    : [...rest, ...Array(n - N).fill(0)]
}

print(join('\n'))(fun(...lines))
```

### [STEP: 10 重複要素の削除](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__unique/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [N, ...rest] = toList(toInt)(args)
  return [...new Set(rest)]
}

print(join('\n'))(fun(...lines))
```

### [final 配列への副作用を伴う操作】条件を満たす要素のみの配列作成](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__filter?language_uid=javascript)

```js
const fun = (...args) => {
  const f = a => b => a <= b
  const [[N, K], ...rest] = toList(split(' ', toInt))(args)
  return rest.flat().filter(f(K))
}

print(join('\n'))(fun(...lines))
```

## 【配列に対しての複雑な処理】集団行動

### [STEP: 1 傾斜配点](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__exam/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const sum = list => list.reduce((a, b) => a + b)
  const f = a => b => zip(a, b).map(([c, d]) => c * d)
  const [[N], MS, ...rest] = toList(split(' ', toInt))(args)
  return Math.max(...Array.from(rest, f(MS)).map(sum))
}
```

### [STEP: 2 内定](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__offer/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [[N, K, M], ...rest] = toList(split(' ', toInt))(args)
  const passNum = rest.filter(f(K)).length
  return passNum >= M
    ? passNum - M
    : 0
}
```

### [STEP: 3 queue (9) 係](https://paiza.jp/works/mondai/array_utilization_primer/array_utilization_primer__queue/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const _f = (table => a => table.get(a))(
    new Map([
      ['in', n => list => list.push(n)]
    , ['out', _ => list =>  list.shift()]
    ])
  )

  const f = (acc, [a, b]) => {
    if (b === 'in' && acc.length === 0) return acc
    _f(a)(b)(acc)
    return acc
  }
  const [N, ...rest] = toList(split(' '))(args)
  return rest.reduce(f, [])
}  
```

### [STEP: 4 二人三脚]()

### [STEP: 5 場所取り]()

### [STEP: 6 ボウリング]()

### [final 【配列に対しての複雑な処理】集団行動]()