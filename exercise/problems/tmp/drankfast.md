# Dランク早解きセット

## [Problems](https://paiza.jp/works/mondai/drankfast/problem_index?language_uid=javascript)

### [1日1万歩](https://paiza.jp/works/mondai/drankfast/d1_step_distance/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [d, s] = split(' ')(args[0])
  const d2cm = d * 1000 * 100 // km to cm
  return  d2cm / s >= 10000
    ? 'yes'
    : 'no'
}
```

### [正n角形の内角](https://paiza.jp/works/mondai/drankfast/d2_polygon/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = n => 180 * (n - 2)
  const n = toInt(args[0])
  return Math.trunc(f(n) / n)
}

```

### [うなりの周波数](https://paiza.jp/works/mondai/drankfast/d3_beat_frequency/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = (a, b) = Math.abs(a - b)
  const [f1, f2] = split(' ', toInt)(args[0])
  return f(f1, f2)
}

```

### [たぶん... ](https://paiza.jp/works/mondai/drankfast/d4_maybe/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [s] = args
  return s.replace(', maybe.', '!!')
}

```

### [アンダーライン](https://paiza.jp/works/mondai/drankfast/d5_underline/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [s] = args
  return join(' ')([s, '^'.repeat(s.length)])
}
```


### [式の計算](https://paiza.jp/works/mondai/drankfast/d6_calculator/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [v1 , op , v2] = split(' ', args[0])
  return parseInt(v1, 10) + parseInt(v2)
}

// 別解
//  const f = (a, b) => a + b
//  return [v1, v2].map(toInt).reduce(f)
```

### [鉛筆の濃さ](https://paiza.jp/works/mondai/drankfast/d7_pencil/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const table = split(',')('6B,5B,4B,3B,2B,B,HB,F,H,2H,3H,4H,5H,6H,7H,8H,9H')
  const k = toInt(args[0])
  return table[k - 1]
}

```

### [靴のサイズ](https://paiza.jp/works/mondai/drankfast/d8_shoes_size/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = n => [(n - 18).toFixed(1), (n - 18.5).toFixed(1)]
  const s = parseFloat(args[0])
  return f(s)
}
print(join(' '))(fun(...lines))
// 別解
// const f = n => [18, 18.5].map(v => n - v).map(v => v.toFixed(1))
```
### [30人31脚](https://paiza.jp/works/mondai/drankfast/d9_30people31legs/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const m = toInt(args[0])
  return m + 1
}

```
### [ボーダー柄 ](https://paiza.jp/works/mondai/drankfast/d10_stripe_pattern/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const n = toInt(args[0])
  const f = list => join('\n')(list.map(v => v.repeat(10)))
  return Array(n).fill(f(['#', '.']))
}

print(join('\n'))(fun(...lines))
```

### [縦書き](https://paiza.jp/works/mondai/drankfast/d11_vertical_writing/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [s] = args
  return Array.from(s)
}
print(join('\n'))(fun(...lines))
```

### [山の英語表記](https://paiza.jp/works/mondai/drankfast/d12_mountain/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const s = args[0]
  return `Mt. ${}`
}
```

### [満員電車の乗車率](https://paiza.jp/works/mondai/drankfast/d13_crowded_train/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = n => n / 140 * 100
  const n = toInt(args[0])
  return `${Math.trunc(f(n))}%`
}
```

### [0から9までのカウンタ](https://paiza.jp/works/mondai/drankfast/d14_counting/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = n => [...Array.from(10).keys()].map(v => v + n % 10)
  const n = toInt(args[0])
  return f(n)
}
print(join('\n'))(fun(...lines))
```

### [気温の変化](https://paiza.jp/works/mondai/drankfast/d15_temperature/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [t1, t2] = split(' ', toInt)(args[0])
  const diff = t2 - t1
  return diff > 0 ? `+${diff}` : `${diff}`
}
```

### [アルファベットの穴の数](https://paiza.jp/works/mondai/drankfast/d16_alphabet_hole/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = table => s => Math.max(...table.map((v, i) => v.includes(s) ? i + 1: 0))
  const [s] = args
  return f(['ADOPQR','B'])(s)
}
```

### [騒音レベル](https://paiza.jp/works/mondai/drankfast/d17_noise/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = (a, b) = n => a <= n && n < b
  const l = toInt(args[0])
  
  if (l < 30) return 'quiet'
  if (f(30, 50)(l)) return 'normal'
  if (f(50, 70)(l)) return 'noisy'
  return 'very noisy'
}

// 別解
const fun = (...args) => {
  const f = (t, option) => n => {
    const _f = n => ([a, b])  => a <= n && n < b
    return t.get([...t.keys()].filter(_f(n))[0]) ?? option
  }
  const table = new Map([
    [[0, 30], 'quiet'], [[30, 50],'normal'], [[50, 70], 'noisy']
  ])
  const l = toInt(args[0])
  return f(table, 'very noisy')(l)
}
```

### [TGIF](https://paiza.jp/works/mondai/drankfast/d18_tgif/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const [s] = args
  return s === 'Friday'
    ? 'TGIF'
    : `Still ${s}`
}

```

### [可聴領域](https://paiza.jp/works/mondai/drankfast/d19_hearing_range/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const _fun = (t, option) => n => {
    const _f = c => ([a, b]) => a <= c && c <= b
    return t.get([...t.keys()].filter(_f(n))[0]) ?? option
  }
  const table = new Map([
    [[20, 15000], 'yes'],[[15001, 20000], 'not sure']
  ])
  const f = parseFloat(args[0])
  
  return _fun(table, 'no')(f)
}

print(join('\n'))(fun(...lines))
```

### [駄菓子の大人買い](https://paiza.jp/works/mondai/drankfast/d20_dagasi/edit?language_uid=javascript)

```js
const fun = (...args) => {
  const f = n => Math.trunc(n / 10)
  const m = toInt(args[0])
  return f(m)
}

```