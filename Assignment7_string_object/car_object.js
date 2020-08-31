'use strickt'
prompt = require('prompt-sync')()

let car = {
     
     make: "Toyota",
     year:2009,
     odemeter:190000,
     serviceCount: 8,
     
     service: function(){ return this. serviceCount++},
     getOdometerReading: function(ode){return this.odemeter++},
     resetService: function(){return this.serviceCount = 0},
     resetOdemeter: function(){return this.odemeter = 0}
     
};
console.log(car.service())
console.log(car.service())
console.log(car.resetService())
console.log(car.service())

console.log(car.getOdometerReading())
console.log(car.getOdometerReading())
console.log(car.resetOdemeter())


console.log(car.getOdometerReading())



