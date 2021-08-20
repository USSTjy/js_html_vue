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

var isValidBST = function (root) {
	return validBST(root, null, null);
};

var validBST = function (root, min, max) {
	if (root === null) return true;
	if (min !== null && root.val <= min.val) return false;
	if (max !== null && root.val >= max.val) return false;
	return validBST(root.left, min, root) && validBST(root.right, root, max);
};

module.exports = {
	isValidBST,
};
