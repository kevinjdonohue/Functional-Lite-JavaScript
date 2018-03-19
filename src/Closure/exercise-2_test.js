import { foo } from './exercise-2';

describe('Exercise 2 Tests', () => {
  it('should return a function that takes in and adds two arguments', () => {
    // arrange

    // act
    const add = foo(3, 3);
    const result = add();
    const result2 = add();

    // assert
    result.should.equal(6);
    result2.should.equal(6);
  });
});
