import PlanetCalculator  from '../src/js/biz-func.js';

describe('PlanetCalculator', () => {
    test('should take user age and calculate it to match age on another planet', () => {
      const years = new PlanetCalculator(10)
      expect(years.mercury).toEqual(41);
  });
    test('should take user age and calculate it to match age on another planet', () => {
      const years = new PlanetCalculator(10)
      expect(years.venus).toEqual(16);
  });
    test('should take user age and calculate it to match age on another planet', () => {
      const years = new PlanetCalculator(10)
      expect(years.mars).toEqual(5);
    });
    test('should take user age and calculate it to match age on another planet', () => {
      const years = new PlanetCalculator(10)
      expect(years.jupiter).toEqual(1);
   });
   test('should calculate how much time left on murcury', () => {
    const years = new PlanetCalculator(10)
    expect(years.mercuryLeft).toEqual(29);
   });
   test('should calculate how much time left on venus', () => {
    const years = new PlanetCalculator(10)
    expect(years.venusLeft).toEqual(54);
  });
  test('should calculate how much time left on mars', () => {
    const years = new PlanetCalculator(10)
    expect(years.marsLeft).toEqual(65);
  });
  test('should calculate how much time left on jupiter', () => {
    const years = new PlanetCalculator(10)
    expect(years.jupiterLeft).toEqual(69);
  });
})
