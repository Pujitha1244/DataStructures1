function knapSackTabulation(W, wt, val, n) {
  const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (wt[i - 1] <= w) {
        dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - wt[i - 1]] + val[i - 1]);
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][W];
}
console.log(knapSackTabulation(8, [2,3,4,5], [1,2,5,6], 4));
