/**
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 *
 * Type: Searching
 * Difficulty: Hard
 * Time Complexity: O(log(m+n))
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * The problem is so hard, please read following blog:
 * https://medium.com/@hazemu/finding-the-median-of-2-sorted-arrays-in-logarithmic-time-1d3f2ecbeb46
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  // A is longer than B
  const A = nums1.length >= nums2.length ? nums1 : nums2
  const B = nums1.length >= nums2.length ? nums2 : nums1
  const m = A.length
  const n = B.length

  const isOdd = (m + n) % 2 === 1
  const halfCount = Math.ceil((m + n + 1) / 2)

  // init with minimum and maximum number of values can A contribute to get median
  let leftAIndex = Math.max(halfCount - n - 1, 0)
  let rightAIndex = halfCount - 1

  while (true) {
    const aIndex = Math.floor((leftAIndex + rightAIndex) / 2)
    let bIndex = halfCount - aIndex - 2
    bIndex = Math.max(bIndex, 0)
    bIndex = Math.min(bIndex, n - 1)

    const a1 = A[aIndex]
    const a2 = A[aIndex + 1]
    const b1 = B[bIndex]
    const b2 = B[bIndex + 1]

    if (a1 >= b1 && (typeof b2 === 'undefined' || a1 <= b2)) {
      if (isOdd) {
        return a1
      }

      const a0 = A[aIndex - 1]
      if (a0 && a0 >= b1) {
        return (a1 + a0) / 2
      }

      return (a1 + b1) / 2
    }

    if (b1 >= a1 && (typeof a2 === 'undefined' || b1 <= a2)) {
      if (isOdd) {
        return b1
      }

      const b0 = B[bIndex - 1]
      if (b0 && b0 >= a1) {
        return (b1 + b0) / 2
      }

      return (a1 + b1) / 2
    }

    if (typeof b2 === 'number' && a1 > b2) {
      rightAIndex = aIndex
      continue
    }

    if (typeof a2 === 'number' && b1 > a2) {
      if (leftAIndex === aIndex) {
        return isOdd
          ? A[halfCount - 1]
          : (A[halfCount - 2] + A[halfCount - 1]) / 2
      }
      leftAIndex = aIndex
      continue
    }

    return isOdd ? a1 : (A[aIndex - 1] + a1) / 2
  }
}

function main () {
  const testList = [
    {
      nums1: [1, 2],
      nums2: [3, 4],
      result: 2.5
    },
    {
      nums1: [0, 0],
      nums2: [0, 0],
      result: 0
    },
    {
      nums1: [],
      nums2: [1],
      result: 1
    },
    {
      nums1: [2],
      nums2: [],
      result: 2
    }
  ]

  for (const { nums1, nums2, result } of testList) {
    test(JSON.stringify({ nums1, nums2 }), t => {
      t.is(findMedianSortedArrays(nums1, nums2), result)
    })
  }
}

main()
