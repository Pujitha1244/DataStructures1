// var kthGrammar = function(n, k) {
//     if (n === 1) {
//         return 0;
//     }
//     let length = Math.pow(2, n - 1);
//     let mid = length / 2;
//     if (k <= mid) {
//         return kthGrammar(n - 1, k);
//     } else {
//         return 1 - kthGrammar(n - 1, k - mid);
//     }
// };

// console.log(kthGrammar(3,3))
const kthGrammer = (n, k) => {
  if (n === 1) return 0;
  let length = Math.pow(2, n - 1);
  let mid = length / 2;
  if (k <= mid) {
    return kthGrammer(n - 1, k);
  } else {
    return 1 - kthGrammer(n - 1, k - mid);
  }
};
console.log(kthGrammer(4,8))

