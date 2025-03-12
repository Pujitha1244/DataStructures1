// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the 
// inorder
// traversal of the same tree, construct and return the binary tree.

class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

var buildTree = function (preorder, inorder) {
  //Write code here
  if (!preorder.length || !inorder.length) return null;

  let rootValue = preorder[0];
  let root = new TreeNode(rootValue);

  let rootIndex = inorder.indexOf(rootValue);

  root.left = buildTree(
    preorder.slice(1, rootIndex + 1),
    inorder.slice(0, rootIndex)
  );
  console.log(root.left)
  root.right = buildTree(
    preorder.slice(rootIndex + 1),
    inorder.slice(rootIndex + 1)
  );

  return root;
};

console.log(buildTree([3, 9, 20, 15, 7], [9, 3, 15, 20, 7]));
