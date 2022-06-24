import PlanetCalculator  from '../src/js/biz-func.js';

describe('PlanetCalculator', () => {
  test('should take user age and calculate it to match age on another planet', () => {
      const years = new PlanetCalculator(10)
    expect(years.mercury).toEqual(2.4);
  });
  test('should take user age and calculate it to match age on another planet', () => {
    const years = new PlanetCalculator(10)
  expect(years.venus).toEqual(6.2);
 });
 test('should take user age and calculate it to match age on another planet', () => {
  const years = new PlanetCalculator(10)
  expect(years.mars).toEqual(18.8);
  });
});