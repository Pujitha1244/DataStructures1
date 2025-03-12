// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and
// postorder is the postorder traversal of the same tree, construct and return the binary tree.

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var buildTree = function (inorder, postorder) {
  //Write code here
  if (!inorder.length || !postorder.length) return null;
  let rootValue = postorder.pop();
  let root = new TreeNode(rootValue);
  let rootIndex = inorder.indexOf(rootValue);

  root.right = buildTree(inorder.slice(rootIndex + 1), postorder);
  root.left = buildTree(inorder.slice(0, rootIndex), postorder);
  return root;
};

console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
