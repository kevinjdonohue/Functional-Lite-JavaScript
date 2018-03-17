function sum(x, y) {
  return x + y;
}

function mult(x, y) {
  return x * y;
}

function multAndSum(x, y, z) {
  return sum(mult(x, y), z);
}

function compose(function1, function2) {
  return function comp() {
    const args = Array.from(arguments);

    return function2(function1(args.shift(), args.shift()), args.shift());
  };
}

export { sum, mult, multAndSum, compose };
