// Pair With Given Difference
// Given an one-dimensional unsorted array A containing N integers.
// You are also given an integer B, find if there exists a pair of elements in the array whose difference is B.
// Return 1 if any such pair exists else return 0. 
// Problem Constraints 1 <= N <= 105 -103 <= A[i]<= 103 -105 <= B <= 105

function PairsWithGivenDifference(arr, diff){
    let uniqueArr = new Set(arr); //S O(n)
    for(let i = 0; i<arr.length-1; i++){ //O(1)
      let targetNum = diff + arr[i]; //O(1)
      if (uniqueArr.has(targetNum)){
        return 1;
      }
    }
    return 0;
}
let arr1 = [5, 10, 3, 2, 50, 80];
let arr2 = [-10,20];
let arr3 = [];
let arr4 = [NaN, undefined, null, 10, -20, 10];
let arr5= [[10,2,40]];
let arr6 = [{}];

let givenDiff = 30;
console.time();
let result = PairsWithGivenDifference(arr2,givenDiff);
console.log(result);
console.timeEnd();

//Performance:
// Time complexity is O(n)
// Space complexity is O(n)