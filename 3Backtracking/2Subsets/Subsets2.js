// Given an integer array nums that may contain duplicates, return all possible

// subsets

// (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// Example :

// nums = [1,3,3]

// Output =

// [

// [],

// [1],

// [3],

// [1,3],

// [3,3],

// [1,3,3]

// ]

const subsets = (num) => {
  let res = [];
  let set = new Set();
  num.sort((a, b) => a - b);

  function helper(i, subset) {
    if (i === num.length) {
      const subsetStr = JSON.stringify(subset);
      console.log("subsetStr", subsetStr);
      console.log("subset", subset);
      console.log("set", set);
      if (!set.has(subsetStr)) {
        res.push([...subset]);
        set.add(subsetStr);
        return;
      } else {
        return;
      }
    }
    helper(i + 1, subset);
    subset.push(num[i]);
    helper(i + 1, subset);
    subset.pop();
  }
  helper(0, []);
  return res;
};

console.log(subsets([1, 1, 3]));
