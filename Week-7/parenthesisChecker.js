
 var isValid = function(s) {
    if(s.length % 2 !== 0){
        return false;
    }
    let openStack = new Stack(11,s); //space average case n/2, worst case n
    let closeMap = { // space 3 - worst case
        '}':'{',
        ']':'[',
        ')':'('
    };
    let len = s.length;
    for(let i=0; i<len; ++i){ //time n
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            openStack.push(s[i]);
        } else {
            lastOpen = openStack.pop();
            if (lastOpen === closeMap[s[i]]){
                continue;
            }else{
                return false;
            }
        }
    }
    return openStack.isEmpty() ? true: false;
};

//Custom Stack
class Stack{
  constructor(maxSize,s){
    if(isNaN(maxSize)){
      maxSize = 10;
    }
    
    this.maxSize = s.length+1;
    this.container = [];
  }

  isEmpty(){
    return this.container.length === 0;
  }

  isFull(){
    return this.container.length >= this.maxSize;
  }
  
  push(value){
    if(!this.isFull()){
      this.container.push(value);
    } else {
      console.log("Stack is full");
      return;
    }
  }

  pop(){
    if (!this.isEmpty()){
      return this.container.pop();
    } else {
      console.log("Stack is empty")
      return;
    }
  }
}

let s1 = "()[]{}";
console.log(isValid(s1))

//Time complexity: O(n)
// Space complexity: O(n)