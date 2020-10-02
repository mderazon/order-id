/**
 * Create an order id object
 *
 * @param {string} secret A secret used for the permutation.
 */
declare function orderId(
  secret: string
): {
  /**
   * Generate an order id.
   *
   * @param {Date} [date] Date that will be used as the time for the order id. Otherwise, current date will be used. Date can be anything that js [Date](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date) constructor knows how to parse
   * @returns {string} The order id.
   */
  generate: (date?: Date) => string;
  /**
   * Get the time from an order id.
   *
   * @param {string} id An order id string.
   * @returns {number} The date the order id was created in unix timestamp format.
   */
  getTime: (id: string) => number;
};

export default orderId;
