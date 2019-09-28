/**
 * https://leetcode.com/problems/intersection-of-two-arrays-ii/
 *
 * Type: Array
 * Difficulty: Easy
 * Time Complexity: O(nlgn)
 * Space Complexity: O(1)
 */

import test from 'ava'

/**
 * Firstly, use hash map to store smaller array,
 * Then loop the larger array compared to the hash map.
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect1 = function (nums1 = [], nums2 = []) {
  if (nums1.length < nums2.length) {
    const temp = nums1
    nums1 = nums2
    nums2 = temp
  }

  const hashMap = {}
  for (const num of nums2) {
    hashMap[num] = (hashMap[num] || 0) + 1
  }

  const result = []
  for (const num of nums1) {
    if (hashMap[num]) {
      result.push(num)
      hashMap[num] = hashMap[num] - 1
    }
  }

  return result
}

/**
 * Firstly, sort both array,
 * Then compare numbers from small to large.
 * Time Complexity: O(nlgn)
 * Space Complexity: O(n)
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect2 = function (nums1 = [], nums2 = []) {
  const sortedFunc = (a, b) => a - b
  const sortedNums1 = nums1.sort(sortedFunc)
  const sortedNums2 = nums2.sort(sortedFunc)
  const result = []

  let i = 0
  let j = 0
  while (i < sortedNums1.length && j < sortedNums2.length) {
    const num1 = sortedNums1[i]
    const num2 = sortedNums2[j]
    if (num1 === num2) {
      result.push(num1)
      i++
      j++
    } else if (num1 < num2) {
      i++
    } else {
      j++
    }
  }

  return result
}

function main () {
  const testList = [
    {
      arr1: [1],
      arr2: [],
      result: []
    },
    {
      arr1: [1, 2, 2, 1],
      arr2: [2, 2],
      result: [2, 2]
    },
    {
      arr1: [4, 9, 5],
      arr2: [9, 4, 9, 8, 4],
      result: [4, 9]
    }
  ]

  for (const { arr1, arr2, result } of testList) {
    test(`Method 1: ${JSON.stringify(arr1)} ${JSON.stringify(arr2)}`, t => {
      const givenResult = intersect1(arr1, arr2)
      t.deepEqual(givenResult.sort(), result.sort())
    })
  }

  for (const { arr1, arr2, result } of testList) {
    test(`Method 2: ${JSON.stringify(arr1)} ${JSON.stringify(arr2)}`, t => {
      const givenResult = intersect2(arr1, arr2)
      t.deepEqual(givenResult.sort(), result.sort())
    })
  }
}

main()
