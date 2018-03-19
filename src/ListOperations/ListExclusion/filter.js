function isOdd(v) {
  return v % 2 === 1;
}

function exclude(arr, func) {
  const newArray = [];

  arr.forEach((item, index, array) => {
    if (func(array[index])) {
      newArray.push(array[index]);
    }
  });

  return newArray;
}

export { isOdd, exclude };
