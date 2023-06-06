# [標準出力メニュー](https://paiza.jp/works/mondai/stdout_primer/problem_index?language_uid=javascript)

## 基本

### 一つの値を出力

```js
console.log(1)
``` 
### 複数の値をスペース区切りで出力

#### [console.log(obj1 ... objN)](https://developer.mozilla.org/ja/docs/Web/API/console/log)を使う
```js
console.log(1, 2, 3)
```

変数を使う
```js
const [a, b, c] = [1, 2, 3] 
console.log(a, b, c)
```


#### [spread演算子を使う](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
```js
console.log(...[1, 2, 3])
```
変数を使う
```js
const list = [1, 2, 3]
console.log(...list)
```


#### [Array.joinを使う](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
```js
console.log([1, 2, 3].join(' '))
```

変数を使う
```js
const list = [1, 2, 3]
console.log(list.join(' '))
```


### 複数の値を改行区切りで出力

#### ベタに書く
```js
console.log(1)
console.log(2)
console.log(3)
```

#### 改行('\n')を使う

```js
console.log('1\n2\n3')
```

#### [for文を使う](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
```js
for (let i = 0; i < 3; i+=1) {
    console.log(i + 1)
}
```

#### [for-of文を使う](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement)
```js
for (let i of [1, 2, 3]) {
    console.log(i + 1)
}
```

#### [Array.joinを使う](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
```js
console.log([1,2,3].join('\n'))
```


### 0...N - 1 までの シーケンスを改行区切りで出力

####  [for文を使う](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement)
```js
const N = 10
for (let i = 0; i < N; i+=1) {
    console.log(i)
}
```

#### 配列(Array)の結合(join)

```js
const N = 10
const acc  = []
for (let i = 0; i < N; i+=1) {
    acc.push(i)
}
console.log(...acc)
```

#### Array(N)とmapを使用

```js
const N = 10
const acc = [...Array(N)].map((_, i) => i)
console.log(acc.join('\n'))
```
