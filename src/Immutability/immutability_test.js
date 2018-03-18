/*
Demonstrations that although using const or Object.freeze is valuable
it doesn't actually provide true immutability

const -- immutable variable / assignment

Object.freeze -- shallow immutability (doesn't protect at depth)
*/

import { doubleThemMutable, doubleThemImmutable } from './immutability';

describe('Immutability Tests', () => {
  it('const does not disallow individual values from changing', () => {
    // arrange
    const actual = [1, 2, 3, 5, 8, 10];
    const expected = [1, 2, 3, 5, 8, 13];

    // act
    actual[actual.length - 1] = 13;

    // assert
    actual.should.deep.equal(expected);
  });

  //   it('Freezing an array does disallow indivdiual values from changing', () => {
  //     // arrange
  //     const actual = Object.freeze([1, 2, 3, 4, 5, 6]);
  //     const expected = [1, 2, 3, 4, 5, 6, 7];

  //     // act
  //     actual[actual.length] = 7;

  //     // assert
  //     actual.should.deep.equal(expected);
  //   });

  it('Freezing an object does not disallow individual values from changing in its array', () => {
    // arrange
    const actual = Object.freeze({ name: 'Kevin', values: [1, 2, 3, 4, 5] });

    // act
    actual.values[actual.values.length] = 100;

    // assert
    actual.values[actual.values.length - 1].should.equal(100);
  });

  it('doubleThemMutable - should mutate a given array in place', () => {
    // arrange
    const actual = [3, 4, 5];
    const expected = [6, 8, 10];

    // act
    doubleThemMutable(actual);

    // assert
    actual.should.deep.equal(expected);
  });

  it('doubleThemImmutable - should not mutate a given array but instead return a new array', () => {
    // arrange
    const original = [3, 4, 5];
    const expected = [6, 8, 10];

    // act
    const actual = doubleThemImmutable(original);

    // assert
    actual.should.deep.equal(expected);
  });
});
