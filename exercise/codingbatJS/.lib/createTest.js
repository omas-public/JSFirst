const readLines = (file = '/dev/stdin') =>
  require('fs').readFileSync(file).toString().trim()
const identity = value => value
const join = sep => list => list.join(sep)
const split = (sep, fun = identity) => iter => Array.from(iter.split(sep), fun)
const slice = (begin, end) => iter => end === undefined ? iter.slice(begin) : iter.slice(begin, end)
const toInt = s => parseInt(s, 10)
const toStr = n => n.toString()
const toList = fun => iter => Array.from(iter, fun)
const print = fun => value => console.log(fun(value))

const makeTest = test => {
  const trim = s => s.trim()
  const [left, right] = toList(trim)(split('→')(test))
  return join('\n')([
    `  it('${left} -> ${right}', () => {`,
    `    expect(${left}).toBe(${right})`,
    '  })\n'
  ])
}
const makeTests = (fname, tests) => join('\n')([
  `\n/* -- test code ${'-'.repeat(40)}*/`,
  `describe('${fname}', () => {\n`,
  join('\n')(toList(makeTest)(tests)),
  '})'
])

const makeQuestion = (fname, question) => {
  const funcname = fname.replace('(', ' = (')
  return join('\n')([
    '/* eslint-env jest */',
    `/* question\n\n${question.trim()}\n*/\n\n`,
    `const ${funcname} => {`,
    '// write code here\n\n',
    '}'
  ])
}
const main = (stdin) => {
  // write code here
  const [head, tail] = split('--')(stdin)
  const [fname, ...tests] = split('\n')(tail).filter(identity)

  return join('\n')([makeQuestion(fname, head), makeTests(fname, tests)])
}

const result = main(readLines())
print(identity)(result) // use join('\n') or join(' ') or identity in the first parenthesis
