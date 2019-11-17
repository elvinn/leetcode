/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 *
 * Type: Linked List
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

import test from 'ava'

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function helper (root, lower, upper) {
  if (root === null) {
    return true
  }

  const val = root.val

  if (upper !== null && val >= upper) {
    return false
  }

  if (lower !== null && val <= lower) {
    return false
  }

  if (!helper(root.left, lower, val)) {
    return false
  }

  if (!helper(root.right, val, upper)) {
    return false
  }

  return true
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return helper(root, null, null)
}

function main () {
  test('No test for linked list problems', t => {
    t.is(isValidBST(), false)
  })
}

main()
