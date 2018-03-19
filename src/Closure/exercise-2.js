/* eslint-disable import/prefer-default-export */

function foo(x, y) {
  return function bar() {
    return x + y;
  };
}

export { foo };
