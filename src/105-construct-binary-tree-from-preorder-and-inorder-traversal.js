/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 *
 * Type: Tree
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const buildTree = function (preorder, inorder) {
  let preIndex = 0
  const hashMap = {}
  inorder.forEach((val, index) => {
    hashMap[val] = index
  })

  const helper = (inLeft, inRight) => {
    if (inLeft === inRight) {
      return null
    }

    const val = preorder[preIndex++]
    const splitIndex = hashMap[val]

    return {
      val,
      left: helper(inLeft, splitIndex),
      right: helper(splitIndex + 1, inRight)
    }
  }

  return helper(0, inorder.length)
}

function main () {
  test('No test for tree problems', t => {
    t.is(typeof buildTree, 'function')
  })
}

main()
