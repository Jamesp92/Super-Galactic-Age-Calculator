import $ from 'jquery';
export default class PlanetCalculator{
  constructor(personAge) {
    this.maxLife = 70;
    this.personAge = personAge;
    this.lifeExpect = this.maxLife - this.personAge;
    this.mercury = this.personAge *.24;
    this.venus = this.personAge * .62;
    this.mars =  this.personAge * 1.88;
    this.jupiter = this.personAge * 11.86;
  }
   lifeLeftOnJupiter(){
   let currentAge =  this.jupiter.toFixed(0);
   let jupiteryearsLeft = currentAge - this.maxLife;
    return jupiteryearsLeft
   }
   lifeLeftOnMercury(){
    let currentAge =  this.mercury.toFixed(0);
    let mercuryYearsLeft = currentAge - this.maxLife;
     return mercuryYearsLeft
    }
  }


