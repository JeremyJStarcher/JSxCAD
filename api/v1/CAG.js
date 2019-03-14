// FIX: Add interface to change default surface geometry.

import { canonicalize } from '@jsxcad/algorithm-polygons';
import { fromXRotation, fromYRotation, fromZRotation, fromScaling, fromTranslation } from '@jsxcad/math-mat4';
import { fromPaths } from '@jsxcad/geometry-surf2pc';
import { toGeometry } from './toGeometry';
import { writePdf } from './writePdf';

export class CAG {
  constructor (geometry) {
    this.geometry = geometry || fromPaths({}, []);
  }

  transform (matrix) {
console.log(`QQ/CAG/matrix: ${JSON.stringify(matrix)}`)
    return CAG.fromGeometry(this.geometry.transform(matrix));
  }

/*
  translate ([x, y]) {
    return CAG.fromGeometry(this.geometry.transform(fromTranslation([x, y, 0])));
  }

  rotate (angles) {
    return this.rotateX(angles[0]).rotateY(angles[1]).rotateZ(angles[2]);
  }

  rotateX (angle) {
    // FIX: magic numbers.
    return CAG.fromGeometry(this.geometry.transform(fromXRotation(angle * 0.017453292519943295)));
  }

  rotateY (angle) {
    return CAG.fromGeometry(this.geometry.transform(fromYRotation(angle * 0.017453292519943295)));
  }

  rotateZ (angle) {
    return CAG.fromGeometry(this.geometry.transform(fromZRotation(angle * 0.017453292519943295)));
  }

  scale (factor) {
    if (factor.length) {
      const [x = 1, y = 1, z = 1] = factor;
      return CAG.fromGeometry(this.geometry.transform(fromScaling([x, y, z])));
    } else {
      // scale(4)
      return CAG.fromGeometry(this.geometry.transform(fromScaling([factor, factor, factor])));
    }
  }
*/

  toPaths (options = {}) {
    return this.toPolygons(options);
  }

  toGeometry () {
    return this.geometry;
  }

  toPolygons (options) {
    return this.geometry.toPaths(options);
  }

  writePdf (options = {}) {
    writePdf(options, this);
    return this;
  }
}

CAG.fromGeometry = (geometry) => new CAG(geometry);

// BREAKING: Direction was not significant for CAG.fromPoints, but now is.
CAG.fromPoints = (points) => CAG.fromGeometry(fromPaths({}, canonicalize([points])));
CAG.fromPolygons = (polygons) => CAG.fromGeometry(fromPaths({}, canonicalize(polygons)));
