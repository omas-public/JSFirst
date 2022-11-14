# Paiza Snippet

## Summary

[Paiza lerning](https://paiza.jp/works/mypage) の入力値を簡易に取得する関数のスニペット

## Usage

1. [スニペット](./snippets/*)を **$HOME/.config/Code/User/snippets/** にcpしてください
2. ```$ cp ./snippets/* ~/.config/Code/User/snippets/```
3. VSCODEで(拡張子js)のファイル上で```paiza<TAB>```と```fun<TAB>```を使用


## Code

```js
/**
 * 引数をそのまま返す
 * @param {any} v 
 * @returns any
 * @example identity(42) => 42
 */
const identity = v => v

/**
 * 文字列を分割して配列を返す
 * @param {string} sep 
 * @param {string} string 
 * @returns array
 * @example split(' ')('4 2') => [4, 2]
 */
const split = sep => string => string.split(sep)
/**
 * 配列をセパレータで合成する
 * @param {string} sep 
 * @param {array} array 
 * @returns string
 * @example join(' ')([4, 2]) => '4 2'
 */
const join = sep => array => array.join(sep)
/**
 * fnを適用した上で画面に表示する
 * @param {function} fn 
 * @param {any} any 
 * @returns undefined
 * @example display(identity)(42) => console.log(42)
 * @example display(join(' '))([4, 2]) => console.log('4 2')
 */
const display = fn => v => console.log(fn(v))
/**
 * 入力から各形式に値を取り出す
 * @param {string} file 
 * @returns any
 */
const inputs = (file = '/dev/stdin') => {
  const stream = require('fs').readFileSync(file, 'utf-8').trim()
  const toArray = sep => fn => iter => Array.from(split(sep)(iter), fn)
  return {
    readCols: (fn = identity) => toArray(' ')(fn)(stream),
    readRows: (fn = identity) => toArray('\n')(fn)(stream),
    readStream: (fn = identity) => fn(stream),
    readMatrix: (fn = identity) => toArray('\n')(identity)(stream)
      .map(toArray(' ')(fn))
  }
}

// 即時実行関数(main)
(() => {

  // 処理をする関数
  const fn = (PARAM) => {
    // ここに処理を書く

    return PARAM
  }

  /* 外部入力から値を取得して変数に代入
  - rowsで出力:   inputs().readRows([Number])   -> '1\n2' => [1, 2]
  - colsで出力:   inputs().readCols([Number])   -> '1 2' => [1, 2]
  - streamで出力: inputs().readStream([Number]) -> 3 => 3
  - matrixで出力: inputs().readMatrix([Number]) -> '1 2\n3 4' => [[1, 2],[3, 4]]
  */
  const PARAM = inputs('./data').readMatrix(Number)

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(PARAM)

  /* 結果を表示する(SEP => セパレーター)
    - そのまま表示する場合: display(identity)(result)
    - arrayを合成する場合:  display(join(SEP))(result)
    - matrixを合成する場合: display(join(\n))(result.map(join(' ')))
  */
  display(join('\n'))(result.map(join(' ')))

})()
```