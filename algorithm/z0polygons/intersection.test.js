import { fromTranslation } from '@jsxcad/math-mat4';
import { intersection } from './intersection';
import { test } from 'ava';
import { transform } from '@jsxcad/algorithm-polygons';

const rectangle = [[[0, 0], [2, 0], [2, 1], [0, 1]]];

test('union: Intersection of no geometries produces an empty geometry', t => {
  t.deepEqual(intersection(), []);
});

test('union: Intersection of one geometry produces that geometry', t => {
  t.deepEqual(intersection(rectangle), rectangle);
});

test('union: Intersection of rectangle with itself produces itself', t => {
  t.deepEqual(intersection(rectangle, rectangle),
              rectangle);
});

test('union: Intersection of rectangle with itself translated by one produces square', t => {
  t.deepEqual(intersection(rectangle, transform(fromTranslation([-1, 0, 0]), rectangle)),
              [[[0, 0], [1, 0], [1, 1], [0, 1]]]);
});
