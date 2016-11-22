# order-id [![Build Status](https://travis-ci.org/mderazon/order-id.svg?branch=master)](https://travis-ci.org/mderazon/order-id) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)


> (almost) unique order id generator


- Generates order ids in the format `xxxx-xxxxxx-xxxx`, where `x` is a number (0-9).

- Uses the current unix timestamp (13 digits) plus 1 random digit so it's **unique down to the milisecond**.

- If your system generates 1,000,000 orders per day (homogeneously distributed), the probability of collision would be ~1%. The extra padding digit makes it even lower.

- The timestamp is scrambled using a supplied key so the result doesn't appear as a timestamp.

- Bonus: Since it's based on timestamp, we can get the time back from the order id (see api calls).

### Usage

```js
const orderid = require('order-id')('mysecret')
const id = orderid.generate()
// 3016-734428-7759

orderid.getTime(id)
// 1479812667797
```


### Api

- `generate()` - generates an order id.
- `getTime(id)` - bonus feature :-) since it's based on a timestamp, it encodes the time the order was done. use this to get back the time of the order in unix timestamp format (you need to use the same key used to generate the order id).
