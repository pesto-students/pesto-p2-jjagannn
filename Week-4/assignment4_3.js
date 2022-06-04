//Fibonacci series using iterators

let fib = {
    [Symbol.iterator](){
        let n1 = 0, n2 = 1, val;
        return {
            next(){
                [val, n1, n2] = [n1, n2, n1+n2];
                return {value: val, done: false}
              }
            }
    },
};

console.log([...fib]);

for (let num of fib) {
  if (num > 10){
    break;
  }
  console.log(num);
}