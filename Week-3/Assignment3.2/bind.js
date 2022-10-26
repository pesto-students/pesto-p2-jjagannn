var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",
    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

var bike = { 
    registrationNumber: "TN23 4835",
    brand: "Honda",
    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}

//Below works since we call with implicit binding
console.log(car.displayDetails());

//Implicit binding is lost when using a new var
var unbound = car.displayDetails;
console.log(unbound());

//Solution to implicit loss
//bind syntax --> fn.bind(thisArg, arg1, arg2, ...)
var bounded = unbound.bind(car);
console.log(bounded());

//The function is bound to just 'car' and returns the same as above
console.log(bounded.call(bike))