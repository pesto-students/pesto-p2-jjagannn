// Find the Town Judge
// In a town, there are n people labeled from 1 to n. 
// There is a rumor that one of thesepeople is secretly the town judge.
// If the town judge exists, then: 
// 1. The town judge trusts nobody. 
// 2. Everybody (except forthe town judge) trusts the town judge. 
// 3. There is exactly one person that satisfiesproperties 1 and 2.
// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. 
// Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
// Example 1:Input: n = 2, trust = [[1,2]]Output: 2
// Example 2:Input: n = 3, trust = [[1,3],[2,3]]Output: 3
// Example 3:Input: n = 3, trust = [[1,3],[2,3],[3,1]]Output: -1

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
 var findJudge = function(n, trust) {
    let counts = new Array(n+1).fill(0);
    
    for(let [p,j] of trust){
        //p trusts somebody like j
        counts[p] -= 1;
        //j is trusted by p
        counts[j] += 1;
    }
    
    for(let i=1; i<counts.length; ++i){
        if(counts[i] === (n-1)){
            return i;
        }
    }
    return -1;
};