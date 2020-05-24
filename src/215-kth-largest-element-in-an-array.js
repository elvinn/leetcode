/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 *
 * Type: Searching
 * Difficulty: Medium
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * QuickSort Algorithm
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = (nums, k) => {
  k = nums.length - k

  const quickSort = (start, end) => {
    const partitionIndex = partition(start, end)

    if (partitionIndex === k) {
      return nums[partitionIndex]
    }

    if (partitionIndex < k) {
      return quickSort(partitionIndex + 1, end)
    }

    if (partitionIndex > k) {
      return quickSort(start, partitionIndex - 1)
    }
  }

  const partition = (start, end) => {
    const pivot = nums[start]
    let i = start
    let j = end
    while (i <= j) {
      while (i <= j && nums[i] <= pivot) {
        i++
      }
      while (i <= j && nums[j] >= pivot) {
        j--
      }

      if (i <= j) {
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }

    ;[nums[start], nums[j]] = [nums[j], nums[start]]

    return j
  }

  return quickSort(0, nums.length - 1)
}

function main () {
  const testList = [
    {
      testData: [3, 2, 1, 5, 6, 4],
      k: 2,
      result: 5
    },
    {
      testData: [3, 2, 3, 1, 2, 4, 5, 5, 6],
      k: 4,
      result: 4
    }
  ]

  for (const { testData, k, result } of testList) {
    test(JSON.stringify(testData) + k, t => {
      t.is(findKthLargest(testData, k), result)
    })
  }
}

main()
