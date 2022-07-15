// Maximum Depth of Binary Tree.
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from theroot node down to the farthest leaf node.
// Example 1:
//  Input: root = [3,9,20,null,null,15,7]
//  Output: 3
// Example 2:
//  Input: root = [1,null,2]
//  Output: 2

function calculateTreeHeight(root){
    if (root === null){
      return 0;
    }
    let leftHeight = calculateTreeHeight(root.left);
    let rightHeight = calculateTreeHeight(root.right);
    if (leftHeight > rightHeight){
      return leftHeight + 1;
    } else {
      return rightHeight + 1;
    }
}

class TreeNode{
    constructor(value){
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function createTree(arr){
    return insertIntoTree(0,arr);
  }
  
  function insertIntoTree(i,arr){
    let curr = null;
    if(i < arr.length){
      curr = new TreeNode(arr[i]);
      curr.left = insertIntoTree((2*i)+1, arr);
      curr.right = insertIntoTree((2*i)+2, arr);
    }
    return curr;
  }
  
  function preorder(root){
    if (root !== null){
      process.stdout.write(root.value.toString() + ' ');
      preorder(root.left);
      preorder(root.right);
    }
  }

//Test code input is 'root'
let inputRoot = createTree(root);
console.log(calculateTreeHeight(inputRoot));