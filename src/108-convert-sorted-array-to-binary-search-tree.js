/**
 * https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/
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

/**
 * recursive algorithm
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (!nums || !nums.length) {
    return null
  }

  const middleIndex = Math.floor(nums.length / 2)

  const root = {
    val: nums[middleIndex],
    left: sortedArrayToBST(nums.slice(0, middleIndex)),
    right: sortedArrayToBST(nums.slice(middleIndex + 1, nums.length))
  }

  return root
}

function main () {
  test('No test for trees problems', t => {
    t.is(sortedArrayToBST(), null)
  })
}

main()
