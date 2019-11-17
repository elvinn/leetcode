/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 *
 * Type: Trees
 * Difficulty: Easy
 * Time Complexity: O(nlogn)
 * Space Complexity: O()
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
 * recursive alalgorithm
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth1 = function (root) {
  if (!root) {
    return 0
  }

  return Math.max(maxDepth1(root.left), maxDepth1(root.right)) + 1
}

/**
 * non-recursive algorithm BFS
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth2 = function (root) {
  if (!root) {
    return 0
  }

  const queue = [root, null]
  let result = 0
  while (queue.length) {
    const head = queue.shift()
    if (head === null) {
      result += 1
      if (queue.length) {
        queue.push(null)
      }

      continue
    }

    if (head.left) {
      queue.push(head.left)
    }
    if (head.right) {
      queue.push(head.right)
    }
  }

  return result
}

function main () {
  test('No test for trees problems', t => {
    t.is(maxDepth1(), 0)
    t.is(maxDepth2(), 0)
  })
}

main()
