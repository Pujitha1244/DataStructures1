const fibonacci = (n) => {
  if (n <= 1) return n;
  let prev = 0;
  let curr = 1;
  let counter = 2;
  while (counter <= n) {
    let next = prev + curr;
    prev = curr;
    curr = next;
    counter += 1;
  }
  return curr;
};

console.log(fibonacci(3));
