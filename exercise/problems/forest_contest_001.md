# [paizaの森練習問題コンテスト過去問題1](https://paiza.jp/works/mondai/forest_contest_001/problem_index?language_uid=javascript)

## [スポーツの人数](https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__d_sports/edit?language_uid=javascript)


### if文を使用
```js
(() => {

  // define function
  const fn = (s) => {
    // ここに処理を書く
    if (s === 'baseball') { return 9 }

    if (s === 'soccer') {
      return 11
    }
    if (s === 'rugby') {
      return 15
    }
    if (s === 'basketball') {
      return 5
    }
    if (s === 'volleyball') {
      return 6
    }
    return undefined
  }

  // declare varriable

  // 入力値を取得
  const s = inputs().readStream()

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(s)

  // 表示
  display(identity)(result)

})()
```

### Objectを辞書的に使う

```js
(() => {

  // define function
  const fn = dic => s => {
    // ここに処理を書く
    return dic[s] ?? undefined
  }
  // declare varriable
  const dic = {
    baseball: 9,
    soccer: 11,
    rugby: 15,
    basketball: 5,
    volleyball: 6
  }
  // 入力値を取得
  const s = inputs().readStream()

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(dic)(s)

  // 表示
  display(identity)(result)

})()
```

## [バイトの休憩時間](https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__d_break_time/edit?language_uid=javascript)

```js
// 即時実行関数(main)
(() => {

  // define function
  const fn = (h) => {
    // ここに処理を書く
    if (h <= 6) return 'no break'
    return (h < 8) ? '45 min' : '60 min' 
  }

  // declare varriable

  // 入力値を取得
  const h = inputs().readStream(Number)

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(h)

  // 表示
  display(identity)(result)

})()
```

## [自動車の燃費](https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__d_car_fuel/edit?language_uid=javascript)

```js
// 即時実行関数(main)
(() => {

  // define function
  const fn = (v, d) => {
    // ここに処理を書く
    return Math.trunc(d / v)
  }

  // declare varriable

  // 入力値を取得
  const [v, d] = inputs().readCols(Number)

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(v, d)

  // 表示
  display(identity)(result)

})()
```

## [背番号順](https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__c_player_number/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (matrix) => {
    // ここに処理を書く
    return [...matrix].sort(([a], [b]) => a - b)
  }

  // declare varriable

  // 入力値を取得
  const matrix = inputs().readMatrix().slice(1)

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(matrix)

  // 表示
  display(join('\n'))(result.map(join(' ')))

})()
```