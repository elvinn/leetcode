/**
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst/
 *
 * Type: Tree
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(logn)
 */

import test from 'ava'

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = (root, k) => {
  const stack = []
  let node = root
  while (true) {
    if (node) {
      stack.push(node)
      node = node.left
      continue
    }

    node = stack.pop()
    if (--k === 0) {
      return node.val
    }

    node = node.right
  }
}

function main () {
  test('No test for tree problems', t => {
    t.is(typeof kthSmallest, 'function')
  })
}

main()
