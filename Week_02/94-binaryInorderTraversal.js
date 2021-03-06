/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let values = [];
    traversal(root, values);
    return values;
    /*if (!root) {
        return [];
    }
    return [
        ...inorderTraversal(root.left),
        root.val,
        ...inorderTraversal(root.right)
    ];*/
};

var traversal = function(root, values) {
    if (!root) {
        return;
    }
    traversal(root.left, values);
    values.push(root.val);
    traversal(root.right, values);
    return values;
};