# order-id

[![Build status](https://github.com/mderazon/order-id/workflows/build/badge.svg)](https://github.com/mderazon/order-id/actions) [![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> (almost) unique order id generator

- Generates order ids in the format `xxxx-xxxxxx-xxxx`, where `x` is a digit (0-9). Similar to the format Amazon is using for their order numbers.
- Uses the current unix timestamp (13 digits) plus 1 random digit so it's **unique down to the milisecond**.
- If your system generates 1,000,000 orders per day (evenly distributed), the probability of collision would be ~1%. The extra padding digit makes it even lower.
- The timestamp is scrambled using a supplied key so the result doesn't appear as a timestamp and is not sequential.
- Bonus: Since it's based on timestamp, we can get the time back from the order id (see api calls).

### Usage

```js
const orderid = require('order-id')('mysecret');
const id = orderid.generate();
// 3016-734428-7759

orderid.getTime(id);
// 1479812667797
```

### Api

- `generate(date)` - Generates an order id. `date` is optional and can be anything that js [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) constructor knows how to parse and it will use it as the time for the order id. Otherwise, current date will be used.
- `getTime(id)` - Use this to get back the time of the order in unix timestamp format (you need to use the same key used to generate the order id).
