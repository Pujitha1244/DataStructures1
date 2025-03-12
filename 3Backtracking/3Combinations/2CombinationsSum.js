// Question 2: Combinations Sum 1: Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations
// in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency

// of at least one of the chosen numbers is different.

const combinationSum = (candidates, target) => {
  let res = [];
  function helper(index, curr, currSum) {
    if (currSum > target) {
      return;
    }
    if (currSum === target) {
      res.push([...curr]);
      return;
    }
    for (let j = index; j < candidates.length; j++) {
      curr.push(candidates[j]);
      helper(j, curr, currSum + candidates[j]);
      curr.pop();
    }
  }
  helper(0, [], 0);
  return res;
};

console.log(combinationSum([2, 3, 4, 5], 7));
