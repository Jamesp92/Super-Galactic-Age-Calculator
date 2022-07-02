import $ from 'jquery';
export default class PlanetCalculator{
  constructor(personAge) {
    this.maxLife = 70;
    this.personAge = personAge;
    this.lifeExpect = this.maxLife - this.personAge;
    this.mercury = Math.floor((this.personAge /.24))
    this.venus = Math.floor((this.personAge /.62))
    this.mars =  Math.floor((this.personAge / 1.88))
    this.jupiter = Math.ceil((this.personAge /  11.86));
  }
}



