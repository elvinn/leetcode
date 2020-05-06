/**
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 *
 * Type: Searching
 * Difficulty: Medium
 * Time Complexity: O(log2(n))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = (nums, target) => {
  if (!nums || !nums.length) {
    return [-1, -1]
  }

  const helper = mid => {
    let left = mid
    let right = mid
    while (nums[left] === target) {
      left -= 1
    }
    while (nums[right] === target) {
      right += 1
    }

    return [left + 1, right - 1]
  }

  let left = 0
  let right = nums.length - 1
  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return helper(mid)
    }
    if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid - 1
    }
  }

  if (nums[left] === target && left === right) {
    return [left, right]
  }

  return [-1, -1]
}

function main () {
  const testList = [
    {
      testData: [1],
      target: 1,
      result: [0, 0]
    },
    {
      testData: [5, 7, 7, 8, 8, 10],
      target: 8,
      result: [3, 4]
    },
    {
      testData: [5, 7, 7, 8, 8, 10],
      target: 6,
      result: [-1, -1]
    }
  ]

  for (const { testData, target, result } of testList) {
    test(JSON.stringify(testData) + target, t => {
      t.deepEqual(searchRange(testData, target), result)
    })
  }
}

main()
