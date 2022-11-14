# JavaScript String Methods

Stringの重要メソッド，一部基本的なコードで再実装

## [String.length](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/length)

length プロパティは String オブジェクトの文字列長を UTF-16 コードユニットの数で表します。

```js
const length = str => {
  return [...str].map((v, i) => i).at(-1) + 1
}
```

## [String.slice](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

slice() メソッドは、元の文字列を変更せず、文字列の一部分を取り出し、それを新しい文字列として返します。

Simple code
```js
const slice = str => (begin, end) => {
  const inRange = (begin, end) => (index) => index >= begin && index < end
  return [...str].filter((v, i) => inRange(begin, end)(i)).join('')
}
```

## [String.repeat](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)

repeat() メソッドは、呼び出し元の文字列を指定した数だけコピーして結合した新しい文字列を構築して返します。

```js
const repeat = str => count => {
  return Array(count).fill(str).join('')
}
```

## [String.startsWith](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)

startsWith() メソッドは文字列が引数で指定された文字列で始まるかを判定して true か false を返します。

```js
const startsWith = str => search => {
  const begin = 0
  const end = length(search)
  return slice(str)(begin, end)
}
```

## [String.endsWith](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)

endsWith() メソッドは文字列が引数で指定された文字列で終わるかを判定して true か false を返します。

```js
const endsWith = str => search => {
  const begin = length(str) - length(search)
  const end = begin + length(search)
  return slice(str)(begin, end) === search
}
```

## [String.includes](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/includes)

includes() メソッドは、1 つの文字列を別の文字列の中に見出すことができるかどうかを判断し、必要に応じて true か false を返します。

```js
const searchIndexes = str => search => {
  const len = length(str) - length(search) + 1
  return [...Array(len)]
    .map((_, i) => [slice(str)(i, i + length(search) === search, i])
    .filter(([pred, _]) => pred)
    .map(([_, i]) => i)
}

const includes = str => search => {
  const indexes = searchIndexes(str)(search)
  return indexes.length > 0 
}
```

## [String.indexOf](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

indexOf() メソッドは、呼び出す String オブジェクト中で、 fromIndex から検索を始め、指定された値が最初に現れたインデックスを返します。値が見つからない場合は -1 を返します。

```js
const searchIndexes = str => search => {
  const len = length(str) - length(search) + 1
  return [...Array(len)]
    .map((_, i) => [slice(str)(i, i + length(search) === search, i])
    .filter(([pred, _]) => pred)
    .map(([_, i]) => i)
}

const indexOf = str => search => {
  const indexes = searchIndexes(str)(search)
  return (indexes.length > 0) ? indexes.at(0) : -1
}
```

## [String.lastIndexOf](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)

lastIndexOf() メソッドは、呼び出した String オブジェクトの中で、 fromIndex から前方向に検索を始め、指定された値が最後に現れたインデックスを返します。値が見つからない場合は -1 を返します。

```js
const searchIndexes = str => search => {
  const len = length(str) - length(search) + 1
  return [...Array(len)]
    .map((_, i) => [slice(str)(i, i + length(search) === search, i])
    .filter(([pred, _]) => pred)
    .map(([_, i]) => i)
}

const lastIndexOf = str => search => {
  const indexes = searchIndexes(str)(search)
  return (indexes.length > 0) ? indexes.at(-1) : -1
}
```

## [String.toLowerCase](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
toLowerCase() メソッドは、呼び出す文字列の値を小文字に変換して返します。

```js
const stringCase = fun => s => {  
  const acc = [...s].map(c => fun(c.codePointAt(0)))
  return String.fromCodePoint(...acc)
}

const toLowerCase = s => {
  const fun = cp => (cp > 0x40 && cp < 0x5b) ? cp + 0x20 : cp
  return stringCase(fun)(s)
}
```

## [String.toUpperCase](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

toUpperCase() メソッドは、呼び出す文字列の値を（文字列でない場合、文字列に変換して）大文字に変換して返します。

```js
const stringCase = fun => s => {  
  const acc = [...s].map(c => fun(c.codePointAt(0)))
  return String.fromCodePoint(...acc)
}

const toUpperCase = s => {
  const fun = cp => (cp > 0x60 && cp < 0x7b) ? cp - 0x20 : cp
  return stringCase(fun)(s)
}
```

## [String.split](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/split)

split() メソッドは、 String を指定した区切り文字列で分割することにより、文字列の配列に分割します。

```js
const split = str => search => {
  const indexes = searchIndexes(str)(search)
}
```

## [String.replace](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

replace() メソッドは、pattern に一致する文字列の一部またはすべてを replacement で置き換えた新しい文字列を返します。 pattern は文字列または RegExp、replacement は文字列または各一致で呼び出される関数です。pattern が文字列の場合、最初に一致した箇所のみを置き換えます。


## [String.search](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/search)

search() メソッドは、対象の String オブジェクトが正規表現で一致するかどうかを調べるためのメソッドです

## [String.match](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/match)

match() メソッドは、正規表現に対する文字列の照合結果を受け取ります。
