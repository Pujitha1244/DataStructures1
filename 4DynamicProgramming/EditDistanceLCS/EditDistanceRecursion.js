// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// •Insert a character

// •Delete a character

// •Replace a character

// Example: 

// Input: word1 = "hodse", word2 = "dos"
// Output: 3
// Explanation: 
// hodse -> dodse (replace 'h' with 'd')
// dodse -> dose (remove 'd')
// dose -> dos (remove 'e')

function minDistance(word1, word2) {
    function helper(i, j) {
        if (i === word1.length) return word2.length - j; // Insert remaining chars of word2
        if (j === word2.length) return word1.length - i; // Delete remaining chars of word1

        if (word1[i] === word2[j]) {
            return helper(i + 1, j + 1); // No operation needed
        } else {
            const insert = 1 + helper(i, j + 1); // Insert word2[j] into word1
            const del = 1 + helper(i + 1, j); // Delete word1[i]
            const replace = 1 + helper(i + 1, j + 1); // Replace word1[i] with word2[j]
            return Math.min(insert, del, replace);
        }
    }
    return helper(0, 0);
}

console.log(minDistance("hodse", "dos"));