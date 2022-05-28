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
//call syntax --> fn.call(thisArg, arg1, arg2, ...)
//the fn is not bound to one object instead it adapts to dynamic context
console.log(unbound.call(bike));
console.log(unbound.call(car));
