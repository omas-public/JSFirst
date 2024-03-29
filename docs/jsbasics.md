# JavaScript Basics

注釈のページはJavaScriptモダンプログラミング完全ガイド

## コメント(p6)

コメントとは，プログラムとして認識しない部分，行コメントとブロックコメントがある

行コメント
```js
// これはコメント
const a = 42 // ここからコメント
```

ブロックコメント
```js
/*
コメント
コメント
*/

if (True) /* コメント */  {
    //
}
```

## データ型(p5)

JavaScriptのデータ型は，昔ながらのプリミティブ型とオブジェクト型の2つがある．

- プリミティブ型
    - 数値型 (1, -1, 2.3 など)
    - 文字型 ('hello', 'こんにちは' など)
    - ブーリアン型 (true, false) 
    - null型 (null)
    - undefined型 (undefined)
- オブジェクト型
    - Array ([1,2,3])
    - Object ({key1: 'value1', key2: 'value3'})
    - その他 (Math, Date, consoleなど)

typeof 演算子でデータ型を特定できる

### リテラル

リテラルとはプログラム上に直接記述することができる値のこと．


#### 数値リテラル(p9)

JavaScriptの数値型は，すべて小数型である

```js
1
-1
2.3
```
#### 文字リテラル(p14)

文字リテラルは **'** または **"** または **`** のクォーテーションで囲む

```js
'hello'
'こんにちは'
'1'
'true'
'undefined'
```

#### Array(配列)リテラル(p20)

Arrayは複数の値を保持することができるコンテナでありすべての型を格納できる，参照にはインデックス番号を用いる

```js
[1,2,3]
['hello', 'world']
```

#### Object(オブジェクト)リテラル(p17)

Objectは，配列のインデックスをキーに置き換えたものでありすべての型を格納できる，参照はキーを用いる

```js
{firstname: 'omas', lastname: 'naohiko'}
```

#### 関数リテラル(p58)

数学の定義に沿う，入力(param)を渡すと出力が帰る(return)

- f(x) = x + 1      // 入力 x に1足した値を返す
- f(x, y) = x + y   // x, y を取り足し算した値を返す
- f(n) = 2n - 1     // 奇数を返す

これらをJavaScriptで書くと

- const f = x => x + 1
- const f = (x, y) => x + y
- const f = n => 2 * n - 1

となる


## 式 と 演算，演算子

式とは，なんらかの演算結果を返すものである，演算には算術演算やブール演算があり，いずれも数学のルールに沿う
演算子(operator)は，2つの被演算子(operand)を伴うものが多いが，まれに1つ(!)や3つ(3項演算子)のものもある 

### 論理(ブール)演算子(p41)

- ! (否定)
- &, &&  (論理積)
- |, ||  (論理和)
- ^   (排他的論理和)
- ?? (左辺がnullまたはundefinedの場合右辺を返す)

! (not演算)
|x      | 結果 |
| ----- | ---- |
|!false | true |
|!true  | false| 

and演算 (&&)
| x     |  y   |結果 |      
| ----- | ---- |-----|
|false  | false|false|
|false  | true |false| 
|true   | false|false|
|true   | true |true | 

or演算  (||)
| x     |  y   |結果 |      
| ----- | ---- |-----|
|false  | false|false|
|false  | true |true | 
|true   | false|true |
|true   | true |true | 

XOR(EOR)演算 (^)
| x       |  y      |結果 |      
| -----   | ----    |-----|
|0 (false)|0 (false)|0    |
|0 (false)|1 (true) |1    | 
|1 (true) |0 (false)|1    |
|1 (true) |1 (true) |0    | 

xorは ```(a || b) && !(a && b)``` または ```!(!(a || b) && (a && b))``` でも演算できる


### 比較演算子(p38)

- === 等しい(厳密)
- !== 等しくない(厳密)
- <=  以下
- \>=  以上
- <   未満
- \>   より大きい

### 算術演算子(p10)

- \+ (加算)
- \- (減算)
- \* (乗算)
- / (除算)
- % (剰余算)
- ** (べき乗)

### 3項演算

条件式 ? 真の時に返す値 : 偽の時に返す値

```js
const a = 1
const b = 2
// 小さい値を返す3項演算
a < b ? a : b
```

## 変数/定数，代入(p6)

変数，定数はいずれも数学の定義に沿う，値を入れることを代入と言い，使用する前には宣言を用いる．

宣言が定数の場合は ```const``` 変数の場合は ```let``` を用いる (過去は ```var```が使われた)

```js
const PI = 3.14
let b = 42
var c = 893
```

const
```js
const PI = 3.14
PI = 2 // => error
```

let vs var
```js
let a = 42
a = 1 // => ok

let b = 42
let b = 1 // => error

var c = 42
c = 1 // => ok

var d = 42
var d = 1 // => ok

{let e = 42}
e // => undefined

{var f = 42}
f // => 42
```
