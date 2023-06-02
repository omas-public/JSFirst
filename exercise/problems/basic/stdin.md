# [標準入力サンプル問題セット](https://paiza.jp/works/mondai/stdin/problem_index?language_uid=javascript)

- console.logでの出力を学習する
- 文字列と数値の出力を学習する
- 変数への代入を学習する
- Array.joinの使い方を学習する
- 標準入力のとり方を学習する


## 使用メソッド

- requre('fs').readFileSync(FILE, 'utf8') // FILEをUTF8で読み出す
- String.trim()                           // 文字列の前後の空白を取り除く
- String.split(delimiter)                 // delimiterで分解
- Array.join(delimiter)                   // delimiterで結合
- Array.slice(n, m)                       // インデックスが n から m の手前まで取り出す
- parseInt(string, radix)                 // 文字数値を整数に変換(キャスト)
- Number(string)                          // 文字数値を数値に変換(キャスト)

```js
const file = '/dev/stdin'
// const file = './data'
const stream = require('fs').readFileSync(file, 'utf8').trim()
const lines = stream.split('\n')

console.log('stream => ', stream)
console.log('lines =>', lines)
```

## exercise

以後の解答は基本の2行(stream, lines)を省略しています,
解答を送る際には付け足してください

### [1つのデータの入力, 1行のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_1/edit?language_uid=javascript)

```js

console.log(lines[0]) // または console.log(stream) でも可 
```

### [3行のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_3_line/edit?language_uid=javascript)

1. ベタな書き方
```js

console.log(lines[0])
console.log(lines[1])
console.log(lines[2])

```
2. **Array.join(delimiter) を使うやり方**
```js
console.log(lines.join('\n'))
```

3. **for-of文でLoop**
```js
for (const line of lines) {
    console.log(lines)
}
```

4. その他のループ
```js
// while文
let counter = 0
while (counter < lines.length) {
    console.log(lines[counter])
}

// for文
for (let i = 0; i < lines.length; i+=1) {
    console.log(lines[i])
}

// forEach文
lines.forEach((v, i, a) => {
    console.log(v)
})

```

### [N行のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_n_line/edit?language_uid=javascript)

1. 真面目なパターン
```js
const N = parseInt(lines[0], 10)     // parseInt(string, radix) => stringを数値にキャスト
const select = lines.slice(1, N + 1)  // Array.slice(n,m)
console.log(select.join('\n')) 
```

2. **怠惰なパターン**
```js

console.log(lines.slice(1).join('\n'))
```

### [3つのデータの入力](https://paiza.jp/works/mondai/stdin/stdin_3/edit?language_uid=javascript)

1. 真面目なパターン
```js
const cols = lines[0].split(' ')
const select = cols.slice(0, 3)
console.log(select.join('\n'))
```

2. **怠惰なパターン**
```js
const cols = lines[0].split(' ')
console.log(cols.join('\n'))
```

### [N個のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_n/edit?language_uid=javascript)

1. 真面目なパターン
```js
const N = parseInt(lines[0], 10)
const cols = lines[1].split(' ')
const select = cols.slice(0, N)
console.log(select.join('\n'))

```

2. **怠惰なパターン**
```js
const cols = lines[1].split(' ')
console.log(cols.join('\n'))
```

### [カンマ区切りの3つのデータの入力](https://paiza.jp/works/mondai/stdin/stdin_comma_3/edit?language_uid=javascript)

1. 真面目なパターン
```js
const cols = lines[0].split(',')
const select = cols.slice(0, 3)
console.log(select.join('\n'))
```

2. **怠惰なパターン**
```js
const cols = lines[0].split(',')
console.log(cols.join('\n'))
```

### [カンマ区切りのN個のデータの入力](https://paiza.jp/works/mondai/stdin/stdin_comma_n/edit?language_uid=javascript)

1. 真面目なパターン
```js
const N = parseInt(lines[0], 10)
const cols = lines[1].split(',')
const select = cols.slice(0, N)
console.log(select.join('\n'))
```

2. **怠惰なパターン**
```js
const cols = lines[1].split(',')
console.log(cols.join('\n'))
```
