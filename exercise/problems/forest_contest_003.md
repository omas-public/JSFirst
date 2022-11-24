# [paizaの森練習問題コンテスト過去問題3](https://paiza.jp/works/mondai/forest_contest_003/problem_index?language_uid=javascript)

## [文字列の逆順](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__d_reverse/edit?language_uid=javascript)

```js
(() => {
  const fn = (s) => {
    return Array.from(s).reverse().join('')
    // return join('')(split('')(s).reverse())
  }
  const s = inputs().readStream()
  const result = fn(s)
  output(result).toLine()

})()
```

## [英単語の生成（連結）](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__d_join/edit?language_uid=javascript)

```js
(() => {
  const fn = (s1, s2) => {
    return [s1, s2].join('')
  }
  const [s1, s2] = inputs().readCols()
  const result = fn(s)
  outputs(result).toLine()

})()
```

## [小文字にする](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__d_lowercase/edit?language_uid=javascript)

```js
(() => {
  const fn = (s) => {
    return s.toLowerCase()
  }
  const s = inputs().readStream()
  const result = fn(s)
  outputs(result).toLine()

})()
```

## [キーボードのシミュレーション](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__c_keyboard/edit?language_uid=javascript&t=808433f5e98058d0b13c5d3453944011)

```js
(() => {
  const fn = (matrix) => {
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
  const [n, ...matrix] = inputs().readMatrix()

  // 取得した値を関数に渡して結果をresultに代入
  const result = fn(matrix)

  // 表示
  outputs(result).toLine()

})()

```

## [ラッキーナンバー](https://paiza.jp/works/mondai/forest_contest_003/forest_contest_003__b_lucky_number/edit?language_uid=javascript)

この問題はアルゴリズムを勉強していないと難しい，今は解けなくて良い

[参考:bit全探索](https://www.google.com/search?q=bit%E5%85%A8%E6%8E%A2%E7%B4%A2+javascript&ei=neBPY9TyOdTl2roP7aqMmA0&ved=0ahUKEwiUtYipmez6AhXUslYBHW0VA9MQ4dUDCA8&uact=5&oq=bit%E5%85%A8%E6%8E%A2%E7%B4%A2+javascript&gs_lcp=Cgdnd3Mtd2l6EAMyBQgAEKIEMgUIABCiBDIFCAAQogQyBQgAEKIEOgoIABBHENYEELADOgUIABCABDoHCAAQBBCABDoGCAAQBBAeOggIABAIEAQQHjoFCCEQoAE6BwgAEIAEEA06BgghEAoQKkoECEEYAEoECEYYAFDzAliHZWCzZmgJcAF4AIAB2QGIAboZkgEGMC4yMy4xmAEAoAEByAEKwAEB&sclient=gws-wiz)

```js

// 即時実行関数(main)
(() => {
  const bitPattern = n => {
    const seq0 = n => [...Array(n)].map((v, i) => i)
    return seq0(1 << n)
      .map(bit => seq(n).filter(i => bit & (1 << i)))
  }
  const fn = (n, array) => {
    const numbers = array.sort((a, b) => a - b)
    const add = (a, b) => a + b
    const sum777 = bitPattern(n)
      .map(array => array.map(i => numbers[i]))
      .filter(array => array.reduce(add, 0) === 777)

    const dic = {
      0 : 'no answer',
      1 : sum777[0].join(' ')
    }
    return dic[sum777.length] ?? 'multiple answers'
  }

  const [n, ...array] = inputs().readRows(Number)
  const result = fn(n, array)
  outputs(result).toLine()

})()
```