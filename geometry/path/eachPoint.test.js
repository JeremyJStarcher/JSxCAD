const fromPoints = require('./fromPoints');
const eachPoint = require('./eachPoint');
const test = require('ava');
const vec3 = require('@jsxcad/math-vec3');

test('eachPoint: Each point is emitted', t => {
  const collector = [];
  eachPoint({},
            point => collector.push(point),
            fromPoints({}, [[1, 1, 0], [2, 2, 0]]));
  t.deepEqual(collector, [vec3.fromValues(1, 1, 0), vec3.fromValues(2, 2, 0)]);
});
