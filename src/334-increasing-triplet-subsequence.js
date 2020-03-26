/**
 * https://leetcode.com/problems/increasing-triplet-subsequence/
 *
 * Type: Array
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
  if (!nums || nums.length <= 2) {
    return false
  }

  let min1 = Number.MAX_VALUE
  let min2 = Number.MAX_VALUE
  for (const num of nums) {
    min1 = Math.min(min1, num)
    if (num > min1) {
      min2 = Math.min(min2, num)
    }

    if (num > min2) {
      return true
    }
  }

  return false
}

function main () {
  const testList = [
    {
      testData: [1, 2, 3, 4, 5],
      result: true
    },
    {
      testData: [5, 4, 3, 2, 1],
      result: false
    },
    {
      testData: [5, 1, 5, 5, 2, 5, 4],
      result: true
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(increasingTriplet(testData), result)
    })
  }
}

main()
