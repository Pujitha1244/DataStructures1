// Question 2:Reverse Polish Notation

// Evaluate the value of an arithmetic expression in Reverse Polish Notation(See example).
// Valid operators are +, -, *, and /. Note that division between two integers should truncate toward zero.
// It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result,
// and there will not be any division by zero operation. The Input is an array of strings where each element is either a valid operator or an integer.
// E.g.[“1”,”2”,”+”]

function reversePolishNotation(tokens) {
  const stack = [];
  const validOperator = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
    "*": (n1, n2) => n1 * n2,
    "/": (n1, n2) => Math.trunc(n1 / n2),
  };
  for (let token of tokens) {
    if (validOperator[token]) {
      let n2 = stack.pop();
      let n1 = stack.pop();
      let result = validOperator[token](n1, n2);
      stack.push(result);
    } else {
      stack.push(parseInt(token));
    }
  }
  return stack;
}

console.log(reversePolishNotation(["4", 13, "5", "/", "+"]));
