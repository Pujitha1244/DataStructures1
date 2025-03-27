function minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const memo = Array.from({ length: m }, () => Array(n).fill(-1));

    function helper(i, j) {
        if (i === m) return n - j; // Insert remaining chars of word2
        if (j === n) return m - i; // Delete remaining chars of word1
        if (memo[i][j] !== -1) return memo[i][j]; // Return cached result

        if (word1[i] === word2[j]) {
            memo[i][j] = helper(i + 1, j + 1); // No operation needed
        } else {
            const insert = 1 + helper(i, j + 1); // Insert word2[j]
            const del = 1 + helper(i + 1, j); // Delete word1[i]
            const replace = 1 + helper(i + 1, j + 1); // Replace word1[i] with word2[j]
            memo[i][j] = Math.min(insert, del, replace);
        }
        return memo[i][j];
    }
    return helper(0, 0);
}

console.log(minDistance("hodse", "dos")); // Output: 3