var fib = function (n) {
  console.log("n", n);
  if (n <= 1) return n;
  console.log("n1", n);
  return fib(n - 1) + fib(n - 2);
};
console.log(fib(5));
