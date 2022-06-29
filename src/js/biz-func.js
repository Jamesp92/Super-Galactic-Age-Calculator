import $ from 'jquery';
export default class PlanetCalculator{
  constructor() {
    this.personAge = 10;
    this.mercury = this.personAge *.24 ;
    this.venus = this.personAge * .62;
    this.mars =  this.personAge * 1.88;
    this.jupiter = this.personAge *  11.86;
  }

}


