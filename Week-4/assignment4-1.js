function getNumber(){
    return Math.floor(Math.random() *100);
  }
  
  const p = new PromisePolyFill(function(resolve,reject){
    let randomNumber = getNumber();
    if (randomNumber % 5 === 0) {
      reject(randomNumber);
    } else {
      resolve(randomNumber);
    }
  }).then(function(message){
    console.log(message);
    return "another message";
  }).then(function(message){
    console.log(message);
  });
  
  //!Main
  function PromisePolyFill(executor) {
    let onResolve, onReject;
    let fulfilled = false,
    rejected = false,
    called = false,
    value;
    
    function resolve(val) {
      fulfilled = true;
      value = val;
  
      if (typeof onResolve === "function") {
        onResolve(val);
        called = true;
      }
    }
    
    function reject(val) {
      rejected = true;
      value = val;
  
      if (typeof onReject === "function") {
        onReject(val);
        called = true;
      }
    }
  
    this.then = function(callback){
      onResolve = callback;
      if(fulfilled && !called) {
        called = true;
        onResolve(value);
      }
      return this;
    };
    this.catch = function(callback){
      onReject = callback;
      if(rejected && !called){
        called = true;
        onReject(value);
      }
      return this;
    }
    
    executor(resolve,reject);
  }