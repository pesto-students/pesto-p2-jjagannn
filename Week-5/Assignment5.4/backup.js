// Exercise5.1:
// Using Async/Await and Generators, create separate functions and achieve the samefunctionality.(3hours)
// Execute 3 callback functions asynchronously, for example doTask1(), doTask2() and doTask3().

// Guidelines:
// 1.2 functions should be created. One for Async/Await and the other one for Generators.
// 2.3rd party libraries should not be used.
// 3.Custom Function should carry a meaningful name.
// 4.The program should execute without errors.
// 5.The program should achieve the desired result.
// 6.The program should take care of all 3 states of a Promise.
// 7.Should be committed to Git with meaningful commit messages.

// Outcome:
// 1.Under the hood understanding of how a Generator works.
// 2.Under the hood understanding of how Async/await works.
const addresses = {
    "jagan":"21/1, East Coast",
    "ravi": "7, West Coast",
    "mohan": "72, Pacific West"
};

async function asyncawait(userName){
    console.log("starting the aa method");
    if (userName in addresses){
        let name = await taskGetName(userName);
        let address = await taskGetAddress(userName);
        let work = await taskGetWorkDetails(userName);
    }
}

function taskGetName(name){
    setTimeout(() => {
        return "Mr/ Ms" +  " . " + name.toUpperCase();
    },2000);
}

function taskGetAddress(name){
    setTimeout(() => {
        return "Appartment no" +  ": " + addresses.get(name);
    },3000);
}

function task3(){
    setTimeout(() => {
        return "Appartment no" +  ": " + addresses.get(name);
    },5000);
}