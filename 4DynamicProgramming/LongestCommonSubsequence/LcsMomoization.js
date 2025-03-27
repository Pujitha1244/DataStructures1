// Given two strings text1 and text2, return the length of their longest common subsequence.
// If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters
// (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".

// A common subsequence of two strings is a subsequence that is common to both strings.

var LongestCommonSubsequence = function (text1, text2) {
  const n = text1.length;
  const m = text2.length;
  const dp = Array.from({ length: n }, () => Array(m).fill(-1));

  function helper(index1, index2) {
    if (index1 >= n || index2 >= m) {
      return 0;
    }
    if (dp[index1][index2] !== -1) {
      return dp[index1][index2];
    }
    if (text1[index1] === text2[index2]) {
      dp[index1][index2] = 1 + helper(index1 + 1, index2 + 1);
    } else {
      dp[index1][index2] = Math.max(
        helper(index1 + 1, index2),
        helper(index1, index2 + 1)
      );
    }
    return dp[index1][index2];
  }
  return helper(0, 0);
};

console.log(LongestCommonSubsequence("abcdef", "cncdef"));
