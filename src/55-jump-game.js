/**
 * https://leetcode.com/problems/jump-game/
 *
 * Type: Dynamic Programming
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = nums => {
  let maxIndex = 0
  for (let i = 0; i < nums.length - 1; i++) {
    const val = nums[i]
    maxIndex = Math.max(i + val, maxIndex)
    if (maxIndex === i) {
      return false
    }
  }

  return true
}

function main () {
  const testList = [
    {
      testData: [2, 3, 1, 1, 4],
      result: true
    },
    {
      testData: [3, 2, 1, 0, 4],
      result: false
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(canJump(testData), result)
    })
  }
}

main()
