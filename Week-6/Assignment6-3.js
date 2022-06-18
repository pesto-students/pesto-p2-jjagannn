// Sort array of 0's,1's and 2's
// Solution:
// Inplace sorting
// Single iteration
function sortZerosOnesTwos(arr){
    let low = 0,
      mid = 0,
      high = arr.length - 1;
    while (mid <= high){
      if(arr[mid] === 0){
        [arr[mid],arr[low]] = [arr[low],arr[mid]];
        low++;
        mid++;
        continue
      }
      if(arr[mid] === 1){
        mid++;
        continue
      }
      if(arr[mid] === 2){
        [arr[mid],arr[high]] = [arr[high],arr[mid]];
        high--;
        continue
      }
      break;
    }
    return arr;
  }
  
let arr1 = [0,2,1,0,2,1,0,2]
let arr2 = [1,0,1,0,1,1]
let arr3 = [NaN]
let arr4 = [undefined]
let arr5= []
let arr6 = [2,0,1,null, undefined, NaN,0,NaN]
console.time();
let result = sortZerosOnesTwos(arr6)
console.log(result);
console.timeEnd();
//Time Complexity is O(n)
//Space Complexity is O(1)