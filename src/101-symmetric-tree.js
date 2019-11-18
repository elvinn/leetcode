/**
 * https://leetcode.com/problems/symmetric-tree/
 *
 * Type: Trees
 * Difficulty: Easy
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

function helper (leftNode, rightNode) {
  if (!leftNode && !rightNode) {
    return true
  }

  if (!leftNode || !rightNode) {
    return false
  }

  return (
    leftNode.val === rightNode.val &&
    helper(leftNode.left, rightNode.right) &&
    helper(leftNode.right, rightNode.left)
  )
}

/**
 * recursive algorithm
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric1 = function (root) {
  if (!root) {
    return true
  }

  return helper(root.left, root.right)
}

/**
 * non-recursive algorithm
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric2 = function (root) {
  if (!root) {
    return true
  }

  const queue = [root.left, root.right]

  while (queue.length) {
    const leftNode = queue.shift()
    const rightNode = queue.shift()

    if (!leftNode && !rightNode) {
      continue
    }

    if (!leftNode || !rightNode || leftNode.val !== rightNode.val) {
      return false
    }

    queue.push(leftNode.left)
    queue.push(rightNode.right)
    queue.push(leftNode.right)
    queue.push(rightNode.left)
  }

  return true
}

function main () {
  test('No test for trees problems', t => {
    t.is(isSymmetric1(), true)
    t.is(isSymmetric2(), true)
  })
}

main()
