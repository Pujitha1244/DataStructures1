// Question :Traverse BST

// Write a 4 instance methods for a Binary Search Tree class to traverse the BST.

// 1. Method 1 : traverse the tree breadth first and return an array that contains all the values of the BST.

// 2. Method 2: traverse the tree depth first – In-order and return an array that contains all the values of the BST.

// 3. Method 3 : traverse the tree depth first – Pre-order and return an array that contains all the values of the BST.

// 4. Method 4 : traverse the tree depth first – Post-order and return an array that contains all the values of the BST.

//             20
//           /    \
//        6         35
//     /    \      /    \
//    3      8    27      55
//  /  \         /  \      \
// 1    3       25  29       60

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      //checking if root is null
      this.root = node;
      return this;
    }
    let tree = this.root;
    while (true) {
      if (value < tree.value) {
        // move Left
        if (!tree.left) {
          tree.left = node;
          return this;
        }
        tree = tree.left;
      } else {
        // move right
        if (!tree.right) {
          tree.right = node;
          return this;
        }
        tree = tree.right;
      }
    }
  }
  find(value) {
    if (!this.root) return false;
    let tree = this.root;
    while (tree) {
      if (value < tree.value) {
        tree = tree.left;
      } else if (value > tree.value) {
        tree = tree.right;
      } else if (value === tree.value) {
        return tree;
      }
    }
    return false;
  }
  remove(value, current = this.root, parent = null) {
    if (!this.root) return false;
    while (current) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        // Found the node to be deleted
        // node to be deleted has 2 children
        if (current.left !== null && current.right !== null) {
          current.value = this.getMin(current.right);
          this.remove(current.value, current.right, current);
        }
        // deleating root node
        else if (parent === null) {
          if (current.left !== null) {
            current.value = current.left.value;
            current.left = current.left.left;
            current.right = current.left.right;
          } else if (current.right !== null) {
            current.value = current.right.value;
            current.left = current.right.left;
            current.right = current.right.right;
          } else {
            // single node
            this.root = null;
          }
        } else if (current === parent.left) {
          parent.left = current.left !== null ? current.left : current.right;
        } else if (current === parent.right) {
          parent.right = current.left !== null ? current.left : current.right;
        }
        break;
      }
    }
    return this;
  }

  getMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  dfsInorder() {
    if (this.root === null) return [];
    const array = [];
    let current = this.root;

    function trav(node) {
      if (node.left) {
        trav(node.left);
      }
      array.push(node);
      if (node.right) {
        trav(node.right);
      }
    }
    trav(current);
    return array;
  }

  dfsPreOrder() {
    if (this.root === null) return [];
    const array = [];
    let current = this.root;

    function trav(node) {
      array.push(node);
      if (node.left) {
        trav(node.left);
      }
      if (node.right) {
        trav(node.right);
      }
    }
    trav(current);
    return array;
  }

  dfsPostOrder() {
    if (this.root === null) return [];
    const array = [];
    let current = this.root;

    function trav(node) {
      if (node.left) {
        trav(node.left);
      }
      if (node.right) {
        trav(node.right);
      }
      array.push(node);
    }
    trav(current);
    return array;
  }
}

let bst = new BinarySearchTree();
bst.insert(20);
bst.insert(6);
bst.insert(35);
bst.insert(3);
bst.insert(8);
bst.insert(27);
bst.insert(55);
bst.insert(1);
bst.insert(3);
bst.insert(25);
bst.insert(29);
bst.insert(60);
bst.find(1);
// bst.remove(27);

// console.log(bst);
// console.log(bst.dfsInorder())
console.log(bst.dfsPreOrder())
// console.log(bst.dfsPostOrder())

