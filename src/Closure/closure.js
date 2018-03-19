/* eslint-disable import/prefer-default-export */

function simpleClosureExample() {
  let count = 0;

  return function innerFunc() {
    count += 1;
    return count;
  };
}

function simpleCurryingExample(x) {
  return function addXAndY(y) {
    return x + y;
  };
}

export { simpleClosureExample, simpleCurryingExample };
