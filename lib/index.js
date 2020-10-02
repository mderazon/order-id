const fpe = require('node-fpe');

module.exports = function orderId(secret = 'password') {
  const cipher = fpe({ secret });

  function generate(date) {
    let now = date
      ? new Date(date).getTime().toString()
      : Date.now().toString();

    // pad with additional random digits
    if (now.length < 14) {
      const pad = 14 - now.length;
      now += randomNumber(pad);
    }
    now = cipher.encrypt(now);

    // split into xxxx-xxxxxx-xxxx format
    return [now.slice(0, 4), now.slice(4, 10), now.slice(10, 14)].join('-');
  }

  function getTime(id) {
    let res = id.replace(/-/g, '');
    res = res.slice(0, 13);
    res = cipher.decrypt(res);
    res = parseInt(res, 10);
    return res;
  }

  return { generate, getTime };
};

function randomNumber(length) {
  return Math.floor(
    Math.pow(10, length - 1) +
      Math.random() * (Math.pow(10, length) - Math.pow(10, length - 1) - 1)
  ).toString();
}
