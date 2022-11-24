# [paizaの森練習問題コンテスト過去問題2](https://paiza.jp/works/mondai/forest_contest_002/problem_index?language_uid=javascript)

## [競輪のユニフォーム](https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_keirin/edit?language_uid=javascript)

```js
(() => {
  const fn = (dic, n) => {
    return dic[n]
  }
  const dic = {
    1: white,
    2: black,
    3: red,
    4: blue,
    5: yellow,
    6: green,
    7: orange,
    8: pink,
    9: purple
  }
  const n = inputs().readStream(Number)
  const result = fn(dic, n)
  outputs(result).toLine()

})()

```

## [エレベーターの行き先](https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_elevator/edit?language_uid=javascript)

```js
(() => {

  const fn = (f1, f2) => {
    const [t1, t2] = [f1, f2].map(([n]) => parseInt(n))
    return (t1 < t2) ? 'up' : 'down'
  }
  const [f1, f2] = inputs().readCols()
  const result = fn(f1, f2)
  outputs(result).toLine()

})()

```

## [長方形の面積](https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_rectangular/edit?language_uid=javascript)

```js
(() => {
  const fn = (e1, e2) => {
    return ([e1, e2].includes(0))
      ? 'invalid'
      : e1 * e2
  }
  const [e1, e2] = inputs().readCols(Number)
  const result = fn(e1, e2)
  outputs(result).toLine()

})()

```

## [セール販売](https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__c_sale/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (matrix) => {
    // ここに処理を書く
    const [buyPants, total] = matrix.reduce((acc, cur) =>
      [acc[0] || cur[0] === 'pants', acc[1] + parseInt(cur[1])]
      , [0, false])
    return total >= 2000 & buyPants
      ? total - 500
      : total
  }

  // declare varriable
  const [n, ...matrix] = inputs().readMatrix()

  // processing
  const result = fn(matrix)

  // display
  outputs(result).toJSON()

})()
```