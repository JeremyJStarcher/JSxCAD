const clone = require('./clone');
const poly3 = require('@jsxcad/math-poly3');

/**
 * Return a solid with faces flipped.
 * This inverts the solid and empty spaces.
 * This source geometry is not modified.
 * @parameters {solid} solid - the solid to invert.
 * @returns {solid} - the inverted solid.
 * @example
 * let B = invert(A)
 */
const invert = solid => {
  const cloned = clone(solid);
  cloned.basePolygons = solid.basePolygons.map(poly3.flip);
  cloned.isCanonicalized = false;
  cloned.isRetessellated = false;
  return cloned;
};

module.exports = invert;
