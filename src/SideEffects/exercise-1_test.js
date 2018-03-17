import { bar } from './exercise-1';

describe('Exercise 1 Tests', () => {
  it('should always return 6 and 120 given 20 and 5', () => {
    // act
    const result = bar(20, 5);
    const result2 = bar(20, 5);

    // assert
    result.should.deep.equal(result2);
  });
});
