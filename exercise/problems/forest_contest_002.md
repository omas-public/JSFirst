# [paizaの森練習問題コンテスト過去問題2](https://paiza.jp/works/mondai/forest_contest_002/problem_index?language_uid=javascript)

## [競輪のユニフォーム](https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_keirin/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (n) => {
    // ここに処理を書く

    return n
  }

  // declare varriable
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
  // 入力値を取得
  const n = inputs().readStream(Number)

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(n)

  // 表示
  display(identity)(result)

})()

```

## [エレベーターの行き先](https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_elevator/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (f1, f2) => {
    // ここに処理を書く
    const [t1, t2] = [f1, f2].map(([n]) => parseInt(n))
    return (t1 < t2) ? 'up' : 'down'
  }

  // declare varriable
  
  // 入力値を取得
  const [f1, f2] = inputs().readCols()

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(f1, f2)

  // 表示
  display(identity)(result)

})()

```

## [長方形の面積](https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__d_rectangular/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (e1, e2) => {
    // ここに処理を書く
    return ([e1, e2].includes(0))
      ? 'invalid'
      : e1 * e2
  }

  // declare varriable

  // 入力値を取得
  const [e1, e2] = inputs().readCols(Number)

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(e1, e2)

  // 表示
  display(identity)(result)

})()

```

## [セール販売](https://paiza.jp/works/mondai/forest_contest_002/forest_contest_002__c_sale/edit?language_uid=javascript)

```js
// 即時実行関数(main)
(() => {

  // define function
  const fn = (matrix) => {
    // ここに処理を書く
    const total = matrix.map(([_, p]) => p)
      .map(Number).reduce((a, b) => a + b)
    const buyPants = matrix.map(([c]) => c).includes('pants')
    return (buyPants && total >= 2000)
      ? total - 500
      : total
  }

  // declare varriable

  // 入力値を取得
  const matrix = inputs().readMatrix().slice(1)

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(matrix)

  // 表示
  display(identity)(result)

})()

```