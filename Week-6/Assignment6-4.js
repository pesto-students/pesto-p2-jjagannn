// Best time to buy and sell stock
function buySellStocks(prices){
    if (prices.length < 1){
      return null;
    }
    let profit = 0,
      buyPrice = prices[0];
  
    for(let i=1; i<prices.length; i++){
      if(prices[i] < buyPrice){
        buyPrice = prices[i];
        continue
      } 
      profit = Math.max(profit, prices[i] - buyPrice);
    }
    return profit;
  }
  
  week1 =  [7,1,5,3,6,4];
  week2 = [2,3,8,1,6];
  week3 = [4,1];
  week4 = [9];
  week5 = [22,7,11,6,-4,10,21,-11,18];
  console.time();
  let result = buySellStocks(week5);
  console.log(result);
  console.timeEnd();
  // Time Complexity is O(n)
  // Space Complexity is O(1)