/**
 * 103. Binary Tree Zigzag Level Order Traversal
 *
 * Type: Tree
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(n/2)
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
 * Iterative Method
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder1 = function (root) {
  if (!root) {
    return []
  }

  const result = []
  const LINE_BREAK = Symbol('LINE_BREAK')
  const nodeList = [root, LINE_BREAK]
  let fromLeftToRight = true
  let lineResult = []
  while (nodeList.length) {
    const node = nodeList.shift()
    if (node === LINE_BREAK) {
      fromLeftToRight = !fromLeftToRight
      result.push(lineResult)
      lineResult = []

      if (nodeList.length && nodeList[0] !== LINE_BREAK) {
        nodeList.push(LINE_BREAK)
      }
      continue
    }

    if (node === null) {
      continue
    }

    if (fromLeftToRight) {
      lineResult.push(node.val)
    } else {
      lineResult.unshift(node.val)
    }
    nodeList.push(node.left, node.right)
  }

  result.pop()

  return result
}

/**
 * Recursive Method
 *
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder2 = function (root) {
  const result = []
  helper(root, 0, result)

  return result
}

const helper = function (node, level, result) {
  if (!node) {
    return
  }

  if (result.length <= level) {
    result[level] = []
  }

  if (level % 2 === 1) {
    result[level].unshift(node.val)
  } else {
    result[level].push(node.val)
  }

  helper(node.left, level + 1, result)
  helper(node.right, level + 1, result)
}

function main () {
  test('No test for tree problems', t => {
    t.is(typeof zigzagLevelOrder1, 'function')
    t.is(typeof zigzagLevelOrder2, 'function')
  })
}

main()
