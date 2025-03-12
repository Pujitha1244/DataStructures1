function powersum(array, power = 1) {
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += powersum(item, power + 1);
    } else {
      sum += item;
    }
  });
  return Math.pow(sum, power);
}

console.log(powersum([1, 2, [3, 4]]));
