// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    if (this.root === null) {
      this.root = new TreeNode(val)
    } else if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val)
      } else if (currentNode.left !== null) {
        const nextNodetoTravel = currentNode.left
        this.insert(val, nextNodetoTravel)
      }
    } else if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = new TreeNode(val)
      } else if (currentNode.right !== null) {
        const nextNodetoTravel = currentNode.right
        this.insert(val, nextNodetoTravel)
      }
    }

  }

  search(val, currentNode = this.root) {
    if (currentNode === null) return false;
    else if (currentNode.val === val) {
      return true;
    } 
    if (val < currentNode.val) {
      return this.search(val, currentNode.left);
    } else if (val > currentNode.val) {
      return this.search(val, currentNode.right);
    }
    
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
    if (!currentNode) return;
    console.log(currentNode.val);
    this.preOrderTraversal(currentNode.left);
    this.preOrderTraversal(currentNode.right);
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // your code here
}
}

module.exports = { BinarySearchTree, TreeNode };
