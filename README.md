# order-id

[![Build status](https://github.com/mderazon/order-id/actions/workflows/node.js.yml/badge.svg)](https://github.com/mderazon/order-id/actions) [![npm Version](https://badge.fury.io/js/order-id.svg)](https://badge.fury.io/js/order-id) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> (almost) unique order id generator

- Generates order ids in the format `xxxx-xxxxxx-xxxx`, where `x` is a digit (0-9). Similar to the format Amazon is using for their order numbers.
- Uses the current unix timestamp (13 digits) plus 1 random digit so it's **unique down to the milisecond**.
- If your system generates 1,000,000 orders per day (evenly distributed), the probability of collision would be ~1%. The extra padding digit makes it even lower.
- The timestamp is scrambled using a supplied key so the result doesn't appear as a timestamp and is not sequential.
- Bonus: Since it's based on timestamp, we can get the time back from the order id (see api calls).

### Usage

```js
import orderid from 'order-id';
const id = orderid('key').generate();
// 3016-734428-7759

orderid('key').getTime(id);
// 1479812667797
```

### API

- `orderid(key)` - Creates an order ID generator instance with the given `key`. The `key` is an optional string used as a seed for the underlying cipher. It is needed to recover the timestamp from an order ID.
- `generate(date)` - Generates an order ID. The `date` argument is optional and can be any value that the JavaScript [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) constructor can parse. If provided, the generated order ID will be based on the provided date/time. Otherwise, the current date/time will be used.
- `getTime(id)` - Returns the Unix timestamp (in milliseconds) that the order ID was generated from. You must use the same `key` that was used to generate the order ID.
