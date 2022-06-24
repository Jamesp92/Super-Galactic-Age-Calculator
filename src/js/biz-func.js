import $ from 'jquery';
export default class PlanetCalculator{
  constructor(personAge) {
    this.mercury = personAge * .24;
    this.venus = personAge * .62;
    this.mars = personAge * 1.88;
    this.jupiter = personAge * 11.86;
  }

}

