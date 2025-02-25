const test = require('node:test');
const assert = require('node:assert/strict');
const orderid = require('../lib')('mysecret');

test('is string', () => {
  const id = orderid.generate();
  assert.equal(typeof id, 'string');
});

test('different ids', async () => {
  const id1 = orderid.generate();
  await new Promise((resolve) => setTimeout(resolve, 1));
  const id2 = orderid.generate();
  assert.notEqual(id1, id2);
});

test('get time', () => {
  const now = Date.now();
  const id = orderid.generate();
  assert.equal(orderid.getTime(id), now);
});

test('passing date argument', () => {
  const now = Date.now();
  const id = orderid.generate(now);
  assert.equal(orderid.getTime(id), now);
});
