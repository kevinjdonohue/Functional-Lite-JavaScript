import { nonRecursiveSum, recursiveSum } from './recursion';

describe('Recursion Tests', () => {
  it('should non-recursively sum the given values', () => {
    // arrange
    // act
    const result = nonRecursiveSum(3, 4, 5);

    // assert
    result.should.equal(12);
  });

  it('should recursively sum two values', () => {
    // act
    const result = recursiveSum(3, 4);

    // assert
    result.should.equal(7);
  });

  it('should recursively sum multiple values', () => {
    // act
    const result = recursiveSum(3, 4, 5);

    // assert
    result.should.equal(12);
  });
});
