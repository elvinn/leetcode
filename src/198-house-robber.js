/**
 * https://leetcode.com/problems/house-robber/
 *
 * Type: Dynamic Programming
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (!nums || !nums.length) {
    return 0
  }

  if (nums.length === 1) {
    return nums[0]
  }

  let m = nums[0]
  let n = Math.max(nums[0], nums[1])
  for (let i = 2; i < nums.length; i++) {
    const temp = Math.max(m + nums[i], n)
    m = n
    n = temp
  }

  return n
}

function main () {
  const testList = [
    {
      testData: [1, 2, 3, 1],
      result: 4
    },
    {
      testData: [2, 7, 9, 3, 1],
      result: 12
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(rob(testData), result)
    })
  }
}

main()
