// Q: Refactor the above stack implementation, using the concept of closure, 
// such that there is noway to access items array outside of createStack() function scope: (2-3 hours)

function createStack(){
    let items = []
    //items is now privately accessible for push, pop methods
    return {
        push(item) {
            items.push(item);
        },
        pop() {
            return items.pop();
        }
    };
}
const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());// => 5
console.log(stack.items);// => undefined


//Explanation: 
//Objective of encapsulation is to store the state of the object privately
//Only the object methods should have access to changing the state, variables
//Hence I've moved 'items' out of the return fn and placed it inside the createStack() fn, meaning that the return fn will remember 'items' from it's lexical/enclosing scope
//Post encapsulation, the usage of 'this' keyword is also avoided since 'items' becomes dynamic/ seperate for each object created

