import $ from 'jquery';
export default class PlanetCalculator{
  constructor(personAge) {
    this.personAge = personAge;
    this.lifeExpect = 70;
    this.mercury = Math.floor((this.personAge /.24))
    this.venus = Math.floor((this.personAge /.62))
    this.mars =  Math.floor((this.personAge / 1.88))
    this.jupiter = Math.ceil((this.personAge /  11.86));
    this.mercuryLeft = (this.lifeExpect - this.mercury);
  }


  // mercuryLife(){
  // let mercuryLeft = (this.lifeExpect - this.mercury);
  // return mercuryLeft;
  // }
}

