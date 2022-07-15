// Implement a Queue using 2 stacks s1 and s2. 
// A Query Q is of 2 Types 
// (i) 1 x (a queryof this type means pushing 'x' into the queue) 
// (ii) 2 (a query of this type means to popelement from queue and print the poped element)
// Example 1:
// Input:51 2 1 3 2 1 4 2
// Output:2 3
// Explanation:
// In the first testcase1 2 the queue will be {2}
// 1 3 the queue will be {2 3}
// 2   poped element will be 2 the queue will be {3}
// 1 4 the queue will be {3 4}
// 2   poped element will be 3.

class Queue{
    constructor(){
        //init left(main) and right(auxiliary) stacks
        this.lStack = [];
        this.rStack = [];
    }

    enqueue(data){
        //moving existing elements to avoid affecting the FIFO
        while(this.rStack.size !== 0){
            this.lStack.push(this.rStack[this.rStack.length-1]);
            this.rStack.pop();
        }
        //Adding new data
        this.lStack.push(data);
        while(this.lStack.size !== 0){
            this.rStack.push(this.lStack[this.lStack.length-1]);
            this.lStack.pop();
        }
    }

    dequeue(){
        if(this.rStack.size === 0){
            console.log("Stack underflow!");
        }
        let topElem = this.rStack[this.rStack.length-1];
        this.rStack.pop();
        return topElem;
    }
}