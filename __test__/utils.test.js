// __tests__/utils.test.js
const increment = require('../utils');

test('increment adds 1 to the given number', () => {
  expect(increment(1)).toBe(2);
  expect(increment(0)).toBe(1);
  expect(increment(-1)).toBe(0);
});
