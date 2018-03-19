import { doubleIt, transform } from './map';

describe('Map Tests', () => {
  it('transform -- should return a new array with its values doubled', () => {
    // arrange
    const input = [1, 2, 3, 4, 5];
    const expected = [2, 4, 6, 8, 10];

    // act
    const result = transform(input, doubleIt);

    // assert
    result.should.deep.equal(expected);
  });

  it('map -- should return a new array with its values doubled', () => {
    // arrange
    const input = [1, 2, 3, 4, 5];
    const expected = [2, 4, 6, 8, 10];

    // act
    const result = input.map(doubleIt);

    // assert
    result.should.deep.equal(expected);
  });
});
