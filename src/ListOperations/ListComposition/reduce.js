function mult(x, y) {
  return x * y;
}

function compose(arr, fn, initial) {
  let total = initial;

  arr.forEach((item, index, array) => {
    total = fn(total, array[index]);
  });

  return total;
}

export { compose, mult };
