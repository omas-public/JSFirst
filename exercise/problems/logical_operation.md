author: Omas Naohiko
create: 2022-10-12
update: 2022-10-12

# [論理演算メニュー](https://paiza.jp/works/mondai/logical_operation/problem_index?language_uid=javascript)

コンピュータ演算の基礎となる論理演算(ブール演算)とその合成を学習する

- & 及び && (and)
- | 及び || (or)
- ! (not)
- ^ (xor)

入出力は以下を使用
```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const cols = stream.split(' ')
const lines = stream.split('\n')
const matrix = stream.split('\n').map(line => line.split(' '))
```


## 論理演算を用いた計算のまとめ

STEP 9 及び 10 は，今は解けなくても良いが，ブール代数式から導けることを理解する．

### [STEP: 1 論理積( AND )の基本](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step1/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b] = stream.split(' ').map(Number)

const result = a & b // Number(a && b)
console.log(result)
```



### [STEP: 2 論理和( OR )の基本](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step2/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b] = stream.split(' ').map(Number)

const result = a | b // Number(a || b)
console.log(result)

```

### [STEP: 3 否定( NOT )の基本](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step3/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const a = parseInt(stream)

const result = a ^ 1 // Number(!a)
console.log(result)

```

### [STEP: 4 排他的論理和( XOR )の基本](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step4/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b] = stream.split(' ').map(Number)

const result = a ^ b //  (a & !b) || (!a & b)
console.log(result)

```

###  [STEP: 5 NAND 演算の基本](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step5/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b] = stream.split(' ').map(Number)

const result = (a & b) ^ 1 // Number(!(a & b))
console.log(result)
```

### [STEP: 6 NOR 演算の基本](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step6/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b] = stream.split(' ').map(Number)

const result = (a | b) ^ 1 // Number(!(a | b))
console.log(result)
```

### [STEP: 7 XNOR 演算の基本](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step7/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b] = stream.split(' ').map(Number)

const result = (a ^ b) ^ 1 // Number(!(a ^ b))
console.log(result)
```

### [STEP: 8 半加算器](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step8/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b] = stream.split(' ').map(Number)

const result = [a & b, a ^ b].join(' ')
console.log(result)

```

### [STEP: 9 全加算器](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_step9/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b, C1] = stream.split(' ').map(Number)

const Cx = a & b
const Sy = a ^ b
const Cy = Sy & C1
const C2 = Cx ^ Cy
const S = Sy ^ C1

const result = [C2, S].join(' ')
console.log(result)
```

#### 別解:[全加算回路の論理式](https://eng.kice.tokyo/logic/adder/)により

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b, C1] = stream.split(' ').map(Number)

const C2 = (a & b) | (C1 & (a ^ b))
const S = C1 ^ (a ^ b)

const result = [C2, S].join(' ')
console.log(result)
``` 
と置き換えることができる


### [論理演算を用いた計算のまとめ](https://paiza.jp/works/mondai/logical_operation/logical_operation__basic_boss/edit?language_uid=javascript)

```js
const stream = require('fs').readFileSync('/dev/stdin', 'utf8').trim()
const [a, b, c, d] = stream.split(' ').map(Number)

const result = !((!a & !b) | !c) ^ d // (a | b) & c ^ d (別解参照)
console.log(result)
```
#### 別解: !((!a & !b) | !c) ^ d は ド・モルガンの法則で (a | b) & c ^ d に簡約できる

1. !((!a & !b) | !c) ^ d  // !a & !b === !(a | b) で簡約
2. !(!(a | b) | !c) ^ d   // !a | !b === !(a & b) で簡約
3. (a | b) & c ^ d
