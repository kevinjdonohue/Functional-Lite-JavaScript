/* eslint-disable import/no-mutable-exports, import/prefer-default-export */

// const y = 5;
// let z;

/* original function */
// function foo(x) {
//   y += 1;
//   z = x * y;
// }

function bar(x, y) {
  let z;
  let innerY;

  function foo(innerX) {
    innerY = y;
    innerY += 1;
    z = innerX * innerY;
  }

  foo(x);

  return [innerY, z];
}

export { bar };
