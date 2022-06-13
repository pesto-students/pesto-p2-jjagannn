// Write a function called hasDuplicate
// which accepts an array and 
// returns true or false 
// if that array contains a duplicate
// Guidelines:
// 1.ReferencehasDuplicate([1,5,-1,4])
// false

// 2.JS function should have Set API implemented.
// 3.Bonus - if space and time complexity is taken care.

const hasDuplicate = (arr) => { return arr.length !== new Set(arr).size }

console.log(hasDuplicate([1,5,-1,4]))
console.log(hasDuplicate([1,1,2,5,-1,4,5,8,9,10]))
console.log(hasDuplicate([-1,1]))
console.log(hasDuplicate([]))

//when to create a function directly function(){} and
//when to create a function with const = function(){}