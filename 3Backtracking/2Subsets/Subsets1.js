// Power Set - Given an integer array of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

const subsets = (num) => {
  let res = [];
  function helper(i, subset) {
    if (i === num.length) {
      res.push([...subset]);
      return;
    }
    helper(i + 1, subset);
    subset.push(num[i]);
    helper(i + 1, subset);
    subset.pop();
  }
  helper(0, []);
  return res;
};

console.log(subsets([1,2,3]));
