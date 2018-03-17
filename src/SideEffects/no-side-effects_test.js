import { bar } from './no-side-effects';

describe('No Side Affects Tests', () => {
  it('should', () => {
    // act
    const result1 = bar(5, 2, 3);
    const result2 = bar(5, 10, 15);

    // asert
    result1.should.deep.equal([10, 15]);
    result2.should.deep.equal([50, 75]);
  });
});
