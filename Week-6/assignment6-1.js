// Find the contiguous subarray within an array, A of length N which has the largest sum. 
// Input Format: The first and the only argument contains an integer array, A. 
// Output Format: Return an integer representing the maximum possible sum of the contiguous subarray.
// Constraints: 1 <= N <= 1e6 -1000 <= A[i] <= 1000

// Approach --> sliding window Time Complexity is O(n), Space is O(1)

function getMaxContigSubArray(arr){
    let currSum, maxSum;
    //initialising the sum with 1st element
    currSum = arr[0];
    maxSum = arr[0]; 
    //starting the loop from 2nd element
    for (let i=1; i<arr.length; i++){
      if (currSum < 0){
        currSum = arr[i]; 
      }
      else{
        currSum = currSum + arr[i];
      }
      maxSum = Math.max(currSum, maxSum);
    }
    return maxSum;
  }
  
  let arr1 = [-20,10,-9,20,-1,100,-119, 10000];
  let arr2 = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
  let arr3 = [1,2,3,4,-10];
  console.time();
  let result = getMaxContigSubArray(arr1)
  console.log(result);
  console.timeEnd();
  //Time Complexity is O(n)
  //Space Complexity is O(1)
  //Time taken = 17 ms