const { canonicalize } = require('@jsxcad/algorithm-paths');
const svgPathToPaths = require('./svgPathToPaths');
const test = require('ava');

// TODO: Add colinear point simplification.

test('Parse an open triangle.', t => {
  const svgPath = 'M200 100 L170.71067810058594 170.71067810058594 L100 200 L29.289321899414062 170.71067810058594 ' +
                  'L0 100 L29.289321899414062 29.289321899414062 L100 0 L170.71067810058594 29.289321899414062';
  const paths = canonicalize(svgPathToPaths({}, svgPath));
  t.deepEqual(paths,
              [[null, [200, -100, 0], [200, -100, 0], [198.74147, -103.03835, 0], [195.42354, -111.04854, 0], [190.73268, -122.3733, 0], [185.35534, -135.35534, 0], [179.978, -148.33738, 0], [175.28713, -159.66213, 0], [171.9692, -167.67233, 0], [170.71068, -170.71068, 0], [170.71068, -170.71068, 0], [167.67233, -171.9692, 0], [159.66213, -175.28713, 0], [148.33738, -179.978, 0], [135.35534, -185.35534, 0], [122.3733, -190.73268, 0], [111.04854, -195.42354, 0], [103.03835, -198.74147, 0], [100, -200, 0], [100, -200, 0], [96.96165, -198.74147, 0], [88.95146, -195.42354, 0], [77.6267, -190.73268, 0], [64.64466, -185.35534, 0], [51.66262, -179.978, 0], [40.33787, -175.28713, 0], [32.32767, -171.9692, 0], [29.28932, -170.71068, 0], [29.28932, -170.71068, 0], [28.0308, -167.67233, 0], [24.71287, -159.66213, 0], [20.022, -148.33738, 0], [14.64466, -135.35534, 0], [9.26732, -122.3733, 0], [4.57646, -111.04854, 0], [1.25853, -103.03835, 0], [0, -100, 0], [0, -100, 0], [1.25853, -96.96165, 0], [4.57646, -88.95146, 0], [9.26732, -77.6267, 0], [14.64466, -64.64466, 0], [20.022, -51.66262, 0], [24.71287, -40.33787, 0], [28.0308, -32.32767, 0], [29.28932, -29.28932, 0], [29.28932, -29.28932, 0], [32.32767, -28.0308, 0], [40.33787, -24.71287, 0], [51.66262, -20.022, 0], [64.64466, -14.64466, 0], [77.6267, -9.26732, 0], [88.95146, -4.57646, 0], [96.96165, -1.25853, 0], [100, 0, 0], [100, 0, 0], [103.03835, -1.25853, 0], [111.04854, -4.57646, 0], [122.3733, -9.26732, 0], [135.35534, -14.64466, 0], [148.33738, -20.022, 0], [159.66213, -24.71287, 0], [167.67233, -28.0308, 0], [170.71068, -29.28932, 0]]]);
});

test('Parse a closed triangle.', t => {
  const svgPath = 'M200 100 L170.71067810058594 170.71067810058594 L100 200 L29.289321899414062 170.71067810058594 ' +
                  'L0 100 L29.289321899414062 29.289321899414062 L100 0 L170.71067810058594 29.289321899414062 Z';
  const paths = canonicalize(svgPathToPaths({}, svgPath));
  t.deepEqual(paths,
              [[[200, -100, 0], [200, -100, 0], [198.74147, -103.03835, 0], [195.42354, -111.04854, 0], [190.73268, -122.3733, 0], [185.35534, -135.35534, 0], [179.978, -148.33738, 0], [175.28713, -159.66213, 0], [171.9692, -167.67233, 0], [170.71068, -170.71068, 0], [170.71068, -170.71068, 0], [167.67233, -171.9692, 0], [159.66213, -175.28713, 0], [148.33738, -179.978, 0], [135.35534, -185.35534, 0], [122.3733, -190.73268, 0], [111.04854, -195.42354, 0], [103.03835, -198.74147, 0], [100, -200, 0], [100, -200, 0], [96.96165, -198.74147, 0], [88.95146, -195.42354, 0], [77.6267, -190.73268, 0], [64.64466, -185.35534, 0], [51.66262, -179.978, 0], [40.33787, -175.28713, 0], [32.32767, -171.9692, 0], [29.28932, -170.71068, 0], [29.28932, -170.71068, 0], [28.0308, -167.67233, 0], [24.71287, -159.66213, 0], [20.022, -148.33738, 0], [14.64466, -135.35534, 0], [9.26732, -122.3733, 0], [4.57646, -111.04854, 0], [1.25853, -103.03835, 0], [0, -100, 0], [0, -100, 0], [1.25853, -96.96165, 0], [4.57646, -88.95146, 0], [9.26732, -77.6267, 0], [14.64466, -64.64466, 0], [20.022, -51.66262, 0], [24.71287, -40.33787, 0], [28.0308, -32.32767, 0], [29.28932, -29.28932, 0], [29.28932, -29.28932, 0], [32.32767, -28.0308, 0], [40.33787, -24.71287, 0], [51.66262, -20.022, 0], [64.64466, -14.64466, 0], [77.6267, -9.26732, 0], [88.95146, -4.57646, 0], [96.96165, -1.25853, 0], [100, 0, 0], [100, 0, 0], [103.03835, -1.25853, 0], [111.04854, -4.57646, 0], [122.3733, -9.26732, 0], [135.35534, -14.64466, 0], [148.33738, -20.022, 0], [159.66213, -24.71287, 0], [167.67233, -28.0308, 0], [170.71068, -29.28932, 0], [170.71068, -29.28932, 0], [171.9692, -32.32767, 0], [175.28713, -40.33787, 0], [179.978, -51.66262, 0], [185.35534, -64.64466, 0], [190.73268, -77.6267, 0], [195.42354, -88.95146, 0], [198.74147, -96.96165, 0], [200, -100, 0]]]);
});

