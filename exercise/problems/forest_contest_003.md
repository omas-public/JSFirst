# [paizaの森練習問題コンテスト過去問題3](https://paiza.jp/works/mondai/forest_contest_003/problem_index?language_uid=javascript)

## [文字列の逆順](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__d_reverse/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (s) => {
    // ここに処理を書く
    return s.split('').reverse().join('')
    // return join('')(split('')(s).reverse())
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

## [英単語の生成（連結）](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__d_join/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (s1, s2) => {
    // ここに処理を書く
    return [s1, s2].join('')
  }

  // declare varriable

  // 入力値を取得
  const [s1, s2] = inputs().readCols()

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(s)

  // 表示
  display(identity)(result)

})()
```

## [小文字にする](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__d_lowercase/edit?language_uid=javascript)

```js
(() => {

  // define function
  const fn = (s) => {
    // ここに処理を書く
    return s.toLowerCase()
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

## [キーボードのシミュレーション](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__c_keyboard/edit?language_uid=javascript&t=808433f5e98058d0b13c5d3453944011)

```js
(() => {

  // define function
  const fn = (matrix) => {
    // ここに処理を書く
    const mapfun = (caps = false) => array => {

      if (array[0] === 'capslock') {
        caps = !caps
        return undefined
      }

      if (array[0] === 'shift') {
        return array[1].toUppercase()
      }

      return caps ? array[0].toUpperCase() : array[0]

    }
    return [...matrix].map(mapfun()).filter(identity).join('')
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

## [ラッキーナンバー](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__b_lucky_number/edit?language_uid=javascript)

この問題はアルゴリズムを勉強していないと難しい，今は解けなくて良い

[参考:bit全探索](https://www.google.com/search?q=bit%E5%85%A8%E6%8E%A2%E7%B4%A2+javascript&ei=neBPY9TyOdTl2roP7aqMmA0&ved=0ahUKEwiUtYipmez6AhXUslYBHW0VA9MQ4dUDCA8&uact=5&oq=bit%E5%85%A8%E6%8E%A2%E7%B4%A2+javascript&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEMgUIABCiBDIFCAAQogQyBQgAEKIEOgoIABBHENYEELADOgUIABCABDoHCAAQBBCABDoGCAAQBBAeOggIABAIEAQQHjoFCCEQoAE6BwgAEIAEEA06BgghEAoQKkoECEEYAEoECEYYAFDzAliHZWCzZmgJcAF4AIAB2QGIAboZkgEGMC4yMy4xmAEAoAEByAEKwAEB&sclient=gws-wiz)

```js

// 即時実行関数(main)
(() => {

  // define function
  const bitPattern = n => {
    const seq = n => [...Array(n).keys()]
    return seq(1 << n)
      .map(bit => seq(n).filter(i => bit & (1 << i)))
  }

  const fn = (n, array) => {
    // ここに処理を書く
    const numbers = array.sort((a, b) => a - b)
    const add = (a, b) => a + b
    const sum777 = bitPattern(n)
      .map(array => array.map(i => numbers[i]))
      .filter(array => array.reduce(add, 0) === 777)

    switch (sum777.length) {
      case 0: return 'no answer'
      case 1: return sum777[0].join(' ')
      default: return 'multiple answers'
    }
  }

  // declare varriable

  // 入力値を取得
  const [n, ...array] = inputs().readRows(Number)

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(n, array)

  // 表示
  display(identity)(result)

})()
```