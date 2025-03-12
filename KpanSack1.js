// function knapSack(W, wt, val, n){
//     function helper(index, remWeight){
//         if(index >=n || remWeight === 0){
//             return 0
//         }
//         let exclude = helper(index+1, remWeight)
//         let include = 0;
//         if(wt[index] <= remWeight){
//             include = val[index]+helper(index+1,remWeight-wt[index])
//         }
//         return Math.max(exclude,include)
//     }
//     return helper(0,W)
// }
// // knapSack(8,[8,2,5],[2,3,9],3)
// console.log(knapSack(8,[8,2,5],[2,3,9],3))

// function knapSack(W, wt, val, n) {
//   const dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));
//   for (let i = 1; i <= n; i++) {
//     for (let w = 1; w <= W; w++) {
//         console.log('dp[i - 1]', dp[i - 1])
//         console.log('dp[(i - 1, w - wt[i])]', dp[(i - 1, w - wt[i])])
//       dp[(i, w)] = Math.max(dp[i - 1], dp[(i - 1, w - wt[i])] + val[i]);
//       console.log('dp[(i, w)]', dp[(i, w)])
//     }
//   }
// }
// // knapSack(8,[8,2,5],[2,3,9],3)
// console.log(knapSack(8, [8, 2, 5], [2, 3, 9], 3));

// function knapSack(W, wt, val, n) {
//   const dp = Array(W + 1).fill(0);

//   for (let i = 0; i < n; i++) {
//     for (let w = W; w >= wt[i]; w--) {
//       dp[w] = Math.max(dp[w], dp[w - wt[i]] + val[i]);
//     }
//   }

//   return dp[W];
// }

// console.log(knapSack(8, [8, 2, 9], [2, 3, 9], 3));

function knapSack(W, wt, val, n) {
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

  console.log(knapSack(8, [8, 2, 5], [2, 3, 9], 3));
