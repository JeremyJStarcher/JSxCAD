export const eachPoint = (options = {}, thunk, paths) => {
  for (const path of paths) {
    for (const point of path) {
      if (point !== null) {
        thunk(point);
      }
    }
  }
};
