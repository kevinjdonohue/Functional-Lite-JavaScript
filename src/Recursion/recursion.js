function nonRecursiveSum(...args) {
  let sum = 0;

  args.forEach((argument, index, array) => {
    sum += array[index];
  });

  return sum;
}

function recursiveSum(...args) {
  // base case
  if (args.length <= 2) {
    return args[0] + args[1];
  }

  // recursive call
  return args[0] + recursiveSum(...args.slice(1));
}

export { nonRecursiveSum, recursiveSum };
