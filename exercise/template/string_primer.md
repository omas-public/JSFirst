author: Omas Naohiko
create: 2022-10-12
update: 2022-10-12


# [文字列処理メニュー](https://paiza.jp/works/mondai/string_primer/problem_index?language_uid=javascript)


入力は以下を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
const lines = stream.split('\n')
const matrix = stream.split('\n').map(line => line.split(' '))
```

## [文字列の出力](https://paiza.jp/works/mondai/string_primer/basic_step1/edit?language_uid=javascript)

```js

const stream = 'paiza'
// write code here

console.log(result)
```

## [文字列の受け取り](https://paiza.jp/works/mondai/string_primer/basic_step2/edit?language_uid=javascript)

- String.prototype.trim()

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [i 文字目の出力](https://paiza.jp/works/mondai/string_primer/basic_step3/edit?language_uid=javascript)

- String.protptype.charAt(INDEX)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, i] = stream.split('\n')
// write code here

console.log(result)
```

## [文字列の条件判定](https://paiza.jp/works/mondai/string_primer/basic_step4/edit?language_uid=javascript)

3項演算 (戻り値 = 条件式) ? trueの時の値 : falseの時の値
```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [文字列の文字数](https://paiza.jp/works/mondai/string_primer/basic_step5/edit?language_uid=javascript)

- String.length

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [文字の検索](https://paiza.jp/works/mondai/string_primer/basic_step6/edit?language_uid=javascript)

- String.indexOf(TARGET)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, c] = stream.split('\n')
// write code here

console.log(result)
```

## [文字列の連結](https://paiza.jp/works/mondai/string_primer/basic_step7/edit?language_uid=javascript)

- Array.prototype.join(SEP)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [N, ...rest] = stream.split('\n')
// write code here

console.log(result)
```

## [部分文字列](https://paiza.jp/works/mondai/string_primer/normal_step1/edit?language_uid=javascript)

- String.prototype.slice(BIGIN, END)
- String.prototype.split(SEP)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[S], [i, j]] = stream.split('\n').map(line => line.split(' '))
// write code here

console.log(result)
```

## [文字列の挿入](https://paiza.jp/works/mondai/string_primer/normal_step2/edit?language_uid=javascript)

- String.prototype.split(SEP)
- String.prototype.slice(BIGIN, END)
- Array.prototype.join(SEP)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, T, N] = stream.split('\n')
// write code here

console.log(result)
```
- String.prototype.split(SEP)
- String.prototype.slice(BIGIN, END)
- Array.prototype.join(SEP)

## [文字列の書き換え](https://paiza.jp/works/mondai/string_primer/normal_step3?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [[S], [i, c]] = stream.split('\n').map(line => line.split(' '))
// write code here

console.log(result)
```

## [文字列から数値への変換](https://paiza.jp/works/mondai/string_primer/normal_step4?language_uid=javascript)

- parseInt(STRING), Number(STRING)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

- String(NUMBER), (NUMBER).toString()
- String.prototype.split(SEP)
- String.prototype.charAt(INDEX)

## [数値から文字列への変換](https://paiza.jp/works/mondai/string_primer/normal_step5?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [X, Y, N] = stream.split('\n').map(Number)
// write code here

console.log(result)
```

## [大文字から小文字への変換](https://paiza.jp/works/mondai/string_primer/normal_step6?language_uid=javascript)

- String.prototype.toLowerCase

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [小文字から大文字への変換](https://paiza.jp/works/mondai/string_primer/normal_step7?language_uid=javascript)

- String.prototype.toUpperCase

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```
- RegExp.protorype.test(STRING)
- String.prototype.replace(old, new)

## [大文字小文字の反転](https://paiza.jp/works/mondai/string_primer/normal_step8?language_uid=javascript)

```js
const f = c => /[A-Z]/.test(c) ? c.toLowerCase() : c.toUpperCase() 
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()

const result = S.replace(/[A-Za-z]/g, f)
console.log(result)
```

- String.prototype.includes(STRING)
- 3項演算

## [文字列の検索 ](https://paiza.jp/works/mondai/string_primer/normal_step9?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, T] = stream.split('\n')
// write code here

console.log(result)
```

## [文字列の反転](https://paiza.jp/works/mondai/string_primer/normal_step10/edit?language_uid=javascript)

- Array.prototype.reverse()
- Array.prototype.join(SEP)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```
- Array.prototype.reverse()
- Array.prototype.join(SEP)
- 3項演算

## [回文判定](https://paiza.jp/works/mondai/string_primer/normal_step11?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [文字列の分割](https://paiza.jp/works/mondai/string_primer/advance_step1?language_uid=javascript)

- String.prototype.split(SEP)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [日時データの変換その1](https://paiza.jp/works/mondai/string_primer/advance_step2/edit?language_uid=javascript)

- String.prototype.split(SEP)
- Array.prototype.join(SEP)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [日時データの変換その2](https://paiza.jp/works/mondai/string_primer/advance_step3/edit?language_uid=javascript)

- String.prototype.split(SEP)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [数値判定](https://paiza.jp/works/mondai/string_primer/advance_step4/edit?language_uid=javascript)

- isNaN(ANY)
- regExp.prototype.test(STRING)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

- [Set](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Set)

## [重複の削除](https://paiza.jp/works/mondai/string_primer/advance_step5?language_uid=javascript)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [数式の計算（1 桁）](https://paiza.jp/works/mondai/string_primer/advance_step8/edit?language_uid=javascript)

- [eval](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/eval)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```

## [数式の計算](https://paiza.jp/works/mondai/string_primer/advance_step9/edit?language_uid=javascript)

- [eval](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/eval)

```js
const S = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
// write code here

console.log(result)
```
## [巨大な数の足し算(繰り上がりなし)](https://paiza.jp/works/mondai/string_primer/advance_step10/edit?language_uid=javascript)

- [BigInt](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- Number.prototype.toString()

```js

const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, T] = stream.split('\n')
// write code here

console.log(result)
```

## [巨大な数のかけ算](https://paiza.jp/works/mondai/string_primer/advance_step12/edit?language_uid=javascript)

- [BigInt](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- Number.prototype.toString()

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [S, T] = stream.split('\n')
// write code here

console.log(result)
```