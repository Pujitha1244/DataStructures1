// Question 1:
// Combinations: Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

function combinations(n, k) {
  let res = [];
  function helper(start, curr) {
    if (curr.length === k) {
      res.push([...curr]);
      return;
    }
    for (let j = start; j <= n; j++) {
      curr.push(j);
      helper(j + 1, curr);
      curr.pop();
    }
  }
  helper(1, []);
  return res
}

console.log(combinations(4, 2));
