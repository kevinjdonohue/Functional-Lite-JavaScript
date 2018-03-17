import { sum, mult, multAndSum, compose } from './composition';

describe('Manual Composition Tests', () => {
  it('calling sum with the result of mult and an input', () => {
    // manual composition -- using the result of one function to supply data to another function
    const result = sum(mult(3, 4), 5);

    result.should.equal(17);
  });

  it('calling multAndSum with all inputs', () => {
    const result = multAndSum(3, 4, 5);

    result.should.equal(17);
  });

  it('calling compose', () => {
    const multAndSumFunc = compose(mult, sum);

    const result = multAndSumFunc(3, 4, 5);

    result.should.equal(17);
  });
});
