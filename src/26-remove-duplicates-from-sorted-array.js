/**
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 *
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums = []) {
  let diff = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      diff += 1
    } else {
      nums[i - diff] = nums[i]
    }
  }

  return nums.length - diff
}

function main () {
  const testList = [
    {
      testData: [1, 1, 2],
      result: [1, 2]
    },
    {
      testData: [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
      result: [0, 1, 2, 3, 4]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(removeDuplicates(testData), result.length)
      for (let i = 0; i < result.length; i++) {
        t.is(testData[i], result[i])
      }
    })
  }
}

main()
