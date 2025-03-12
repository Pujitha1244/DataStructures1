// function towerOfHanoi(n, fromRod, toRod, auxRod) {
//     if (n === 1) {
//         console.log(`adsMove disk 1 from rod ${fromRod} to rod ${toRod}`);
//         return;
//     }
//     towerOfHanoi(n - 1, fromRod, auxRod, toRod);
//     console.log(`Move disk ${n} from rod ${fromRod} to rod ${toRod}`);
//     towerOfHanoi(n - 1, auxRod, toRod, fromRod);
// }

// // Example usage:
// const numberOfDisks = 3;
// towerOfHanoi(numberOfDisks, 'A', 'C', 'B');

// let stepCount = 0;
// function towerOfHanoi(n, fromRod, toRod, auxRod) {
//   if (n === 1) {
//     console.log(`move desk from ${fromRod} to ${toRod}`);
//     stepCount++;
//   }
//   if (n === 2) {
//     console.log(`move desk from ${fromRod} to ${auxRod}`);
//     stepCount++;
//     console.log(`move desk from ${fromRod} to ${toRod}`);
//     stepCount++;
//     console.log(`move desk from ${auxRod} to ${toRod}`);
//     stepCount++;
//   }
//   if (n > 2) {
//     towerOfHanoi(n - 1, fromRod, auxRod, toRod);
//     towerOfHanoi(1, fromRod, toRod, auxRod);
//     towerOfHanoi(n - 1, auxRod, toRod, fromRod);
//   }
// }

// // Example usage:
// const numberOfDisks = 4;
// towerOfHanoi(numberOfDisks, "A", "C", "B");
// console.log(`Total steps: ${stepCount}`);



let stepCount = 0;

function towerOfHanoi(n, fromRod, toRod, auxRod) {
  if (n === 1) {
    console.log(`Move disk from ${fromRod} to ${toRod}`);
    stepCount++;
    return;
  }
  towerOfHanoi(n - 1, fromRod, auxRod, toRod);
  console.log(`Move disk from ${fromRod} to ${toRod}`);
  stepCount++;
  towerOfHanoi(n - 1, auxRod, toRod, fromRod);
}

// Example usage:
const numberOfDisks = 4;
towerOfHanoi(numberOfDisks, "A", "C", "B");
console.log(`Total steps: ${stepCount}`);
