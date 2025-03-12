var combine = function (n, k) {
  let output = [];
  function helper(start, curr) {
    if (curr.length === k) {
      
      output.push([...curr]);
      return;
    }
    for (let j = start; j <= n; j++) {
      curr.push(j);
      // console.log("curr", curr);
      // console.log("j: ", j);
      helper(j + 1, curr);

      curr.pop();
      // console.log("curr pop: ", curr);

    }
  }
  helper(1, []);
  return output;
};

console.log(combine(4, 3));
