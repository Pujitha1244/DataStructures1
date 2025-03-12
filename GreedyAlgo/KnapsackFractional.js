// function knapsackGreedy(weights, values, capacity) {
//   let n = weights.length;
//   let items = [];

//   // Create an array of items with value-to-weight ratio
//   for (let i = 0; i < n; i++) {
//     items.push({
//       weight: weights[i],
//       value: values[i],
//       ratio: values[i] / weights[i],
//     });
//   }

//   // Sort items by value-to-weight ratio in descending order
//   items.sort((a, b) => b.ratio - a.ratio);
//   console.log(items);
//   let totalValue = 0;
//   let remainingCapacity = capacity;

//   for (let i = 0; i < n; i++) {
//     if (items[i].weight <= remainingCapacity) {
//       // Take the whole item
//       totalValue += items[i].value;
//       console.log(totalValue);
//       remainingCapacity -= items[i].weight;
//     } else {
//       // Take the fraction of the item that fits
//       totalValue += items[i].value * (remainingCapacity / items[i].weight);
//       break;
//     }
//   }

//   return totalValue;
// }

// // Example usage
// let weights = [10, 20, 30];
// let values = [60, 100, 120];
// let capacity = 50;

// console.log(knapsackGreedy(weights, values, capacity)); // Output: 240

function knapsackGreedy(weights, values, capacity) {
  let n = weights.length;
  let items = [];
  for (let i = 0; i < n; i++) {
    items.push({
      weight: weights[i],
      value: values[i],
      ratio: values[i] / weights[i],
    });
  }
  items.sort((a, b) => b.ratio - a.ratio);
  console.log(items);
  let remainingWeight = capacity;
  let totalValue = 0;
  for (let i = 0; i < n; i++) {
    if (items[i].weight <= remainingWeight) {
      totalValue += items[i].value;
      remainingWeight -= items[i].weight;
    } else {
      totalValue += items[i].value * remainingWeight / items[i].weight;
      break;
    }
    
  }
  return totalValue;
}

// Example usage
let weights = [10, 20, 30];
let values = [60, 100, 120];
let capacity = 50;

console.log(knapsackGreedy(weights, values, capacity)); // Output: 240
