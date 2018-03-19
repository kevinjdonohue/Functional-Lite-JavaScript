import { isOdd, exclude } from './filter';

describe('Filter Tests', () => {
  it('exclude - should return a new array with even numbers excluded', () => {
    // arrange
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [1, 3, 5, 7, 9];

    // act
    const result = exclude(input, isOdd);

    // assert
    result.should.deep.equal(expected);
  });

  it('filter - should return a new array with even numbers excluded', () => {
    // arrange
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expected = [1, 3, 5, 7, 9];

    // act
    const result = input.filter(isOdd);

    // assert
    result.should.deep.equal(expected);
  });
});
