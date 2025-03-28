// Coding Exercise: Two City Scheduling
// A company is planning to interview 2n people. Given the array costs where costs[i] = [aCosti, bCosti],
// the cost of flying the ith person to city a is aCosti, and the cost of flying the ith person to city b is bCosti.

// Return the minimum cost to fly every person to a city such that exactly n people arrive in each city.

var twoCitySchedCost = function (costs) {
  costs.sort((a, b) => a[0] - a[1] - (b[0] - b[1]));
  let totalcost = 0;
  let aData = costs.length / 2;
  for (let i = 0; i < costs.length; i++) {
    if (i < aData) {
      totalcost += costs[i][0];
      console.log(totalcost);
    } else {
      totalcost += costs[i][1];
    }
  }
  return totalcost;
};

console.log(twoCitySchedCost([[20, 700], [400, 50], [900, 600], [200, 150]]));
