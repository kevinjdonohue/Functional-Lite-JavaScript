import { mult } from './Exercise-3';

describe('Exercise 3 Tests', () => {
  it('should multiple 3 numbers', () => {
    // act
    const result = mult(3, 4, 5);

    // assert
    result.should.equal(60);
  });

  it('should multiply any set of numbers', () => {
    // act
    const result = mult(3, 4, 5, 6);

    // assert
    result.should.equal(360);
  });
});
