import { iterate, logValue } from './foreach';

describe('ForEach Tests', () => {
  it('iterate -- should iterate through the given array and return all values in a string', () => {
    // arrange
    const input = [1, 2, 3, 4, 5];

    // act
    const result = iterate(input, logValue);

    // assert
    result.should.equal('12345');
  });

  it('forEach -- should iterate through the given array and return all values in a string', () => {
    // arrange
    const input = [1, 2, 3, 4, 5];
    let values = '';

    // act
    input.forEach((number) => {
      values += number;
    });

    // assert
    values.should.equal('12345');
  });
});
