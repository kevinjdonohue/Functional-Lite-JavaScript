import { compose, mult } from './reduce';

describe('Compose Tests', () => {
  it('compose -- should return a total given an array of values', () => {
    // arrange
    const input = [1, 2, 3, 4, 5];

    // act
    const result = compose(input, mult, 1);

    // assert
    result.should.equal(120);
  });

  /* eslint-disable no-param-reassign */
  it('reduce -- should return a total given an array of values', () => {
    // arrange
    const input = [1, 2, 3, 4, 5];

    // act
    const result = input.reduce((accumulator, currentValue) => (accumulator *= currentValue), 1);

    // assert
    result.should.equal(120);
  });
});
