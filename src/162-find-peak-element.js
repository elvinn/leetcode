/**
 * https://leetcode.com/problems/find-peak-element/
 *
 * Type: Searching
 * Difficulty: Medium
 * Time Complexity: O()
 * Space Complexity: O()
 */

import test from 'ava'

/**
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement1 = nums => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      return i
    }
  }

  return nums.length - 1
}

/**
 * Time Complexity: O(log2(n))
 * Space Complexity: O(1)
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement2 = nums => {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] > nums[mid + 1]) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

function main () {
  const testList = [
    {
      testData: [1, 2, 3, 1],
      result: 2
    }
  ]

  for (const { testData, result } of testList) {
    test(JSON.stringify(testData), t => {
      t.is(findPeakElement1(testData), result)
      t.is(findPeakElement2(testData), result)
    })
  }
}

main()