test('Parse a circle with a hole.', t => {
  const svgPath = 'M 950,81 A 107,107 0 0,1 950,295 A 107,107 0 0,1 950,81 z ' +
                  'M 950,139 A 49,49 0 0,0 950,237 A 49,49 0 0,0 950,139 z';
  const paths = canonicalize(svgPathToPaths({}, svgPath));
  t.deepEqual(paths,
              [[[950, -81, 0], [950, -81, 0], [971.56423, -83.17386, 0], [991.64923, -89.40859, 0], [1009.82472, -99.27392, 0], [1025.66043, -112.33957, 0], [1038.72608, -128.17528, 0], [1048.59141, -146.35077, 0], [1054.82614, -166.43577, 0], [1057, -188, 0], [1057, -188, 0], [1054.82614, -209.56423, 0], [1048.59141, -229.64923, 0], [1038.72608, -247.82472, 0], [1025.66043, -263.66043, 0], [1009.82472, -276.72608, 0], [991.64923, -286.59141, 0], [971.56423, -292.82614, 0], [950, -295, 0], [950, -295, 0], [928.43577, -292.82614, 0], [908.35077, -286.59141, 0], [890.17528, -276.72608, 0], [874.33957, -263.66043, 0], [861.27392, -247.82472, 0], [851.40859, -229.64923, 0], [845.17386, -209.56423, 0], [843, -188, 0], [843, -188, 0], [845.17386, -166.43577, 0], [851.40859, -146.35077, 0], [861.27392, -128.17528, 0], [874.33957, -112.33957, 0], [890.17528, -99.27392, 0], [908.35077, -89.40859, 0], [928.43577, -83.17386, 0], [950, -81, 0], [950, -81, 0], [950, -81, 0], [950, -81, 0], [950, -81, 0], [950, -81, 0], [950, -81, 0], [950, -81, 0], [950, -81, 0], [950, -81, 0]],
               [[950, -139, 0], [950, -139, 0], [940.12479, -139.99551, 0], [930.92699, -142.85066, 0], [922.60363, -147.36843, 0], [915.35177, -153.35177, 0], [909.36843, -160.60363, 0], [904.85066, -168.92699, 0], [901.99551, -178.12479, 0], [901, -188, 0], [901, -188, 0], [901.99551, -197.87521, 0], [904.85066, -207.07301, 0], [909.36843, -215.39637, 0], [915.35177, -222.64823, 0], [922.60363, -228.63157, 0], [930.92699, -233.14934, 0], [940.12479, -236.00449, 0], [950, -237, 0], [950, -237, 0], [959.87521, -236.00449, 0], [969.07301, -233.14934, 0], [977.39637, -228.63157, 0], [984.64823, -222.64823, 0], [990.63157, -215.39637, 0], [995.14934, -207.07301, 0], [998.00449, -197.87521, 0], [999, -188, 0], [999, -188, 0], [998.00449, -178.12479, 0], [995.14934, -168.92699, 0], [990.63157, -160.60363, 0], [984.64823, -153.35177, 0], [977.39637, -147.36843, 0], [969.07301, -142.85066, 0], [959.87521, -139.99551, 0], [950, -139, 0], [950, -139, 0], [950, -139, 0], [950, -139, 0], [950, -139, 0], [950, -139, 0], [950, -139, 0], [950, -139, 0], [950, -139, 0], [950, -139, 0]]]);
});
