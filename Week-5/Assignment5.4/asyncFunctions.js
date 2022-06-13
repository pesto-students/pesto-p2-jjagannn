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

// Using async/await:

function asyncAwait(){
    console.log("starting the gen*async method");
    const usersData = fetchUsersAA();
    usersData.then(resp => console.log(resp));
    const task2 = doTask2AA();
    task2.then(resp => console.log(resp));
    const task3 = doTask3AA();
    task3.then(resp => console.log(resp));
}

async function fetchUsersAA() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    return users;
}

async function dotask2AA() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const task2AA = await response.json();
    return task2AA;
}

async function doTask3AA() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const task3AA = await response.json();
    return task3AA;
}


// Using Generators:

function genAsync(){
    console.log("starting the gen*async method");
    const usersIt = fetchUsers();
    usersIt.next().value.then(resp => console.log(resp));
    const task2 = doTask2();
    task2.next().value.then(resp => console.log(resp));
    const task3 = doTask3();
    task3.next().value.then(resp => console.log(resp));
}

function* fetchUsers() {
    yield fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => { return users; })
      .catch(err => {console.log(`${err} errored`)})
      .finally(() => {console.log("Finally has been printed")});
}

function* doTask2() {
    yield fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => resp.json())
        .then(res2 => { return res2; })
        .catch(err => {console.log(`${err} errored`)})
        .finally(() => {console.log("Finally has been printed")});
}

function* doTask3() {
    yield fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(res3 => { return res3; })
      .catch(err => {console.log(`${err} errored`)})
      .finally(() => {console.log("Finally has been printed")});
}
