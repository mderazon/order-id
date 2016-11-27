const test = require('tape')
const orderid = require('../lib')('mysecret')

test('different ids', (t) => {
  t.plan(1)
  const id1 = orderid.generate()
  setTimeout(function () {
    const id2 = orderid.generate()
    t.notEqual(id1, id2)
  }, 1)
})

test('get time', (t) => {
  t.plan(1)
  const now = Date.now()
  const id = orderid.generate()
  t.equal(orderid.getTime(id), now)
})

test('passing date argument', (t) => {
  t.plan(1)
  const now = Date.now()
  const id = orderid.generate(now)
  t.equal(orderid.getTime(id), now)
})
