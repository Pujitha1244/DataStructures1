class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var inorderTraversal = function (root) {
  //Write code here
  if (!root) return null;

  let res = [];
  let stack = [];
  let curr = this.root;
  while (curr || stack.length > 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    res.push(curr);
    curr = curr.right;
  }
};
