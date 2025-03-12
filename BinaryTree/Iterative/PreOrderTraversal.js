// Given the root of a binary tree, return the preorder traversal of its nodes' values. Write the Iterative Solution.

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var preorderTraversal = function (root) {
  //Write code here
  if (!root) return [];
  let res = [];
  let stack = [root];

  while (stack.length > 0) {
    let node = stack.pop();
    res.push(node.val);
    if (node.right) {
      stack.push(node.right);
    }
    if (node.left) {
      stack.push(node.left);
    }
  }

  return res;
};
