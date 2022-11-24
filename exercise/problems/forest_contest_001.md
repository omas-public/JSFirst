# [paizaの森練習問題コンテスト過去問題1](https://paiza.jp/works/mondai/forest_contest_001/problem_index?language_uid=javascript)

## [スポーツの人数](https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__d_sports/edit?language_uid=javascript)


### if文を使用
```js
(() => {

  // define function
  const fn = (s) => {
    // ここに処理を書く
    if (s === 'baseball') { 
      return 9 
    }
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
  outputs(result).toLine()

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
  outputs(result).toLine()

})()
```

## [バイトの休憩時間](https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__d_break_time/edit?language_uid=javascript)

```js
(() => {
  const fn = (h) => {
    return (h <= 6) 
      ? 'no break'
      : (h < 8) ? '45 min' : '60 min'
  }
  const h = inputs().readStream(Number)
  const result = fn(h)
  outputs(result).toLine()

})()
```

## [自動車の燃費](https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__d_car_fuel/edit?language_uid=javascript)

```js
(() => {
  const fn = (v, d) => {
    return Math.trunc(d / v)
  }
  const [v, d] = inputs().readCols(Number)
  const result = fn(v, d)
  outputs(result).toLine()

})()
```

## [背番号順](https://paiza.jp/works/mondai/forest_contest_001/forest_contest_001__c_player_number/edit?language_uid=javascript)

```js
(() => {
  const fn = (matrix) => {
    return [...matrix].sort(([a], [b]) => a - b)
  }
  const matrix = inputs().readMatrix().slice(1)
  const result = fn(matrix)
  outputs(result).toMatrix()

})()
```