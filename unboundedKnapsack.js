// function unboundedKnapsack(W, wt, val, n) {
//     const dp = Array(W + 1).fill(0);
  
//     for (let i = 0; i <= W; i++) {
//       for (let j = 0; j < n; j++) {
//         if (wt[j] <= i) {
//           dp[i] = Math.max(dp[i], dp[i - wt[j]] + val[j]);
//         }
//       }
//     }
  
//     return dp[W];
//   }
  
//   console.log(unboundedKnapsack(8, [8, 3, 2], [2, 3, 9], 3));

function unboundedKnapsack(W, wt, val, n) {
    const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));
  
    for (let i = 1; i <= n; i++) {
      for (let w = 0; w <= W; w++) {
        if (wt[i - 1] <= w) {
          dp[i][w] = Math.max(dp[i - 1][w], dp[i][w - wt[i - 1]] + val[i - 1]);
        } else {
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    return dp[n][W];
  }
  
  console.log(unboundedKnapsack(8, [8, 3, 2], [2, 3, 9], 3));