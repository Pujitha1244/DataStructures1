function toh(N, fromm, to, aux) {
  //Write code here
  // sample print statement below
  //console.log("move disk " + 1 + " from rod " + 1 + " to rod " + 2);
  //in the above statement consider we are moving disk 1 from rod 1 to rod 2
  //remember to return number of moves as well

  if (N === 1) {
    console.log(`Move disk from ${fromm} to ${to}`);
    stepCount++;
    return;
  }
  toh(N - 1, fromm, aux, to);
  console.log(`Move disk from ${fromm} to ${to}`);
  stepCount++;
  toh(N - 1, aux, to, fromm);
}

const numberOfDisks = 4;
toh(numberOfDisks, "A", "C", "B");
console.log(`Total steps: ${stepCount}`);
