// You are given an integer array cost where cost[i] is the cost of ith step on a staircase.
// Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.

// Example 1:

// Input: cost = [10,20,30]
// Output: 20
// Explanation: You will start at index 1.
// - Pay 20 and climb two steps

const minCostClimbingStairs = (cost) => {
  let n = cost.length;
  function helper(index) {
    if (index >= n) return 0;
    let one = cost[index] + helper(index + 1);
    let two = cost[index] + helper(index + 2);
    return Math.min(one, two);
  }
  return Math.min(helper(0), helper(1));
};
console.log(minCostClimbingStairs([10, 20, 30]));
