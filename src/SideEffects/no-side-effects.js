/* eslint-disable import/prefer-default-export */

function bar(x, y, z) {
  let innerY = y;
  let innerZ = z;

  function foo(innerX) {
    innerY *= innerX;
    innerZ *= innerX;
  }

  foo(x);
  return [innerY, innerZ];
}

export { bar };
