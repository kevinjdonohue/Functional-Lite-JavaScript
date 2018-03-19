/* eslint-disable import/prefer-default-export */

/*
OLD VERION of mult:

function mult(x, y, z) {
  return x * y * z;
}

const result = mult(3, 4, 5); // 60
const result = mult(3, 4, 5, 6); // can't handle this
*/

function mult(...args) {
  // base case
  if (args.length <= 2) {
    return args[0] * args[1];
  }

  // recursive call
  return args[0] * mult(...args.slice(1));
}

export { mult };
