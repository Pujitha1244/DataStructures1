// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Example:

// Input: prices = [9,1,5,3,7,5]

// Output: 6

// method : Intuation
// But at low value and sell at high value

// right : buy , left: sell

// Method 1

// function maxProfit(prices) {
//   let left = 0;
//   let profit = 0;
//   for (let right = 1; right < prices.length; right++) {
//     if (prices[right] < prices[left]) {
//       left = right;
//     } else {
//       profit = Math.max(profit, prices[right] - prices[left]);
//     }
//   }
//   return profit;
// }
// console.log(maxProfit([9, 1, 5, 3, 7, 5]));

// Method 2

function maxProfit(prices) {
    let min = prices[0];
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
      let cost = prices[i] - min;
      profit = Math.max(profit, cost);
      min = Math.min(min, prices[i]);
    }
    return profit;
  }
  console.log(maxProfit([9, 1, 5, 3, 9, 5]));
  