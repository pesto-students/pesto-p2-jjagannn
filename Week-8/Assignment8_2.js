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

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */


 function isValidBST(root, min=null, max=null){
    if(root === null){
      return true; //when [] or when dealing with last node
    }
    if(min && root.val <= min.val){
      return false;
    }
    if(max && root.val >= max.val){
      return false;
    }
  
    return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
  }