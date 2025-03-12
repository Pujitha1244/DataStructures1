function canJump(nums) {
  let n = nums.length;
  let maxIndex = 0;
  for (let i = 0; i < n; i++) {
    console.log("i,maxIndex", i, maxIndex);
    if (i > maxIndex) return false;
    // console.log("i + nums[i]", i + nums[i]);
    maxIndex = Math.max(maxIndex, i + nums[i]);
    if (maxIndex >= n - 1) return true;
  }
  return false;
}

console.log(canJump([1, 2, 4, 1, 1, 0, 2, 5]));
