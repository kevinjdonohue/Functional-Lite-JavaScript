function returnsASeven() {
  return 7;
}

function returnsAThree() {
  return 3;
}

function returnsATen() {
  return 10;
}

// thunk?
function returnsAFunc(x) {
  return function returnsXValue() {
    return x;
  };
}

function add(x, y) {
  return x + y;
}

function add2(function1, function2) {
  return add(function1(), function2());
}

function addN(arrayOfValues) {
  if (arrayOfValues.length === 2) {
    return add2(returnsAFunc(arrayOfValues[0]), returnsAFunc(arrayOfValues[1]));
  }

  return add2(returnsAFunc(arrayOfValues[0]), returnsAFunc(addN(arrayOfValues.slice(1))));
}

export { returnsASeven, returnsAThree, returnsATen, add, add2, addN, returnsAFunc };
