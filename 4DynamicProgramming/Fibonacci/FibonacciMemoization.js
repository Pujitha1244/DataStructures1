// Memoization

function fibonacci(n) {
  let memo = { 0: 0, 1: 1 };

  function calculatefib(num) {
    if (memo[num] !== undefined) {
      return memo[num];
    } else {
      memo[num] = calculatefib(num - 1) + calculatefib(num - 2);
      return memo[num];
    }
  }
  return calculatefib(n);
}

console.log(fibonacci(3))
