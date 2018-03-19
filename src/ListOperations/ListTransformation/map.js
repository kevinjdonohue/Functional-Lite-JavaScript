function doubleIt(value) {
  return value * 2;
}

function transform(arr, func) {
  const newArray = [];

  arr.forEach((item, index, array) => {
    newArray[index] = func(array[index]);
  });

  return newArray;
}

export { doubleIt, transform };
