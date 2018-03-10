/* eslint-disable import/no-mutable-exports */
let y = 0;
let z = 0;

function impure(x) {
  y = x * 2;
  z = x * 3;
}

export { y, z, impure };
