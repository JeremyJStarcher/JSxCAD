import { pathnameToFont, textToSurfaces } from '@jsxcad/algorithm-text';
import { CAG } from './CAG';

export const loadFont = ({ path }) => pathnameToFont(path);

export const text = ({ font, curveSegments }, text) =>
  textToSurfaces({ font: font, curveSegments }, text).map(paths => CAG.fromPaths(paths));
