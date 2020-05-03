/**
 * https://leetcode.com/problems/sort-colors/
 *
 * Type: Sorting
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = nums => {
  if (!nums || !nums.length) {
    return
  }

  const swap = (i, j) => {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }

  let start = 0
  let end = nums.length - 1
  for (let i = 0; i <= end; i++) {
    if (nums[i] === 0) {
      swap(i, start++)
    } else if (nums[i] === 2) {
      swap(i--, end--)
    }
  }
}

function main () {
  const testList = [
    {
      testData: [2, 0, 1],
      result: [0, 1, 2]
    },
    {
      testData: [2, 0, 2, 1, 1, 0],
      result: [0, 0, 1, 1, 2, 2]
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      sortColors(testData)
      t.deepEqual(testData, result)
    })
  }
}

main()
