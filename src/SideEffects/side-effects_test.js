import { impure, y, z } from './side-effects';

describe('Side Effects Tests', () => {
  it('impure function should alter y and z', () => {
    impure(5);

    y.should.equal(10);
    z.should.equal(15);
  });
});
