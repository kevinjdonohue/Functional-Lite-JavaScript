/* eslint-disable no-param-reassign, no-unused-vars, import/prefer-default-export */

function doubleThemMutable(list) {
  list.forEach((item, index, array) => {
    array[index] *= 2;
  });
}

function doubleThemImmutable(list) {
  const newList = [];

  list.forEach((item, index, array) => {
    newList[index] = array[index] * 2;
  });

  return newList;
}

export { doubleThemMutable, doubleThemImmutable };
