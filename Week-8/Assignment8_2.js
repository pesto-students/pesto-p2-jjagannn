// Validate a Binary TreeGiven the root of a binary tree, 
// determine if it is a valid binary search tree (BST).
// A valid BST is defined as follows:
// The left subtree of a node contains only nodes with keys less than the node's key.
// Theright subtree of a node contains only nodes with keys greater than the node's key. 
// Both the left and right subtrees must also be binary search trees.
//  Example 1:
//     Input: root = [2,1,3]Output: true
//  Example 2:
//     Input: root = [5,1,4,null,null,3,6]Output: falseExplanation: The root node's value is 5 but its right child's value is 4.


class TreeNode{
    constructor(value){
      this.value = (value === undefined ? 0 : value);
      this.left = null;
      this.right = null;
    }
  }
  
  function isValidBST(root){
      let startNode = insertIntoTree(0,root);
      let result = null;
      result = preorder(startNode);
      if (result === false){
          return false;
      }
      return true;
  }
  
  function insertIntoTree(i, arr){
      let curr = null;
      if(i < arr.length){
          curr = new TreeNode(arr[i]);
          curr.left = insertIntoTree(2*i+1, arr);
          curr.right = insertIntoTree(2*i+2, arr);
      }
      return curr;
  }
  
  
  var preorder = function(root) {
      if (root !== null){
          root.left = preorder(root.left);
          root.right = preorder(root.right);
          if ((root < root.left && root < root.right) || (root > root.left && root > root.right)){
              return false;
          }
      }
  };
  
  //Test code
  //Edge cases
  //when arr is empty
  //when leaf node has null,null
  // when leaf node has null, value
  // when leaf node has value, value