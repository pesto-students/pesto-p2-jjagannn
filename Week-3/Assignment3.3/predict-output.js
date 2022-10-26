function createIncrement() {
    let count=0;
    function increment() {
      count++;
    }
    let message=`Count is ${count}`;
    function log(){
      console.log(message);
    }
    return [increment,log];
  }
  const [increment,log]=createIncrement();
  //When destructuring, both increment and log remember the lexical scope available when they are destructured. At this point, count is 0 and message is registered as "Count as 0".
  increment();
  //count = 1
  increment();
  // count = 2
  increment();
  //count = 3
  log();
  // What is logged?
  //Output:-  Count is 0
  //Because increment only changes the 'count' and not the 'message' which sticks to it's original value since no updation has happened. Hence output is 0.
  