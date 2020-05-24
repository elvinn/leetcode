/**
 * https://leetcode.com/problems/search-in-rotated-sorted-array/
 *
 * Type: Searching
 * Difficulty: Medium
 * Time Complexity: O(log(n))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
  if (!nums.length) {
    return -1
  }
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const leftVal = nums[left]
    const midVal = nums[mid]
    const rightVal = nums[right]

    if (target === midVal) {
      return mid
    }

    if (target >= leftVal && target < midVal) {
      right = mid - 1
    } else if (target > midVal && target <= rightVal) {
      left = mid + 1
    } else if (leftVal <= midVal) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return -1
}

function main () {
  const testList = [
    {
      testData: [4, 5, 6, 7, 0, 1, 2],
      target: 0,
      result: 4
    },
    {
      testData: [4, 5, 6, 7, 0, 1, 2],
      target: 3,
      result: -1
    },
    {
      testData: [3, 1],
      target: 1,
      result: 1
    }
  ]

  for (const { testData, target, result } of testList) {
    test(JSON.stringify(testData) + target, t => {
      t.is(search(testData, target), result)
    })
  }
}

main()
