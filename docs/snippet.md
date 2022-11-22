# Paiza Snippet

## Summary

[Paiza lerning](https://paiza.jp/works/mypage) の演習を助けるヘルパー関数のスニペット

## Usage

1. [スニペット](../snippets/*code-snippets)を **$HOME/.config/Code/User/snippets/** にcpせよ
2. ```$ cp ./snippets/* ~/.config/Code/User/snippets/```
3. VSCODEで(拡張子js)のファイル上でスニペットを呼び出す

## Code

### [paiza.code-snippets](../snippets/paiza.code-snippets)

usage: ```paiza<TAB>```

```js
/**
 * identity: 引数をそのまま返す
 * @param {any} v 
 * @returns any
 * @example identity(42) => 42
 */
const identity = v => v

/**
 * inputs: 外部入力を受取り，変換関数のオブジェクトを返す
 * @param {string} file
 * @returns object
 */
const inputs = (file = '/dev/stdin') => {
    /** 
   * toArray: iterをsepで分割してArrayを返す
   * @param {string} sep 
   * @param {function} fun
   * @param {iter} iterator
   * @returns Array
   */
  const toArray = sep => fn => iter => Array.from(split(sep)(iter), fn)
  const stream = require('fs').readFileSync(file, 'utf-8').trim()
  return {
    // readCols(Number)('1 2 3') => [1,2,3]
    readCols: (fn = identity) => toArray(' ')(fn)(stream),
    // readRows(Number)('1\n2\n3')  => [1, 2, 3]
    readRows: (fn = identity) => toArray('\n')(fn)(stream),
    // readStream(Number)(1) => 1
    readStream: (fn = identity) => fn(stream),
    // readMatrix(Number)(1 2\n3 4')  => [[1,2],[3,4]] 
    readMatrix: (fn = identity) => toArray('\n')(identity)(stream)
      .map(toArray(' ')(fn))
  }
}

/**
 * outputs: 入力を受け取り,出力する関数のオブジェクトを返す
 * @param {Array | String} v
 * @return Object
 */ 
const outputs = v => {
  const join = sep => array => array.join(sep)
  const _print = fn => v => console.log(fn(v))
  return {
    line: () => _print(identity)(v),
    cols: () => _print(join(' '))(v),
    rows: () => _print(join('\n'))(v),
    json: () => _print(JSON.stringify)(v),
    matrix: () => _print(join('\n'))(v.map(join(' ')))
  }
}
```

### [function.code-snippets](../snippets/function.code-snippets)

usage: ```mainfun<TAB>```

```js
// 即時実行関数(main)
(() => {

  // 処理をする関数
  const fn = (PARAM) => {
    // ここに処理を書く

    return PARAM
  }

  /* 外部入力から値を取得して変数に代入
  - streamで出力: inputs().readStream([Number]) -> 3 => 3
  - rowsで出力:   inputs().readRows([Number])   -> '1\n2' => [1, 2]
  - colsで出力:   inputs().readCols([Number])   -> '1 2' => [1, 2]
  - matrixで出力: inputs().readMatrix([Number]) -> '1 2\n3 4' => [[1, 2],[3, 4]]
  */
  const PARAM = inputs().readMatrix(Number)

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(PARAM)

  /* 結果を表示する
    - そのまま表示する場合: outputs(result).toLine()
    - スペース合成して表示: outputs(result).toCols()
    - 改行('\n')合成して表示: outputs(result).toRows()
    - matrix合成して表示: outputs(result).toMatrix()
    - JSON形式で表示: outputs(result).toJSON()
  */
  outputs(result).toJSON()

})()
```

### [product.code-snippets](../snippets/product.code-snippets)

usage: ```productfun```

```js
/**
 * product: 複数のイテレータを受け取り直積の配列を返す
 * @param  {...any} iters 
 * @returns Array
 * @examples product([1,2],[1,2]) => [[1,1],[1,2],[2,1],[2,2]]
 */
const product = (...iters) => iters.reduce(
  (a, b) => a.flatMap(d => b.map(e => [d, e].flat())))
```

### [zip.code-snippets](../snippets/zip.code-snippets)

usage: ```zipfun```

```js
/**
 * zip: 複数の配列の要素をまとめて取得
 * @param  {...Array} args 
 * @returns Array
 * @examples zip([1, 2], [3, 4]) => [[1,3],[2,4]]
 * @examples zip([1, 2], [3, 4], [5, 6]) => [[1,3,5],[2,4,6]]
 */
const zip = (...args) => {
  const size = Math.min(...Array.from(args, arg => arg.length))
  return Array.from(Array(size), (v, i) => args.map(arg => arg[i]))
}
```

### [combination.code-snippets](../snippets/combination.code-snippets)

```js
/**
 * combination: 配列から組み合わせを作る
 * @param {Array} array
 * @return Array
 */ 
const combination = array => array.flatMap(
  (v, i) => Array.from(array.slice(i + 1), a => [v, a]))
```

### [select.code-snippets](../snippets/select.code-snippets)

usage: ```selectfun```

```js
/**
 * select Mapからkeyに合致した値を返す
 * @param {Map} map 
 * @param {any} exception keyが存在しない場合
 * @returns any
 * @examples select(new Map([['a',1],['b',2]]), 'no key')('a') => 1
 */
const select = (map, exception) => key => map.get(key) ?? exception

/**
 * selectRange Mapから範囲内のkeyに合致した最初の値を返す
 * @param {Map} map 
 * @param {any} exception keyが存在しない場合
 * @returns any
 * @examples selectRange(new Map([
 *  [50,'fail'], [70,'good'], [100,'exellent']
 * ], 'range error'))(55) => good
 */
const selectRange = (map, exception) => key => {
  const inRange = n => ([a, b]) => n > a && n <= b
  const zip = (...args) => {
    const size = Math.min(...Array.from(args, arg => arg.length))
    return Array.from(Array(size), (v, i) => args.map(arg => arg[i]))
  }
  const index = zip([Number.MIN_SAFE_INTEGER, ...map.keys()]
    , [...map.keys(), Number.MAX_SAFE_INTEGER,]
  ).findIndex(inRange(key))

  return [...map.values()].at(index) ?? exception
}
```