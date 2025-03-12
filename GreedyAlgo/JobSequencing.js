// Job Sequencing with Dead Lines
function jobSequencing(jobs) {
  // Sort jobs by decreasing order of profit
  jobs.sort((a, b) => b.profit - a.profit);
  console.log("jobs", jobs);

  let n = jobs.length;
  let result = Array(n).fill(false); // To keep track of free time slots
  console.log("result", result);
  let jobSequence = Array(n).fill(null); // To store result (sequence of jobs)
  let totalProfit = 0;
  console.log("jobSequence", jobSequence);
  // Iterate through all given jobs
  for (let i = 0; i < n; i++) {
    // Find a free slot for this job (starting from the last possible slot)
    console.log("Math.min(n, jobs[i].deadline", Math.min(n, jobs[i].deadline));
    for (let j = Math.min(n, jobs[i].deadline) - 1; j >= 0; j--) {
      // If the slot is free
      if (!result[j]) {
        result[j] = true;
        jobSequence[j] = jobs[i].id;
        totalProfit += jobs[i].profit;
        break;
      }
    }
  }

  return { jobSequence, totalProfit };
}

// Example usage
let jobs = [
  { id: "a", deadline: 2, profit: 100 },
  { id: "b", deadline: 1, profit: 19 },
  { id: "c", deadline: 2, profit: 27 },
  { id: "d", deadline: 1, profit: 25 },
  { id: "e", deadline: 3, profit: 15 },
];

let result = jobSequencing(jobs);
console.log("Job Sequence:", result.jobSequence); // Output: Job Sequence: [ 'c', 'a', 'e' ]
console.log("Total Profit:", result.totalProfit); // Output: Total Profit: 142
