// tabulation

function fibonacci(n) {
  let dp = new Array(n + 1).fill(0);
  dp[0] = 0;

  if (n > 0) {
    dp[1] = 1;
  }

  let count = 2;
  while (count <= n) {
    dp[count] = dp[count - 1] + dp[count - 2];
    count += 1;
  }
  return dp[n];
}
console.log(fibonacci(5));
