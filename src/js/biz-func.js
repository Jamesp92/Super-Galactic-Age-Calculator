import $ from 'jquery';
export default class PlanetCalculator{
  constructor(personAge) {
    this.mercury = personAge * .24;
    this.venus = personAge * .62;
  }

}

