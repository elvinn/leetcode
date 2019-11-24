/**
 * https://leetcode.com/problems/maximum-subarray/
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
var maxSubArray = function (nums) {
  if (!nums.length) {
    return 0
  }
  let maxSum = Number.MIN_SAFE_INTEGER
  let subSum = 0

  for (const num of nums) {
    subSum += num
    maxSum = Math.max(maxSum, subSum)
    subSum = Math.max(subSum, 0)
  }

  return maxSum
}

function main () {
  const testList = [
    {
      testData: [-1],
      result: -1
    },
    {
      testData: [-2, -1],
      result: -1
    },
    {
      testData: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
      result: 6
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(maxSubArray(testData), result)
    })
  }
}

main()
