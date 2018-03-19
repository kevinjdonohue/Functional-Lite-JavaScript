import { simpleClosureExample, simpleCurryingExample } from './closure';

describe('Closure Tests', () => {
  it('should increment counter each time its called due to closure', () => {
    // act
    const func = simpleClosureExample();

    // assert
    func().should.equal(1);
    func().should.equal(2);
    func().should.equal(3);
  });

  it('should return a function that adds a provided amount (X) to a given value (Y)', () => {
    // act
    const add10 = simpleCurryingExample(10);
    const result = add10(3);

    // assert
    result.should.equal(13);
  });
});
