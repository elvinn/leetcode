/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 *
 * Type: Trees
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
/**
 * recursive algorithm
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder1 = function (root) {
  if (!root) {
    return []
  }

  if (!root.left && !root.right) {
    return [[root.val]]
  }

  const leftResult = levelOrder1(root.left)
  const rightResult = levelOrder1(root.right)

  const result = [[root.val]]
  while (leftResult.length && rightResult.length) {
    const leftLayer = leftResult.shift() || []
    const rightLayer = rightResult.shift() || []
    result.push(leftLayer.concat(rightLayer))
  }

  return result.concat(leftResult, rightResult)
}

/**
 * non-recursive algorithm
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder2 = function (root) {
  if (!root) {
    return []
  }

  const result = []
  let sameLayerNodes = [root]
  while (sameLayerNodes.length) {
    const sameLayerVal = []
    const nextLayerNodes = []
    sameLayerNodes.forEach(node => {
      if (!node) {
        return
      }

      sameLayerVal.push(node.val)
      nextLayerNodes.push(node.left)
      nextLayerNodes.push(node.right)
    })

    if (sameLayerVal.length) {
      result.push(sameLayerVal)
    }
    sameLayerNodes = nextLayerNodes
  }

  return result
}

function main () {
  test('No test for trees problems', t => {
    t.is(levelOrder1(), [])
    t.is(levelOrder2(), [])
  })
}

main()
