const fun = (acc, n) => (n % 2 === 0) ? [acc[0] + 1, acc[1]] : [acc[0], acc[1] + 1]
const tmp = [1, 2, 3, 4, 5].reduce(fun, [0, 0])

console.log(tmp)
