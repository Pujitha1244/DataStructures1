// In stocks 1 we are buying and selling stocks single time
// In this stocks 2 we can buy and sell stocks as many times we want
// Note: after buying we have to sell then only we can buy 2nd time
function maxProfit(prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    // If the price today is higher than yesterday, add the difference to maxProfit
    if (prices[i] > prices[i - 1]) {
      maxProfit += prices[i] - prices[i - 1];
    }
  }

  return maxProfit;
}

// Example usage:
const prices = [7, 2, 5, 6, 1, 4];
console.log(maxProfit(prices)); // Output: 7
