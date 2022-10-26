//apply syntax --> fn.apply(thisArg, [argsList])
//apply internally parses argsList into positional args and supplies to fn
//1st Specific use case of apply
//for Math. functions that take only positional args and we want to supply argsList of numbers
'use strict';
console.log(Math.max.apply(null, [1,2,3]));
console.log(Math.min.apply(null, [1000,999,777,888,555]));

//2nd case
//sending function params as a list that will be parsed into positional args by apply before supplying to person.fullName fn
const person = {
  fullName: function(city, country) {
    console.log(this.firstName + " " + this.lastName + " from " + city + "," + country);
  }
}

const person1 = {
  firstName:"Jack",
  lastName: "Dorsey"
}

person.fullName.apply(person1, ["Virginia", "USA"]);