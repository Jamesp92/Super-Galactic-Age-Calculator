import PlanetCalculator  from '../src/js/biz-func.js';

describe('PlanetCalculator', () => {
  test('should take user age and calculate it to match age on another planet', () => {
      const years = new PlanetCalculator(10)
    expect(years.mercury).toEqual(2.4);
  });
  test('should take user age and calculate it to match age on another planet', () => {
    const years = new PlanetCalculator(10)
  expect(years.venus).toEqual();
 });
 test('should take user age and calculate it to match age on another planet', () => {
  const years = new PlanetCalculator(10)
  expect(years.mars).toEqual(42);
  });
  test('should take user age and calculate it to match age on another planet', () => {
    const years = new PlanetCalculator(10)
    expect(years.jupiter).toEqual(118.6);
    });
    test('should tell user how much time they have left to live on jupiter based on life expectancy', () => {
      const age = new PlanetCalculator(10)
      expect(age.lifeLeftOnJupiter()).toEqual(49);
    });
      test('should tell user life expectancy on mercury', () => {
        const age = new PlanetCalculator(10)
        expect(age.lifeLeftOnMercury()).toEqual(68);
      
    });
})
