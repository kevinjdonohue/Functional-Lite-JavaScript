import {
  returnsASeven,
  returnsAThree,
  returnsATen,
  add,
  add2,
  addN,
  returnsAFunc,
} from './exercise-4';

describe('Exercise 4 Tests', () => {
  it('add -- should add two numbers together', () => {
    // act
    const result = add(3, 7);

    // assert
    result.should.equal(10);
  });

  it('add2 -- should take in two functions that return numbers and then call add', () => {
    // act
    const result = add2(returnsASeven, returnsAThree);

    // assert
    result.should.equal(10);
  });

  it('add2 -- should take in two calls to returnsAFunc with different values and then call add', () => {
    // act
    const result = add2(returnsAFunc(3), returnsAFunc(7));

    // assert
    result.should.equal(10);
  });

  it('addN -- should take in two functions that return numbers and then call add2 which returns the sum', () => {
    // arrange
    const inputs = [7, 3, 10, 7];

    // act
    const result = addN(inputs);

    // assert
    result.should.equal(27);
  });

  it('returnsAFunc -- given a value, it returns a function that returns the given value', () => {
    // act
    const returns10 = returnsAFunc(10);
    const result = returns10();

    // assert
    result.should.equal(10);
  });

  it('add -- should take in two numbers, add them, and return the result', () => {});

  it('add2 -- should take in two functions, call both, and send those to add', () => {});
});
