const shortn = require('../index.js')
const assert = require('assert')

let r = shortn.name('Vidar', 10)
console.log(r)
assert.ok(r == 'Vidar')

r = shortn.name('Vi  Da', 10)
console.log(r)
assert.ok(r == 'Vi Da')

r = shortn.name('Vidar Eldøy', 10)
console.log(r)
assert.ok(r == 'V. Eldøy')

r = shortn.name('Vidar Hans Eldøy', 10)
console.log(r)
assert.ok(r == 'V. H. Eldøy')

console.log('\nAll tests passed!')