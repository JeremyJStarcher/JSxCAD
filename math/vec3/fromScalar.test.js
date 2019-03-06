const fromScalar = require('./fromScalar');
const test = require('ava');

test('vec3: fromScalar() should return a new vec3 with correct values', (t) => {
  t.deepEqual(fromScalar(0), [0, 0, 0]);
  t.deepEqual(fromScalar(-5), [-5, -5, -5]);
});
