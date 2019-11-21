/**
 * https://leetcode.com/problems/merge-sorted-array/
 *
 * Type: Sorting And Searching
 * Difficulty: Easy
 * Time Complexity: O(m + n)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  while (m > 0 && n > 0) {
    const val1 = nums1[m - 1]
    const val2 = nums2[n - 1]

    if (val1 > val2) {
      nums1[m + n - 1] = val1
      m -= 1
    } else {
      nums1[m + n - 1] = val2
      n -= 1
    }
  }

  while (n > 0) {
    nums1[n - 1] = nums2[n - 1]
    n -= 1
  }
}

function main () {
  const testList = [
    {
      nums1: [],
      m: 0,
      nums2: [],
      n: 0,
      result: []
    },
    {
      nums1: [1, 2, 3, 0, 0, 0],
      m: 3,
      nums2: [2, 5, 6],
      n: 3,
      result: [1, 2, 2, 3, 5, 6]
    },
    {
      nums1: [-1, 0, 0, 3, 3, 3, 0, 0, 0],
      m: 6,
      nums2: [1, 2, 2],
      n: 3,
      result: [-1, 0, 0, 1, 2, 2, 3, 3, 3]
    }
  ]

  for (const { nums1, m, nums2, n, result } of testList) {
    test(JSON.stringify({ nums1, nums2 }), t => {
      merge(nums1, m, nums2, n)
      t.deepEqual(nums1, result)
    })
  }
}

main()
