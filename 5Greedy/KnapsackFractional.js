// Determine how to optimally fill a knapsack with a capacity of W kilograms using a list of N items, where each item is represented
// by a pair [profit, weight]. In the Fractional Knapsack problem, you can take fractions of items to maximize the total profit in the
// knapsack.(N will be greater than equal to 1 )

// Example 1:

// Given arr[] = [[70, 10], [90, 20], [150, 30]]

// W= 25

// Expected output = 145

// Example 2:

// Given arr[] = [[70, 10], [90, 20], [150, 30]]

// W= 45

// Expected output = 242.5

function fractionalKnapsack(W, arr, n) {
  const items = arr.map(([profit, weight]) => ({
    profit,
    weight,
    ratio: profit / weight,
  }));
  let remainingWeight = W;
  let totalValue = 0;
  items.sort((a, b) => b.ratio - a.ratio);
  console.log(items);
  for (let i = 0; i < arr.length; i++) {
    if (remainingWeight >= items[i].weight) {
      totalValue += items[i].profit;
      remainingWeight -= items[i].weight;
    } else {
      totalValue += (items[i].profit * remainingWeight) / items[i].weight;
      break;
    }
  }
  return totalValue;
}

const arr1 = [
  [70, 10],
  [90, 20],
  [150, 30],
];
const W1 = 25;
const n1 = arr1.length;
console.log(fractionalKnapsack(W1, arr1, n1));
