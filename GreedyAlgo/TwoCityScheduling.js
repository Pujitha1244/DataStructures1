function twoCityScheduling(costs) {
  costs.sort((a, b) => (a[0] - a[1]) - (b[0] + b[1]));
  console.log('costs', costs)
  let totalCost = 0;
  let n = costs.length / 2;
  for (let i = 0; i < costs.length; i++) {
    if (i < n) {
      totalCost += costs[i][0];
    } else {
      totalCost += costs[i][1];
    }
  }
  return totalCost;
}
let costs = [
  [10, 20],
  [30, 200],
  [50, 50],
  [30, 60],
];

console.log(twoCityScheduling(costs));
