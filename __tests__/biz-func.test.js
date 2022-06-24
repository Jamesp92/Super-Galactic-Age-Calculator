import PlanetCalculator  from '../src/js/biz-func.js';

describe('PlanetCalculator', () => {
  test('should take user age and calculate it to match age on another planet', () => {
      const yearsCalculator = new PlanetCalculator(10)
    expect(yearsCalculator.murcury()).toEqual(2.04);
  });
});
// export default exampleTestFunction;
