/**
 * https://leetcode.com/problems/binary-tree-inorder-traversal/
 *
 * Type: Trees
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(lgn)
 */

import test from 'ava'

/**
 * Recursive Method
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal1 = root => {
  const result = []
  helper(root, result)
  return result
}

const helper = (node, arr) => {
  if (!node) {
    return
  }

  helper(node.left, arr)
  arr.push(node.val)
  helper(node.right, arr)
}

/**
 * Iterative Method
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal2 = root => {
  const stack = []
  const result = []
  let node = root

  while (node || stack.length) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      result.push(node.val)
      node = node.right
    }
  }

  return result
}

function main () {
  test('No test for linked list problems', t => {
    t.is(typeof inorderTraversal1, 'function')
    t.is(typeof inorderTraversal2, 'function')
  })
}

main()
