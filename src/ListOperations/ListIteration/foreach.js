/* eslint-disable no-console */

function logValue(v) {
  return v;
}

function iterate(arr, fn) {
  let values = '';

  for (let i = 0; i < arr.length; i += 1) {
    values += fn(arr[i]);
  }

  return values;
}

export { logValue, iterate };
