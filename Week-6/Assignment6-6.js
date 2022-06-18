var threeSumClosest = function(nums, target) {
    let n = nums.length;
    nums.sort((a,b)=> a-b);
    let closestSum = nums[0] + nums[1] + nums[2];
    // nums.sort();
    //sorting to begin 2 pointer approach
    1
    //i travels till 3rd last
    for(let i=0; i<nums.length-2; i+=1){
        aPointer = i+1;
        bPointer = nums.length-1;
        while(aPointer < bPointer){
            const currSum = nums[i] + nums[aPointer] + nums[bPointer];
            if(currSum > target){
                bPointer-=1;
            } else{
                aPointer+=1;
            }
            if(Math.abs(target-currSum) < Math.abs(target-closestSum)){
               closestSum = currSum; 
            }
        }
    }
    return closestSum;
}

let arr = [-1,2,1,-4]
let k = 1
console.time()
let result = threeSumClosest(arr,k);
console.log(result);
console.timeEnd();
// Time Complexity is O(n3)
// Space Complexity is O(1)